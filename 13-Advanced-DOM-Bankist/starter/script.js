'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

function openModal(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // section1.scrollIntoView({ behavior: 'smooth' });
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);
  // console.log(
  //   'height.width of viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
});

///////////////////////////////////////
// Lectures

///////////////////////////////////////
// 183. Selecting, Creating and Deleting Elements

// SELECTING METHODS
// console.log(document.documentElement);
// to appy CSS styles to the entire page, we *must* select the documentELement

// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header'); // returns first element with .header

const allHeaders = document.querySelectorAll('.header'); // returns all elements with .header as a Node List
// console.log(allHeaders);

document.getElementById('section--1');
// doesn't need the CSS selector

const allButtons = document.getElementsByTagName('button');
// returns HTML Collection (live collection that updates automatically if the DOM changes) || This does not happen with a NodeList
// Tag Name refers to <HTML Tag>
// console.log(allButtons);

document.getElementsByClassName('btn');
// doesn't need the CSS selcctor
// Also returns a live HTML Collection

// Creating & Inserting Elements
// .insertAdjacenentHTML is quick & easy

const message = document.createElement('div');
// Creates a DOM Element, but the object doesn't exist in the DOM yet
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Okay!</button>`;
// header.prepend(message);
header.append(message);
// DOM Elements are unique and can only exist in one place at a time.

// header.append(message.cloneNode(true)); // Creates a copy of the Element Node

// header.before(message);
// header.after(message);
// Positions elements as siblings of selected element

// Deleting Elements

document.querySelector('.btn--close-cookie').addEventListener(
  'click',
  () =>
    // message.parentElement.removeChild(message) // old way
    message.remove() // new way
);

///////////////////////////////////////
// 184. Styles, Attributes & Classes

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// These are set as inline styles
// console.log(message.style.height); // Doesn't appear
// console.log(message.style.backgroundColor); // Appears because we set it

// console.log(getComputedStyle(message)); // returns CSSStyleDeclaration Object
// console.log(getComputedStyle(message).color); // returns color
// console.log(getComputedStyle(message).height); // returns height as string

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// console.log(getComputedStyle(message).height); // returns height as string
// console.log(Number('43'));

// Changing Variables declared on the :root (Document)
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// HTML attrtibuets are src, alt, class, id, etc.

const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// this is a non-standard property, so it doesn't work
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// console.log(logo.getAttribute('src')); // gets relative html
// console.log(logo.src); // gets full source

const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// Data Attributes
// Must start with Data in the html

// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c', 'j');
// logo.classList.contains('c', 'j');

// DO NOT USE
// logo.className = 'Jonas'; // Overrides existing classes and only allows 1 class
