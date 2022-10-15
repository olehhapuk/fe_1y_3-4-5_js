// const root = document.getElementById('root');
const todoList = document.querySelector('.todo-list');

// Створили контейнер
const todoItem = document.createElement('div');
todoItem.classList.add('todo-item');

console.log(todoItem);

// Створили параграф
const todoText = document.createElement('p');
todoText.classList.add('todo-text');
todoText.textContent = 'Hello from JS';

console.log(todoText);

// Додали параграф у контейнер
todoItem.appendChild(todoText);

console.log(todoItem);

// Додаємо контейнер з параграфом на сторінку в список
todoList.appendChild(todoItem);
