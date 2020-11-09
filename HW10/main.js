'use strict';

//Task 0
//Log message Hello! to the console every 0.5 seconds.
//After 5 seconds stop this logging

const helloTimer = setInterval(() => console.log('Hello'), 500);

setTimeout(() => clearInterval(helloTimer), 5000);

//Task 1

const form = document.forms.userForm;

form.addEventListener('change', function (event) {

  const input = event.target;
  if (input.type == 'number' && (input.value < 0 || input.value > 115)) {
    input.classList.add('invalid');
  } else if (input.type == 'text' && (input.value.length < 3 || input.value.length > 20)) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
  }
})
form.addEventListener('submit', function (event) {
  event.preventDefault();
})