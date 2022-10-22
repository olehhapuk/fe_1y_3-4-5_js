const primaryCards = document.querySelectorAll('.card_primary');
const primaryCardsCount = primaryCards.length;
// console.log(primaryCardsCount);
console.log(primaryCards);

const primaryTitles = [];

primaryCards.forEach((card) => {
  // primaryTitles.push(card.firstElementChild);
  const title = card.querySelector('h3');
  primaryTitles.push(title);
});

console.log(primaryTitles);

// const titles = document.querySelectorAll('.card_primary h3');
// console.log(titles);

// const titlesArray = Array.from(titles);
// const titlesText = titlesArray.map((text) => text.textContent);
// console.log(titlesText);
