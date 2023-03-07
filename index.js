let contacts = [];
let currentContactsItem = 0;
let maxContactsItems = 0;

let cards = [];
let currentCard = 0;
let maxCards = 0;

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

    cards = document.querySelectorAll('.card');
    maxCards = cards.length;
    rollCards();
    let cardsButtons = document.querySelectorAll('.cards__button');
    cardsButtons.forEach(cardsButton => {
        cardsButton.addEventListener('click',onCardsButtonClick)
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

  function rollCards() {
    for (let i = 0; i < cards.length; i++) {
        if (i!==currentCard) {
            cards[i].classList.add('invisible');
        }
        else {
            cards[i].classList.remove('invisible');

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
    rollContactsItems();
  }

  function onCardsButtonClick(event) {
    const button = event.target;
    if (button.classList.contains('cards__button_right')) {
        currentCard++;
        if (currentCard===maxCards) {
            currentCard = 0;
        }
    }
    else {
        currentCard--;
        if (currentCard <0) {
            currentCard = maxCards-1;
        }
    }
    rollCards();
  }


