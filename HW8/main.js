'use strict';

let children = document.getElementById("grid-1").children;

for (let i = 0; i < children.length; i++) {
  if (i % 2 == 1) {
    children[i].style.background = '#aff0ad';
  } else {
    children[i].classList.add('grid-item-background');
  }
  
}

let alert = prompt('Enter text here:');

let text = document.getElementsByClassName('text-placeholder')[0];
text.innerText = alert;
if (alert.indexOf('1') != -1) {
  text.classList.add('numeric');
}
