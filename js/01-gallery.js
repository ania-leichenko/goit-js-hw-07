import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const images = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", images);

function createItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", getImage);

function getImage(e) {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
  const source = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`, {
        onShow: () => window.addEventListener("keydown", onEsc),
        onClose: () => window.removeEventListener("keydown", onEsc)
    });

    function onEsc(event) {
      if (event.keyCode === 27) {
        instance.close();
      }
    }

  instance.show();
}
