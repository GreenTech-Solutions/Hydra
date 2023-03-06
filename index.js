function onBurgerClick(event) {
    document.querySelector('.nav').classList.toggle('invisible');
  }

document.addEventListener('DOMContentLoaded', function () {
    let menuButton = document.querySelector('.nav__menu-button');
    menuButton.addEventListener('click',onBurgerClick);
  }, false);
