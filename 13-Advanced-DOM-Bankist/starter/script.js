'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/* 
    186: Selecting, Creating and Deleting elements
*/

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.querySelector(`.header`));
const allSections = document.querySelectorAll(`.section`);      // Returns a nodelist
console.log(allSections);

console.log(document.getElementById(`section--1`));
const allButtons = document.getElementsByTagName(`button`);     // returns a HTMLCollection
console.log(allButtons);
const allButtonsByClassName = document.getElementsByClassName(`btn`);  // returns a HTMLCollection
console.log(allButtonsByClassName);

// Creating and inserting elements
// .insertAdjacentHTML -- Bankist app
const header = document.querySelector(`.header`)
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = `We use cookies for improved functionality and analytics`;
message.innerHTML = `We use cookies for improved functionality and 
    analytics. <button class="btn btn--close-cookie">Got it!</button>`
// Prepend/append -- adds the element as a child element
// Every element is unique, so prepend/append on same element will move the element
header.prepend(message);
// header.append(message);

// // before/after will insert the new element as a sibling element
// header.before(message);
// header.after(message);

// Delete elements
document.querySelector(`.btn--close-cookie`).addEventListener('click', () => {
    message.remove();   // very recent method
    // message.parentElement.removeChild(message);     // Old method of traversing the DOM tree and removing the child element
})




