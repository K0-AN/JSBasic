'use strict';


let length = 5;
let index = 0;
let todos = {};

fetch ('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json =>  setTodos(json)); 


const body = document.getElementById('todos');

function setTodos(json) {
   todos = json;
fillTodos();
}

function fillTodos(){
for (index; index < length; index++) {
  const addDiv = document.createElement('div');

  addDiv.classList.add('todo');
  addDiv.id = todos[index].id;
  if (todos[index].completed == true){
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
  if(target.classList.contains('delete-icon')){
    target.closest('.todo').remove();

  } else if(target.classList.contains('state-icon')){
    
     setTodoState(target.closest('.todo').id, false);
     
     fillTodos();
  }
  
})

function setTodoState(id, state) {
 //  for (let i=0; i<todos.length; i++) {
//    if (todos[i].id == id) {
//      todos[i].completed = state;
//    }
//  }
//}
let itemId = todos.find(item => item.id == id);
console.log(itemId);
    
}
setTodoState (4, false);


document.getElementById('loadTodos')
.onclick = function (event) {

  length += 1;
  fillTodos();
}