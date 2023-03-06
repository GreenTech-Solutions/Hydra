function onBurgerClick(event) {
    const nav = document.querySelector('.nav')
    nav.classList.toggle('invisible');
    event.target.classList.toggle('nav__menu-button_rotated');

  }

document.addEventListener('DOMContentLoaded', function () {
    let menuButton = document.querySelector('.nav__menu-button');
    menuButton.addEventListener('click',onBurgerClick);
  }, false);
