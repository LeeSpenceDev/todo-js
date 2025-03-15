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