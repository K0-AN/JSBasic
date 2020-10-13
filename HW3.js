'use strict';

//Task 1
//User inputs a number. Check the number and write a message if it's odd or even.
let number = +prompt('input number');
number = parseInt(number);
if (number % 2 == 0) {
  console.log('The number is even');
} else {
  console.log('The number is odd');
}


// Task 2
// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it
let age = +prompt('input age');
age = parseInt(age);
if (!(age >= 14 && age <= 90)) {
  console.log('not in');
} else {
  console.log('in');
}

let age = +prompt('input age');
age = parseInt(age);
if (age < 14 || age > 90) {
  console.log('not in');
} else {
  console.log('in');
}


//Task 3
//Write to console number sequence (console.log) 0 2 4 6 8 10:
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}


// Task 4
// Write to console number sequence (console.log): 1 3 5 7 9
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}


//Task 5
//Write a user login application.
//Information about task is here: https://javascript.info/task/check-login
let username = prompt('Who\'s there?:');
if (username === 'Admin') {
  let pwd = prompt('Password?:');
  if (pwd === 'TheMaster') {
    alert('Welcome!');
  } else if (pwd && pwd !== 'TheMaster') {
    alert('Wrong password');
  } else {
    alert('Canceled');
  }
} else if (username && username !== 'Admin') {
  alert('I don\'t know you');
} else {
  alert('Canceled!');
}
