import axios from 'axios';

import './styles/index.scss';
import todoTemplate from './partials/todo.hbs';

axios.defaults.baseURL = 'http://localhost:3000';

const refs = {
  todoList: document.querySelector('.todo-list'),
  todoEditor: document.querySelector('.todo-editor'),
};

refs.todoEditor.addEventListener('submit', (e) => {
  e.preventDefault();

  const textInput = e.target.elements.text;
  const todoText = textInput.value.trim();

  axios
    .post('/todos', {
      text: todoText,
      completed: false,
    })
    .then((res) => {
      const todoHtml = todoTemplate(res.data);
      refs.todoList.insertAdjacentHTML('beforeend', todoHtml);
    });
});

fetchTodos();

function fetchTodos() {
  axios
    .get('/todos')
    .then((res) => {
      const htmlArray = [];
      res.data.forEach((elem) => {
        htmlArray.push(todoTemplate(elem));
      });
      const html = htmlArray.join('');
      refs.todoList.insertAdjacentHTML('beforeend', html);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
