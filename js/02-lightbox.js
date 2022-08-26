import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const images = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", images);

function createItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
       </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});