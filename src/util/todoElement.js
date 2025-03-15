import { getTodos, addTodo, deleteTodo } from '../state';

const { todoInput, todoButton, todoList } = selectElements();

export function createTodoElement(todo) {
  const button = document.createElement('button');
  button.textContent = 'Remove';
  button.setAttribute('data-id', todo.id);

  const div = document.createElement('div');
  div.textContent = todo.text + ' ';
  div.id = `todo-${todo.id}`;
  div.appendChild(button);

  const todoElement = document.createElement('li');
  todoElement.appendChild(div);

  return todoElement;
}

export function selectElements() {
  const todoInput = document.querySelector('#todo-input');
  const todoButton = document.querySelector('#todo-add-button');
  const todoList = document.querySelector('.todo-list');
  return { todoInput, todoButton, todoList };
}

export function render() {
  console.log('[render] todo list');

  todoList.innerHTML = '';
  const todos = getTodos();
  console.log('[render] todos:', todos);
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
}

function onAddTodo() {
  const todo = todoInput.value;
  if (!todo) {
    return;
  }

  console.log('[onAddTodo] event', todo);
  addTodo(todo);

  todoInput.value = '';

  render();
}

function onDeleteTodo(e) {
  console.log('[deleteTodo] event', e);

  const todo = e.target.getAttribute('data-id');
  if (!todo) {
    return;
  }

  deleteTodo(todo);

  render();
}

export function subscribeToEvents() {
  todoButton.addEventListener('click', onAddTodo);
  todoList.addEventListener('click', onDeleteTodo);
}