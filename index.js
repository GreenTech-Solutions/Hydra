let contacts = [];
let currentContactsItem = 0;
let maxContactsItems = 0;

document.addEventListener('DOMContentLoaded', function () {
    let menuButton = document.querySelector('.nav__menu-button');
    menuButton.addEventListener('click',onBurgerClick);
    contacts = document.querySelectorAll('.contacts__item');
    maxContactsItems = contacts.length;
    rollContactsItems();
    let contactsButtons = document.querySelectorAll('.contacts__button');
    contactsButtons.forEach(contactsButton => {
        contactsButton.addEventListener('click',onContactsButtonClick);
    });

  }, false);

  function rollContactsItems() {
    for (let i = 0; i < contacts.length; i++) {
        if (i!==currentContactsItem) {
            contacts[i].classList.add('invisible');
        }
        else {
            contacts[i].classList.remove('invisible');
        }
        
    }
  }

  function onBurgerClick(event) {
    const nav = document.querySelector('.nav')
    nav.classList.toggle('invisible');
    event.target.classList.toggle('nav__menu-button_rotated');
    
  }

  function onContactsButtonClick(event) {
    const button = event.target;
    if (button.classList.contains('contacts__button_right')) {
        currentContactsItem++;
        if (currentContactsItem===maxContactsItems) {
            currentContactsItem = 0;
        }
    }
    else {
        currentContactsItem--;
        if (currentContactsItem <0) {
            currentContactsItem = maxContactsItems-1;
        }
    }
    console.log('🚀 ~ currentContactsItem:', currentContactsItem)

    rollContactsItems();
  }

