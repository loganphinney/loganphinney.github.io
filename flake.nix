{
  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1";
  outputs =
    { nixpkgs, ... }:
    let
      supportedSystems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forEachSupportedSystem =
        f: nixpkgs.lib.genAttrs supportedSystems (system: f { pkgs = import nixpkgs { inherit system; }; });
    in
    {
      devShells = forEachSupportedSystem (
        { pkgs }:
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              typescript-language-server
              vscode-html-languageserver
              vscode-css-languageserver
              jq
              (writeShellScriptBin "mapimgs" ''
                set -euo pipefail
                images_dir="media/images"
                gallery="gallery.json"
                changed=0
                if [[ ! -d "$images_dir" ]]; then
                  echo "Error: $images_dir does not exist" >&2
                  exit 1
                fi
                if [[ ! -f "$gallery" ]]; then
                  printf '{}\n' > "$gallery"
                fi
                tmp=$(mktemp "''${gallery}.tmp.XXXXXX")
                trap 'rm -f "$tmp"' EXIT
                for directory in "$images_dir"/*/; do
                  [[ -d "$directory" ]] || continue
                  camera=$(basename "$directory")
                  files=$(
                    for file in "$directory"*; do
                      [[ -f "$file" ]] || continue
                      basename "$file"
                    done | ${pkgs.jq}/bin/jq -Rsc 'split("\n") | map(select(length > 0))'
                  )
                  while IFS= read -r filename; do
                    if ! ${pkgs.jq}/bin/jq -e \
                      --arg key "$camera" \
                      --arg file "$filename" \
                      '(.[$key] // []) | index($file) != null' \
                      "$gallery" >/dev/null; then
                      echo "+ $camera/$filename"
                      changed=1
                    fi
                  done < <(printf '%s\n' "$files" | ${pkgs.jq}/bin/jq -r '.[]')
                  ${pkgs.jq}/bin/jq \
                    --indent 4 \
                    --arg key "$camera" \
                    --argjson files "$files" \
                    '.[$key] = reduce $files[] as $file
                      ((.[$key] // []);
                       if index($file) then . else . + [$file] end)' \
                    "$gallery" > "$tmp"
                  mv "$tmp" "$gallery"
                  tmp=$(mktemp "''${gallery}.tmp.XXXXXX")
                done
                if [[ "$changed" -eq 1 ]]; then
                  echo "Updated $gallery"
                else
                  echo "Nothing to update"
                fi
              '')
            ];
          };
        }
      );
    };
}
