const todosList = document.querySelector('#list');
const loadBtn = document.querySelector('#load');
const loader = document.querySelector('.loading-image');

const url = 'https://jsonplaceholder.typicode.com/todos';

loadBtn.addEventListener('click', () => {
  loader.style.display = 'block';
  loadBtn.style.display = 'none';
  // loader.style.backgroundColor

  fetch(url)
    .then((res) => res.json())
    .then((todos) => {
      loader.style.display = 'none';

      for (const todo of todos) {
        const html = `<li class="list__item">${todo.title} ${
          todo.completed ? '✅' : '❌'
        }</li>`;
        todosList.innerHTML += html;
      }
    });
});
