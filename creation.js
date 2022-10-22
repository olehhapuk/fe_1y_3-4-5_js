const todosData = [
  {
    title: 'Todo 1',
    priority: 5,
    isFinished: false,
  },
  {
    title: 'Todo 2',
    priority: 9,
    isFinished: false,
  },
  {
    title: 'Todo 3',
    priority: 3,
    isFinished: true,
  },
  {
    title: 'Todo 4',
    priority: 1,
    isFinished: false,
  },
];

// const list = document.querySelector('.todo-list');

// function createTodoElement(title, priority, checked) {
//   const itemElem = document.createElement('li');
//   itemElem.classList.add('todo-item');

//   const titleElem = document.createElement('h3');
//   titleElem.classList.add('todo-item__title');
//   titleElem.textContent = title;

//   const priorityElem = document.createElement('span');
//   priorityElem.classList.add('todo-item__priority');
//   priorityElem.textContent = priority;

//   const inputElem = document.createElement('input');
//   inputElem.type = 'checkbox';
//   inputElem.classList.add('todo-item__checkbox');
//   inputElem.checked = checked;

//   itemElem.append(titleElem, priorityElem, inputElem);

//   return itemElem;
// }

// function setTodos(todos) {
//   const newTodoElements = [];

//   todos.forEach((todo) => {
//     const newTodoElem = createTodoElement(
//       todo.title,
//       todo.priority,
//       todo.isFinished
//     );
//     newTodoElements.push(newTodoElem);
//   });

//   list.append(...newTodoElements);
// }

// setTodos(todosData);

const list = document.querySelector('.todo-list');

function setTodos(todos) {
  let finalHtml = '';

  todos.forEach((todo) => {
    const newTodoHtml = `
    <li class="todo-item">
      <h3 class="todo-item__title">${todo.title}</h3>
      <span class="todo-item__priority">10</span>
      <input type="checkbox" class="todo-item__checkbox" checked />
    </li>`;

    finalHtml += newTodoHtml;
  });

  list.insertAdjacentHTML('beforeend', finalHtml);
}

setTodos(todosData);
