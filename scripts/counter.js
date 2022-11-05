const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', (e) => {
  counterValue--;
  valueElem.textContent = counterValue;
});

incrementButton.addEventListener('click', (e) => {
  counterValue++;
  valueElem.textContent = counterValue;
});
