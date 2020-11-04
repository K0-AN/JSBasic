'use strict';


const openButton = document.getElementById('openPopupButton');
const closeButton = document.getElementById('closePopupButton');

const popup = document.getElementsByClassName('popup');

openButton.onclick = function (event) {
  openButton.style.display = 'none';
  for (let i = 0; i < popup.length; i++) {
    popup[i].classList.add('visible');
  }
}

closeButton.onclick = function (event) {
  openButton.style.display = '';
  for (let i = 0; i < popup.length; i++) {
    popup[i].classList.remove('visible');
  }
}

document.onkeydown = function (event) {
  openButton.style.display = '';
  if (event.key === 'Escape') {
    for (let i = 0; i < popup.length; i++) {
      popup[i].classList.remove('visible');
    }
  }
}