// const root = document.getElementById('root');
const todoList = document.querySelector('.todo-list');

function createTodoItemElement(text) {
  // Створили контейнер
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  // Створили параграф
  const todoText = document.createElement('p');
  todoText.classList.add('todo-text');
  todoText.textContent = text;

  // Додали параграф у контейнер
  todoItem.appendChild(todoText);

  return todoItem;
}

const cardsData = ['Card 1', 'Card 2', 'Card 3'];
// Додавання декількох елементів
const cardElements = cardsData.map((text) => createTodoItemElement(text));

todoList.append(...cardElements);

// events
// const clickHandler = {
//   clicked: false,
//   handleClick() {
//     this.clicked = true;
//     console.log(this, this.clicked);
//   },
// };
// todoList.addEventListener('click', clickHandler.handleClick.bind(clickHandler));

// // [] === [] // false
// const a = [];
// const b = a;

// console.log(a === b);

function handleClick() {
  console.log('Clicked');
}

todoList.addEventListener('click', handleClick); // Підписка на подію

setTimeout(() => {
  todoList.removeEventListener('click', handleClick); // Відписка від події
}, 1500);

// Додавання через html рядок
// const cardsHtml = cardsData
//   .map((text) => `<button>${text}</button>`)
//   .join('\n');

// todoList.insertAdjacentHTML('beforeend', cardsHtml);

// todoList.appendChild(todoItem1); // Додає один елемен в кінець списку
// todoList.appendChild(todoItem2);

// todoList.append(todoItem1, todoItem2); // Додає елементи в кінець
// todoList.prepend(todoItem1, todoItem2); // Додає елементи на початок
// todoList.after(todoItem1, todoItem2); // Додає елементи після todoList
// todoList.before(todoItem1, todoItem2); // Додає елементи перед todoList

// todoItem1.remove(); // Видалення елементу

// const todoItem1Clone = todoItem1.cloneNode(true); // Клонує елемент
// todoList.append(todoItem1Clone);
