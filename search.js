// const list = document.querySelector('ul');

// const listItem = document.querySelector('ul li');

// list.firstElementChild.textContent = 'Hello, World!';
// listItem.textContent = 'Hello again';

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.firstElementChild.nextElementSibling);
// console.log(list.lastElementChild.previousElementSibling);
// console.log(list.children[1]);

// const allListItems = document.querySelectorAll('li');
// console.log(allListItems);
// console.log(Array.from(allListItems));

// const spanItem = document.getElementById('myspan');
// const spanItem = document.querySelector('#myspan');
// console.log(spanItem);

function setParagraphText() {
  const paragraph = document.querySelector('p');
  if (!paragraph) {
    return;
  }

  paragraph.textContent = 'JavaScript';
}

setParagraphText();

// const emptyList = document.querySelectorAll('p');
// if (emptyList.length > 0) {
//   console.log(emptyList);
// }
