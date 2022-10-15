const card = document.querySelector('#card');

// card.className = 'card';

// Додавання нового класу
card.classList.add('card', 'card_active');

// Перевірка на існуючий клас
console.log(card.classList.contains('product'));
console.log(card.classList.contains('card_active'));

// Видалення існуючого класу
card.classList.remove('card_active');

// Перезаписування класу
card.classList.replace('card', 'product');

// Переключення класу
// if (card.classList.contains('product_open')) {
//   card.classList.remove('product_open');
// } else {
//   card.classList.add('product_open');
// }
card.classList.toggle('product_open');

const cardTitle = card.firstElementChild;

cardTitle.textContent = 'Card Title';

const cardDescription = card.lastElementChild;

cardDescription.textContent = 'Card description';

// Data attributes
console.log(card.dataset.title);
console.log(card.dataset.count);

card.dataset.count = 5;

// Attribute selector
const cardWithData = document.querySelector("div[data-title='card1']");
