const hamburgerMenu = document.querySelector('.hamburger-menu');
const barOne = document.querySelector('.first');
const barTwo = document.querySelector('.second');
const dropDown = document.querySelector('.drop-down');
const items = document.querySelector('.list');

let clicked = false;

hamburgerMenu.addEventListener('click', () => {
  if (!clicked) {
    barOne.classList.add('close-one');
    barTwo.classList.add('close-two');
    dropDown.classList.add('down');
    items.classList.add('opacity');
    clicked = true;
  } else {
    barOne.classList.remove('close-one');
    barTwo.classList.remove('close-two');
    dropDown.classList.remove('down');
    items.classList.remove('opacity');
    clicked = false;
  }
});
