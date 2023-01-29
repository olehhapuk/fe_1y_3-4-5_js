import axios from 'axios';

import './styles/index.scss';
import todoTemplate from './partials/todo.hbs';

axios.defaults.baseURL = 'http://localhost:3000';

const refs = {
  todoList: document.querySelector('.todo-list'),
  todoEditor: document.querySelector('.todo-editor'),
  todoInput: document.querySelector('.todo-editor textarea'),
};

refs.todoInput.addEventListener('keydown', (e) => {
  if (!e.shiftKey && e.code === 'Enter') {
    e.preventDefault();
    createTodo(e.target.value.trim());
  }

  if (e.shiftKey && e.code === 'Enter') {
    e.target.value += '\n';
  }
});

refs.todoEditor.addEventListener('submit', (e) => {
  e.preventDefault();

  const textInput = e.target.elements.text;
  const todoText = textInput.value.trim();

  createTodo(todoText);
});

function createTodo(todoText) {
  axios
    .post('/todos', {
      text: todoText,
      completed: false,
    })
    .then((res) => {
      const todoHtml = todoTemplate(res.data);
      refs.todoList.insertAdjacentHTML('afterbegin', todoHtml);
      refs.todoInput.value = '';
    });
}

refs.todoList.addEventListener('input', (e) => {
  const todoId = e.target.dataset.todoid;

  e.target.disabled = true;

  axios
    .patch(`/todos/${todoId}`, {
      completed: e.target.checked,
    })
    .then((res) => {
      // Remove error message
      document.getElementById('errorMessage')?.remove();
      /**
       * if (document.getElementById('errorMessage')) {
       * document.getElementById('errorMessage').remove();
       * }
       */

      e.target.checked = res.data.completed;
      fetchTodos();
    })
    .catch((error) => {
      console.dir(error);
      e.target.checked = !e.target.checked;

      // Display error message
      refs.todoList.insertAdjacentHTML(
        'beforebegin',
        `<p id="errorMessage">${error.message}</p>`
      );
    })
    .finally(() => {
      e.target.disabled = false;
    });
});

refs.todoList.addEventListener('click', (e) => {
  const btnElem = e.target.closest('.btn-delete');
  if (btnElem) {
    const todoId = btnElem.dataset.todoid;

    btnElem.disabled = true;

    axios
      .delete(`/todos/${todoId}`)
      .then((res) => {
        console.log(res.data);
        fetchTodos();
      })
      .finally(() => {
        btnElem.disabled = false;
      });
  }
});

fetchTodos();

function fetchTodos() {
  axios
    .get('/todos', {
      params: {
        _sort: 'id',
        _order: 'desc',
      },
    })
    .then((res) => {
      let todos = res.data;
      todos = todos.sort((a, b) => a.completed - b.completed);

      const htmlArray = [];
      todos.forEach((elem) => {
        htmlArray.push(todoTemplate(elem));
      });
      const html = htmlArray.join('');
      refs.todoList.innerHTML = html;
    })
    .catch((error) => {
      console.log(error.message);
    });
}
