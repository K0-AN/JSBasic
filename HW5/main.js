'use strict';

// Task 1
//Tell if copying worked https://javascript.info/task/item-value
/* Banana буде і в масиві fruits і в масиві shoppingCart бо це об'єкт і просто присвоєння це ссилка на той же масив
потрібно додати spread оператор [...fruits] щоб був окремий масив.
*/

/*
Task 2
Array activities

Create an array styles with items "Jazz" and "Blues" => ["Jazz", "Blues"]
Append “Rock-n-Roll” to the end => ["Jazz", "Blues", "Rock-n-Roll"]
Replace the value in the middle by “Classics” => ["Jazz", "Classics", "Rock-n-Roll"]
Prepend Rap and Reggae to the array => ["Rap", "Reggae", "Jazz", "Classics", "Rock-n-Roll"]
*/
let styles =  ['Jazz', 'Blues'];
console.log (styles);
styles.push('Rock-n-Roll');
console.log (styles);
styles.splice(1, 1, 'Classics');
console.log (styles);
styles.splice(0, 0, 'Rap', 'Reggae');
console.log (styles);

/*
Task 3
Create a function getAverageAge(array)
input: '15, 60, 45, 30'
output: 37.5
use split() for string
*/

function getAverageAge(array) {
  let numbers = array.split(', ');
  let nom = 0;
  let denom = numbers.length;
  for(let i = 0; i<denom; i++) {
    nom += +numbers[i];
  }
  return nom / denom;
}

console.log(getAverageAge('15, 60, 45, 30'));

/* 
Task 4
Filter items from range https://javascript.info/task/filter-range
*/

let arr = [5, 3, 8, 1, 4, 9];
function filterRange(arr, a, b) {
let filtered =[...arr.filter(item => item >= a && item <= b)];
return filtered;
}


console.log(filterRange(arr, 2, 5));
console.log(arr);