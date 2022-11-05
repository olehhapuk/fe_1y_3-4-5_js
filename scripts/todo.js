const createFormElem = document.querySelector('.create-form');
const todoListElem = document.querySelector('.todo-list');

createFormElem.addEventListener('submit', handleCreateFormSubmit);
todoListElem.addEventListener('click', handleTodoListClick);

// .todo-delete-btn
function handleTodoListClick(e) {
  const deleteBtn = e.target.closest('.todo-delete-btn');
  if (deleteBtn) {
    const itemElem = e.target.closest('.todo-item');
    itemElem.remove();
  }
}

function handleCreateFormSubmit(e) {
  e.preventDefault();

  const formElem = e.target;

  const todo = {
    id: Date.now().toString(),
    text: formElem.elements.text.value,
    priority: formElem.elements.priority.value,
  };

  const todoItemHtml = createTodoHtml(todo.id, todo.text, todo.priority);
  todoListElem.insertAdjacentHTML('beforeend', todoItemHtml);
}

function createTodoHtml(id, text, priority) {
  const formattedPriority = priority[0].toUpperCase() + priority.slice(1);

  return `
    <li class="todo-item" data-id="${id}">
      <input type="checkbox" class="todo-checkbox" />
      <p class="todo-text">${text}</p>
      <span class="todo-priority">${formattedPriority}</span>
      <div class="todo-controls">
        <button class="btn todo-delete-btn">
          <i class="bi bi-trash-fill"></i>
        </button>
      </div>
    </li>
  `;
}
