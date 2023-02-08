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
// header.prepend(message);
header.append(message);

// // before/after will insert the new element as a sibling element
// header.before(message);
// header.after(message);

// Delete elements
document.querySelector(`.btn--close-cookie`).addEventListener('click', () => {
    message.remove();   // very recent method
    // message.parentElement.removeChild(message);     // Old method of traversing the DOM tree and removing the child element
})

/* 
    187: Styles, attributes and classes
*/

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);       // Empty as it is not defined here
console.log(message.style.backgroundColor);

// get all the styles
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
// Increase the height of cookie banner
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

//change the custom css variables -- now defined in root
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';     // Update the attribute

// Non-standard/custom attributes
console.log(logo.designer);                     // gives undefined
console.log(logo.getAttribute('designer'));     // give the custom attribute value
logo.setAttribute('company', 'bankist');

console.log(logo.src);                      // absolute path
console.log(logo.getAttribute('src'));      // relative path

const link = document.querySelector('.btn--show-modal');
console.log(link.href);                     // absolute path
console.log(link.getAttribute('href'));     // relative path

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes

logo.classList.add('abc', 'jef');
logo.classList.remove('abc');
logo.classList.toggle('jef');
logo.classList.contains('jef');

// Don't do -- removes all other classes and updates to given class
logo.className = 'vishu-logo';





