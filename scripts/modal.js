const modalOpenBtn = document.querySelector('#modalOpenBtn');
const backdropElem = document.querySelector('#modal');
const modalCloseBtn = document.querySelector('#modalCloseBtn');

modalOpenBtn.addEventListener('click', () => {
  backdropElem.classList.add('open');
});

backdropElem.addEventListener('click', () => {});

modalCloseBtn.addEventListener('click', () => {
  backdropElem.classList.remove('open');
});

window.addEventListener('keydown', () => {});
s;
