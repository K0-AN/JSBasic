'use strict';

/*Task 1
ask 1
Answer the question

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

*/
//Виведе Pete так як переназначено змінну name, функція бере останнє значення змінної

/*
Task 2
Fix the code

(function() {
  console.info('init...');
});

const user = { name: 'Ann', age: 54 };
const user2 = user;
user2.age = 40;

user2.sayHi = () => console.log(`Hi from ${this.name}`);
user2.sayHi();

let userAges = [user, user2].map(item => it.age);
const oldestUserAge = Math.max(userAges);
console.log(oldestUserAge);
Expected result in console:

init...  
Hi from Ann  
54    
*/
(function() {
  console.info('init...');
}());

const user = { name: 'Ann', age: 54 };
const user2 = {...user};
user2.age = 40;

user2.sayHi = function () { console.log(`Hi from ${this.name}`);}
user2.sayHi();

let userAges = [user, user2].map(item => item.age);

/*
let userAges = [user.age, user2.age]; такий код теж працює чи є сенс в map взагалі??
*/

const oldestUserAge = Math.max(...userAges);
console.log(oldestUserAge);

