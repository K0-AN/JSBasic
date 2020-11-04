'use strict';


let todos = [
  { userId: 1, id: 9, title: "Todo Item 9", completed: false },
  { userId: 2, id: 3, title: "Todo Item 3", completed: true },
  { userId: 4, id: 8, title: "Todo Item 8", completed: false },
  { userId: 6, id: 5, title: "Todo Item 5", completed: false }
];


const body = document.body;

for (let i = 0; i < todos.length; i++) {
  const addDiv = document.createElement('div');

  addDiv.classList.add('todo');
  addDiv.id = todos[i].id;
  body.prepend(addDiv);

  const addContainer = document.createElement('div');

  addContainer.classList.add('todo-container');
  addDiv.prepend(addContainer);

  const addTitle = document.createElement('p');

  addTitle.classList.add('title');
  addTitle.innerText = todos[i].title
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
  addUserID.innerText = todos[i].userId
  addContainer2.prepend(addUserID);

  const addStateIcon = document.createElement('span');

  addStateIcon.classList.add('state-icon');
  addContainer2.append(addStateIcon);

}


const deleteButtons = document.querySelectorAll('.delete-icon');

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = function (event) {
    deleteButtons[i].closest('.todo').remove();
  }
}

const stateIcons = document.querySelectorAll('.state-icon');

for (let i = 0; i < stateIcons.length; i++) {
  stateIcons[i].onclick = function (event) {
    stateIcons[i].closest('.todo').classList.toggle('completed');
  }
}