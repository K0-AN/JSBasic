'use strict';

// Task 1
// Write a function pow(x, n) that returns x in power n.
// Create 2 solutions:
// with operator **
// with loop
function calcPow(x, n) {
  return x ** n;
}

console.log(calcPow(2, 3));

function calcPowLoop(x, n) {
  let result = x;
  for (let i = 1; i < n; i++){
      result *= x;
  }
  return result;
}

console.log(calcPowLoop(2, 4));


// Task 2
// Write a function min(a, b) which returns the least of two numbers a and b.
function getMin(a, b) {
  return Math.min(a, b);
}
console.log(getMin(-6, 3));


// Task 3
// Write a function max(a, b) which returns the greater of two numbers a and b.
let getMax = (a, b) => a > b ? a : b;
console.log(getMax(14, 6));


// Task 4
// Rewrite with arrow functions
// https://javascript.info/task/rewrite-arrow
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the execution.')
);


// Task 5
// Write a function log(message, logger)
// Parameter logger should have default value console.log
function log (message, logger = console.log) {
 logger(message);
}

log('panic');

//OR

function logCallback(message, logger = console.log) {
  logger(message);
}

function logConsoleWarn(message) {
  console.warn(message);
}

function logConsoleError(message) {
  console.error(message);
}
function logAlert(message) {
  alert(message);
}

logCallback('Hello', logAlert);

// Task 6
// Rewrite function showMessage to the self-calling:
(function showMessage(message) {
  console.log(message);
}('test self-func'));