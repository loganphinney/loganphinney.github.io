const gallery = document.querySelector("#gallery");

const viewer = document.createElement("dialog");
viewer.className = "image-viewer";

const image = document.createElement("img");
viewer.appendChild(image);

viewer.addEventListener("click", () => {
    viewer.close();
});

document.body.appendChild(viewer);

function layoutMasonry(container, columns) {
    const items = [...container.children];
    const columnHeights = Array(columns).fill(0);
    const gap = 16;

    items.forEach((item, index) => {
        const column = index % columns;

        item.style.gridColumn = column + 1;
        item.style.gridRow = "1";
        item.style.transform =
            `translateY(${columnHeights[column]}px)`;

        columnHeights[column] += item.offsetHeight + gap;
    });

    container.style.height =
        `${Math.max(...columnHeights) - gap}px`;
}

function updateMasonry(container) {
    if (container.hidden) {
        container.style.height = "0";
        return;
    }

    const width = container.clientWidth;

    const columns =
        width >= 900 ? 3 :
            width >= 600 ? 2 :
                1;

    container.style.gridTemplateColumns =
        `repeat(${columns}, 1fr)`;

    layoutMasonry(container, columns);
}

fetch("gallery.json")
    .then(response => response.json())
    .then(albums => {
        for (const [name, files] of Object.entries(albums)) {
            const section = document.createElement("section");

            const header = document.createElement("h2");
            header.textContent = name;

            const images = document.createElement("div");
            images.className = "gallery-images";

            header.addEventListener("click", () => {
                images.hidden = !images.hidden;

                if (!images.hidden) {
                    updateMasonry(images);
                }
            });

            for (const file of files) {
                const thumbnail = document.createElement("img");

                thumbnail.src =
                    `media/images/${name}/${file}`;

                thumbnail.alt = file;
                thumbnail.loading = "lazy";

                thumbnail.addEventListener("click", () => {
                    image.src = thumbnail.src;
                    image.alt = thumbnail.alt;
                    viewer.showModal();
                });

                images.appendChild(thumbnail);
            }

            section.append(header, images);
            gallery.appendChild(section);

            const layout = () => updateMasonry(images);

            images.querySelectorAll("img").forEach(image => {
                if (image.complete) {
                    layout();
                } else {
                    image.addEventListener("load", layout);
                }
            });
        }
    });

window.addEventListener("resize", () => {
    document
        .querySelectorAll(".gallery-images")
        .forEach(updateMasonry);
});
