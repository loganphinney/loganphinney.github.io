{
  inputs = {
    system.url = "path:/home/loganp/.dotfiles/nix/dsk";
    nixpkgs.follows = "system/nixpkgs";
  };
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
            ];
          };
        }
      );
    };
}
