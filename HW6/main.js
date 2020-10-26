'use strict';

/*Task 1
Get value without currency https://javascript.info/task/extract-currency
*/
let currency = '$120';
function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue(currency));

/*
Task 2
Make name right https://javascript.info/task/ucfirst
*/
let name = 'andrii';
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(name));

/*
Task 3
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Add object method sayHi. This method should log to console phrase 'Hello, from XXX' (XXX - user name)
*/
let user = {};
console.log(user);
user = { name: 'John' };
console.log(user);
user['surname'] = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
user['sayHi'] = function () {
  console.log(`Hello, from ${this.name}`);
}
user.sayHi();

/*
Task 4
Find average age for users
const users = [
    {name: 'Ivan', age: 35, gender: 'male'},
    {name: 'Ann', age: 33, gender: 'female'},
    {name: 'Jane', age: 40, gender: 'female'},
    {name: 'Alex', age: 20, gender: 'male'},
    {name: 'Sam', age: 52, gender: 'female'}
];
*/
const users = [
  { name: 'Ivan', age: 35, gender: 'male' },
  { name: 'Ann', age: 33, gender: 'female' },
  { name: 'Jane', age: 40, gender: 'female' },
  { name: 'Alex', age: 20, gender: 'male' },
  { name: 'Sam', age: 52, gender: 'female' }
];

function avgAge(array) {
  return array.reduce((accumulator, user) => accumulator + user.age, 0) / array.length;
}

console.log(
  avgAge(users)
)

/*
Task 5
Check for emptiness
P.S. you can go through object with for...in or use Object.keys()
*/
function isEmpty(obj) {
  let isEmpty;
  if (!Object.keys(obj).length) {
    return true;
  } else {
    return false;
  };
}

let empty = {};

console.log(isEmpty(empty))

/*
Task 6
Multiply numeric properties by 2
*/
function multiplyNumeric(obj) {
  for (let value in obj) {
    typeof obj[value] == 'number' ? obj[value] *= 2 : obj[value];
  }

}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  test: 40
};
multiplyNumeric(menu);
console.log(menu);

/*
Task 7
Create calculator
*/
let a = 5;
let b = 2;

let calculator = {
  read() {
    this.a = a;
    this.b = b;
    return console.log(`a = ${this.a}, b = ${this.b}`);
  },
  sum() {
    return console.log(`sum = ${this.a + this.b}`);
  },
  mul() {
    return console.log(`mul = ${this.a * this.b}`);
  }
}

calculator.read();
calculator.sum();
calculator.mul();

/*
Task 8
Create chaining
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // shows the current step
    console.log(this.step);
    return this;
  }
};
ladder.up().up().down().showStep();