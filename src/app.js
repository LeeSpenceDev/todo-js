import { createTodoElement } from './util/todoElement.js';
console.log('Todo app');

const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-add-button');
const todoList = document.querySelector('.todo-list');

const state = {
  todos: []
};

function addTodo(e) {
  if (!todoInput.value) {
    return;
  }
  const todo = {
    text: todoInput.value,
    id: `todo-${Date.now()}`
  };
  console.log('Add todo:', todo);
  state.todos.push(todo);

  // const todoElement = createTodoElement(todo);
  // todoList.appendChild(todoElement);
  todoInput.value = '';

  render();
}

function deleteTodo(e) {
  console.log('[deleteTodo] event', e);

  const todo = e.target.getAttribute('data-id');
  if (!todo) {
    return;
  }
  console.log('[deleteTodo] todo id:', todo);
  state.todos = state.todos.filter(t => t.id !== todo);
  console.log('[deleteTodo] todos:', state.todos);
  render();
}

function subscribeToEvents() {
  todoButton.addEventListener('click', addTodo);
  todoList.addEventListener('click', deleteTodo);
}

function render() {
  console.log('[render] todo list');

  todoList.innerHTML = '';
  console.log('[render] state.todos:', state.todos);
  state.todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
}

subscribeToEvents();
render();