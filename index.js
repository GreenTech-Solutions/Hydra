class Items {
    constructor(array=undefined) {
        array.forEach(element => {
            this.add(element);
        });
    }

    add(value) {
        const item = new Item(value,this.#counter+1);

        if (this.#counter===0) {
            this.#firstAddedItem = item;
            this.#lastAddedItem = item;
            this.currentItem = item;
        }
        else {
            this.#lastAddedItem.next = item;
            item.previous = this.#lastAddedItem;
            this.#lastAddedItem = item;
            item.next = this.#firstAddedItem;

            this.#firstAddedItem.previous = item;
        }
        this.#counter++;
    }
    next() {
        this.currentItem = this.currentItem.next;
    }
    previous() {
        this.currentItem = this.currentItem.previous;
    }
    length() {
        return this.#counter;
    }
    forEach(func) {
        let counter = 0;
        let currentItem = this.#firstAddedItem;
        while (counter!==this.#counter) {
            func(currentItem);
            currentItem = currentItem.next;
            counter++;
        }
    }
    currentItem;
    #firstAddedItem;
    #lastAddedItem;
    #counter = 0;
}

class Item {
    constructor(value,id) {
        
        this.value = value;
this.id = id;
    }
    value;
    id;
    previous;
    next;
}

let contacts;
let cards;
let techCompanies;

document.addEventListener('DOMContentLoaded', function () {
    let menuButton = document.querySelector('.nav__menu-button');
    menuButton.addEventListener('click',onBurgerClick);

    contacts = new Items(Array.prototype.slice.call(document.querySelectorAll('.contacts__item')));
    rollElements(contacts);
    let contactsButtons = document.querySelectorAll('.contacts__button');
    contactsButtons.forEach(contactsButton => {
        contactsButton.addEventListener('click',onContactsButtonClick);
    });

    cards = new Items(Array.prototype.slice.call(document.querySelectorAll('.card')));
    rollElements(cards);
    let cardsButtons = document.querySelectorAll('.cards__button');
    cardsButtons.forEach(cardsButton => {
        cardsButton.addEventListener('click',onCardsButtonClick)
    });

    techCompanies = new Items(Array.prototype.slice.call(document.querySelectorAll('.tech__companies-item')));
    rollElements(techCompanies);
    let techCompaniesButtons = document.querySelectorAll('.tech__button');
    techCompaniesButtons.forEach(techCompaniesButton => {
        techCompaniesButton.addEventListener('click',onTechCompaniesClick);
    })

  }, false);


  function rollElements(items) {
    items.forEach((item) => {
        if (items.currentItem.id===item.id) {
            item.value.classList.remove('invisible');
        }
        else {
            item.value.classList.add('invisible');
        }
    })
  }

  function onBurgerClick(event) {
    const nav = document.querySelector('.nav')
    nav.classList.toggle('invisible');
    event.target.classList.toggle('nav__menu-button_rotated');
    
  }

  function onContactsButtonClick(event) {
    const button = event.target;
    if (button.classList.contains('contacts__button_right')) {
        contacts.next();
    }
    else {
        contacts.previous();
    }
    rollElements(contacts);
  }

  function onCardsButtonClick(event) {
    const button = event.target;
    if (button.classList.contains('cards__button_right')) {
        cards.next();
    }
    else {
        cards.previous();
    }
    rollElements(cards);
  }

  function onTechCompaniesClick(event) {
    const button = event.target;
    if (button.classList.contains('tech__button_right')) {
        techCompanies.next();
    }
    else {
        techCompanies.previous();
    }
    rollElements(techCompanies);
  }

