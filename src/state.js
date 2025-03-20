const state = {
  todos: []
};

initState();

function initState() {
  const todos = JSON.parse(localStorage.getItem('todos'));
  if (todos) {
    state.todos = todos;
  }
}

function saveState() {
  localStorage.setItem('todos', JSON.stringify(state.todos));
}

export function getTodos() {
  return state.todos;
}

export function addTodo(todoText) {
  const todo = {
    text: todoText,
    id: `todo-${Date.now()}`,
    checked: false
  };
  console.log('[addTodo] todo:', todo);
  state.todos.push(todo);
  console.log('[addTodo] todos:', state.todos);

  saveState();
}

export function deleteTodo(todoId) {
  console.log('[deleteTodo] todo id:', todoId);
  state.todos = state.todos.filter(t => t.id !== todoId);
  console.log('[deleteTodo] todos:', state.todos);

  saveState();
}

export function checkTodo(todoId) {
  console.log('[checkTodo] todo id:', todoId);
  state.todos = state.todos.map(t => {
    if (t.id === todoId) {
      t.checked = !t.checked;
    }
    return t;
  });
  console.log('[checkTodo] todos:', state.todos);

  saveState();
}