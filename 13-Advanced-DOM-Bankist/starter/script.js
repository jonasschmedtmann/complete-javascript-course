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

// // Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelector(`.header`));
// const allSections = document.querySelectorAll(`.section`);      // Returns a nodelist
// console.log(allSections);

// console.log(document.getElementById(`section--1`));
// const allButtons = document.getElementsByTagName(`button`);     // returns a HTMLCollection
// console.log(allButtons);
// const allButtonsByClassName = document.getElementsByClassName(`btn`);  // returns a HTMLCollection
// console.log(allButtonsByClassName);

// // Creating and inserting elements
// // .insertAdjacentHTML -- Bankist app
// const header = document.querySelector(`.header`)
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics`;
// message.innerHTML = `We use cookies for improved functionality and 
//     analytics. <button class="btn btn--close-cookie">Got it!</button>`
// // Prepend/append -- adds the element as a child element
// // Every element is unique, so prepend/append on same element will move the element
// // header.prepend(message);
// header.append(message);

// // // before/after will insert the new element as a sibling element
// // header.before(message);
// // header.after(message);

// // Delete elements
// document.querySelector(`.btn--close-cookie`).addEventListener('click', () => {
//     message.remove();   // very recent method
// message.parentElement.removeChild(message);     // Old method of traversing the DOM tree and removing the child element
// })

/*
    187: Styles, attributes and classes
*/

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);       // Empty as it is not defined here
// console.log(message.style.backgroundColor);

// // get all the styles
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height);
// // Increase the height of cookie banner
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// //change the custom css variables -- now defined in root
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// logo.alt = 'Beautiful minimalist logo';     // Update the attribute

// // Non-standard/custom attributes
// console.log(logo.designer);                     // gives undefined
// console.log(logo.getAttribute('designer'));     // give the custom attribute value
// logo.setAttribute('company', 'bankist');

// console.log(logo.src);                      // absolute path
// console.log(logo.getAttribute('src'));      // relative path

// const link = document.querySelector('.btn--show-modal');
// console.log(link.href);                     // absolute path
// console.log(link.getAttribute('href'));     // relative path

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes

// logo.classList.add('abc', 'jef');
// logo.classList.remove('abc');
// logo.classList.toggle('jef');
// logo.classList.contains('jef');

// // Don't do -- removes all other classes and updates to given class
// logo.className = 'vishu-logo';

/* 
    188: Implementing smooth scrolling
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', (e) => {
    const sec1coords = section1.getBoundingClientRect();
    console.log(sec1coords);
    // console.log(e.target.getBoundingClientRect());
    console.log('Current (X/Y)', window.pageXOffset, window.pageYOffset);
    // console.log(
    //     'height/width of view port', document.documentElement.clientHeight, document.documentElement.clientWidth
    // );

    /* 
        When we have scrolled on the page, the co-ords won't be exactly relative to the top of the page
        So, scrolling programmatically doesn't work properly. Hence, find the offset of the btn from top of the page
        and add it to the co-ords 
    */
    // window.scrollTo({
    //     left: sec1coords.left,
    //     top: sec1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // });

    // New browser approach
    section1.scrollIntoView({behavior: 'smooth'});
});

/*
    189: Types of events and Event handlers
*/

// const h1 = document.querySelector('h1');
// const alerth1 = (e) => {
//     alert('Yay!! You have entered');
// };
// h1.addEventListener('mouseenter', alerth1);

// // remove eventlistner

// setTimeout(() => {
//     h1.removeEventListener('mouseenter', alerth1);
// }, 3000);

// // old way
// h1.onmouseenter = (e) => {
//     alert('Yay!! You have entered and stayed');
// };

/*
    191: Event propagation in practice
*/

// We will attach event handlers to the nav link and each of its parent element to see the bubbling

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
});
document.querySelector('.nav__item').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV-ITEM', e.target, e.currentTarget);
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV-LINKS-UL', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV-LINKS-CONTAINER', e.target);
    console.log(e.currentTarget === this);
    e.stopPropagation();    // not advisable
});
document.querySelector('.header').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('HEADER', e.target);
}, true);
document.querySelector('body').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('BODY', e.target);
}, {capture: true});








