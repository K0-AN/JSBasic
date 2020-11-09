'use strict';


let len = 20;
let index = 0;
let todos = [];

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => setTodos(json));


const body = document.getElementById('todos');

function setTodos(json) {
  todos = json;
  fillTodos();
}

function fillTodos() {
  for (index; index < len; index++) {
    const addDiv = document.createElement('div');

    addDiv.classList.add('todo');
    addDiv.id = todos[index].id;
    if (todos[index].completed == true) {
      addDiv.classList.add('completed');
    }
    body.append(addDiv);

    const addContainer = document.createElement('div');

    addContainer.classList.add('todo-container');
    addDiv.prepend(addContainer);

    const addTitle = document.createElement('p');

    addTitle.classList.add('title');
    addTitle.innerText = todos[index].title
    addContainer.prepend(addTitle);

    const addDeleteIcon = document.createElement('span');

    addDeleteIcon.classList.add('delete-icon');
    addContainer.append(addDeleteIcon);

    ///////

    const addContainer2 = document.createElement('div');

    addContainer2.classList.add('todo-container');
    addDiv.append(addContainer2);

    const addUserID = document.createElement('span');

    addUserID.classList.add('user-id');
    addUserID.innerText = `User #${todos[index].userId}`
    addContainer2.prepend(addUserID);

    const addStateIcon = document.createElement('span');

    addStateIcon.classList.add('state-icon');

    addContainer2.append(addStateIcon);

  }
}
const todosContainer = document.getElementById('todos');

todosContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('delete-icon')) {
    target.closest('.todo').remove();

    deleteTodo(target.closest('.todo').id);

  } else if (target.classList.contains('state-icon')) {

    setTodoState(target.closest('.todo').id);

    if (target.closest('.completed')) {
      target.closest('.todo').classList.remove('completed');;
    } else {
      target.closest('.todo').classList.add('completed');;
    }
  }

})

function setTodoState(id) {
  let itemId = todos.find(item => item.id == id);
  console.log(itemId);
  itemId.completed = !itemId.completed;
  console.log(itemId);

}

function deleteTodo(id) {
  let itemId = todos.findIndex(item => item.id == id);
  console.log(todos[itemId]);
  todos.splice(itemId, 1);
  console.log(todos[itemId]);
}



document.getElementById('loadTodos')
  .onclick = function (event) {

    len += 20;
    fillTodos();
  }