const modalOpenBtn = document.querySelector('#modalOpenBtn');
const backdropElem = document.querySelector('#modal');
const modalCloseBtn = document.querySelector('#modalCloseBtn');

function openModal() {
  backdropElem.classList.add('open');
}

function closeModal() {
  backdropElem.classList.remove('open');
}

function handleModalOpenBtnClick() {
  openModal();
}

function handleBackdropElemClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function handleModalCloseBtnClick() {
  closeModal();
}

function handleKeydown(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

modalOpenBtn.addEventListener('click', handleModalOpenBtnClick);
backdropElem.addEventListener('click', handleBackdropElemClick);
modalCloseBtn.addEventListener('click', handleModalCloseBtnClick);
window.addEventListener('keydown', handleKeydown);
