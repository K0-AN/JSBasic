'use strict';

/*
Task 3
Create file todo.js and todo.html, include script to HTML file.
Create array of 5 todo objects with random data.
Todo Object fields: userId, id, title, completed.
Example:
{
  userId: 1,
  id: 1,
  title: "Todo Item 1",
  completed: false
}
Create function addTodo(userId, id, title, completed)
addTodo ads new todo object to array

Create function deleteTodo(id)
deleteTodo deletes todo object with specific id from array

Create function setTodoState(id, state)
setTodoState changes field completed for specific todo object

Test functions in console
*/

let todos = [
  {
    userId: 1,
    id: 548,
    title: "Todo Item 1",
    completed: false
  }
];

function addTodo(userId, id, title, completed) {
  todos.push({ userId, id, title, completed });

}

addTodo(2, 2, 'Todo Item 2', true);
addTodo(2, 3, 'Todo Item 3', false);
console.log(todos);

function deleteTodo(id) {
for (let i=0; i<todos.length; i++) {
  if (todos[i].id == id) {
    todos.splice(i, 1);
  }
}

}

deleteTodo(548);
console.log(todos);


function setTodoState(id, state) {
  for (let i=0; i<todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].completed = state;
    }
  }
}

setTodoState(2, false);
console.log(todos);