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

let text = document.getElementsByClassName('text-placeholder');
for (let i = 0; i < text.length; i++) {
  text[i].innerText = alert;
  if (alert.indexOf('1') != -1) {
    text[i].classList.add('numeric');
  }
}



