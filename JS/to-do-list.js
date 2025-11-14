const todoList = [];

function addTask() {
  const inputElement = document.querySelector('.js-todo-input');
  const todo = inputElement.value;
  console.log(todo);

  todoList.push(todo);
  console.log(todoList);

  inputElement.value = '';
}