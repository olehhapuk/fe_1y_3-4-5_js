import images from './images.js';

const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const modalImage = modal.querySelector('.lightbox__image');
const closeBtn = modal.querySelector('button[data-action="close-lightbox"]');
const modalOverlay = modal.querySelector('.lightbox__overlay');

let isModalOpen = false;
let activeIndex = -1;

document.addEventListener('keydown', (e) => {
  if (!isModalOpen) {
    return;
  }

  switch (e.code) {
    case 'Escape':
      closeModal();
      break;

    case 'ArrowLeft':
      prev();
      break;

    case 'ArrowRight':
      next();
      break;

    default:
      break;
  }
});

modalOverlay.addEventListener('click', (e) => {
  closeModal();
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('gallery__image')) {
    const originalUrl = e.target.dataset.source;
    const description = e.target.alt;
    openModal(originalUrl, description);
  }
});

function prev() {
  console.log('prev');
}

function next() {
  console.log('next');
}

function openModal(originalUrl, description) {
  modal.classList.add('is-open');
  modalImage.src = originalUrl;
  modalImage.alt = description;
  isModalOpen = true;
}

function closeModal() {
  modal.classList.remove('is-open');
  modalImage.src = '';
  modalImage.alt = '';
  isModalOpen = false;
}

function createGalleryElem(preview, original, description) {
  const finalHtml = `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;

  return finalHtml;
}

function renderImages() {
  let finalImages = '';
  images.forEach((image) => {
    const imageHtml = createGalleryElem(
      image.preview,
      image.original,
      image.description
    );

    finalImages += imageHtml;
  });

  gallery.insertAdjacentHTML('afterbegin', finalImages);
}

renderImages();
