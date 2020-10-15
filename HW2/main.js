'use strict';

// Task 1
// User inputs 2 numbers (via prompt). Show the sum of these numbers in alert
let number1 = +prompt('input 1:');
let number2 = +prompt('input 2:');
console.log(`output: ${number1 + number2}`);
alert(`output: ${number1 + number2}`);


//Task 2
//User inputs their full name. Show alert with welcome message.
let name = prompt('what is your name?');
console.log(`Hello, ${name}`);
alert(`Hello, ${name}`);


//Task 3
//User inputs a number. Show remainder of the division by 2.
let remainder = prompt('Enter number');
remainder = parseInt(remainder);
console.log(`output: ${remainder % 2}`);
alert(`output: ${remainder % 2}`);


//Task 4
//User inputs a float number. Show value before dot and after dot.
let floatNumber = prompt('Enter float number');
floatNumber = parseFloat(floatNumber);
let afterLength = floatNumber.toString().split('.')[1].length;
let before = Math.floor(floatNumber);
let after = (floatNumber % 1).toFixed(afterLength);
console.log(`Before = ${before}, After = ${after}`);
