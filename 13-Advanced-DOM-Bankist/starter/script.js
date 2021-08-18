'use strict';

///////////////////////////////////////
// Modal window

// Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const operations = document.querySelector('.operations');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allButtons = document.getElementsByTagName('button');
const allSections = document.querySelectorAll('section');
const featImages = document.querySelectorAll('img[data-src]');

function openModal(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

///////////////////////////////////////
// Event Listeners
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button Scrolling

btnScrollTo.addEventListener('click', e => {
  // super modern method
  section1.scrollIntoView({ behavior: 'smooth' });

  // Older Method
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth', // doesn't work in Safari
  // });
});

//

///////////////////////////////////////
// Page Navigation

// This is an inefficient method because it essentially adds the same Event Listener to each element, which in a large project could mean 1000s of copies the Event Listener callback

// const navLinks = document.querySelectorAll('.nav__link');
// navLinks.forEach(function (el) {
//   el.addEventListener('click', function (e) {
// e.preventDefault();
// const id = this.getAttribute('href');
// console.log(id);
// document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// });
// });

// Event Delegation (Use Capture & Bubble Efficiently)
// 1. Add Event Listener to Common Parent Element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Determine Which Element Originated the Event with e.target
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  // Guard Clause
  if (!clicked) return;
  // Set Tab--Active Status
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // Set Content--Active Status
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
// Menu Fade Animation
function handleHover(e) {
  if (e.target.classList.contains('nav__link')) {
    // console.log(this);
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => (el !== link ? (el.style.opacity = this) : ''));
    logo.style.opacity = this;
  }
}

// Passing an 'arg' into a handler with the `this` keyword
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky Nav: Old Method (Constantly watching scroll which slows performance)

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', e => {
//   window.scrollY > initialCoords.top
//     ? nav.classList.add('sticky')
//     : nav.classList.remove('sticky');
// });

///////////////////////////////////////
// Sticky Nav UPGRADE: Intersection Observer API

// function obsCallback(entries,observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }
// const obsOptions = {
//   root: null, // watch the viewport
//   threshold: [0, 0.2], // % of when the thing we want comes into view
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

function stickyNav(entries) {
  const [entry] = entries;
  !entry.isIntersecting
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
}
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

////////////////////////////////////////////////
// Reveal Sections with JS and CSS Animations

function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

///////////////////////////////////////
// Lazy-Loading Images
// 1. Grab Images (In Selectors)

// 2. Swap Images
function imgSwap(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  // 3. Remove lazy CSS
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );
  observer.unobserve(entry.target);
}
// 4. Watch for Viewport Intersection
// Create Observer
const imgObserver = new IntersectionObserver(imgSwap, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
// Call Observer on each image
featImages.forEach(i => imgObserver.observe(i));

///////////////////////////////////////
// Build the Slider
function slider() {
  // Selectors
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const sliderBtnLeft = document.querySelector('.slider__btn--left');
  const sliderBtnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let currentSlide = 1;

  // Functions
  function init() {
    goToSlide(0);
    createDots();
    activateDot(0);
  }

  function goToSlide(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  function nextSlide() {
    currentSlide === slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }

  function prevSlide() {
    currentSlide === 0 ? (currentSlide = 3) : currentSlide--;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }

  function createDots() {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide=${i}></button>`
      );
    });
  }

  function activateDot(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  // Event Handlers
  sliderBtnRight.addEventListener('click', () => nextSlide());
  sliderBtnLeft.addEventListener('click', () => prevSlide());
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  init();
}
slider();
///////////////////////////////////////
// Lectures

///////////////////////////////////////
// 183. Selecting, Creating and Deleting Elements

// SELECTING METHODS
// console.log(document.documentElement);
// to appy CSS styles to the entire page, we *must* select the documentELement

// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header'); // returns first element with .header

// const allHeaders = document.querySelectorAll('.header'); // returns all elements with .header as a Node List
// console.log(allHeaders);

document.getElementById('section--1');
// doesn't need the CSS selector

// returns HTML Collection (live collection that updates automatically if the DOM changes) || This does not happen with a NodeList
// Tag Name refers to <HTML Tag>
// console.log(allButtons);

// document.getElementsByClassName('btn');
// doesn't need the CSS selcctor
// Also returns a live HTML Collection

// Creating & Inserting Elements
// .insertAdjacenentHTML is quick & easy

const message = document.createElement('div');
// Creates a DOM Element, but the object doesn't exist in the DOM yet
message.classList.add('cookie-message');
message.textContent = `We use cookies for improved functionality and analytics.`;
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
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// // HTML attrtibuets are src, alt, class, id, etc.

const logo = document.querySelector('.nav__logo');
// // console.log(logo.alt);
// // console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// // this is a non-standard property, so it doesn't work
// // console.log(logo.designer);
// // console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

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

///////////////////////////////////////
// 186. Events and Event Handlers

// const h1 = document.querySelector('h1');
// function alertH1(e) {
//   alert('addEventListener: Great! You are areading the heading :D ');
// h1.removeEventListener('mouseenter', alertH1); // good syntax for firing event only once
// }
// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Older method of addEventListener usage
// h1.onmouseenter = e =>
//   alert('addEventListener: Great! You are areading the heading : D ');

///////////////////////////////////////
// 188. Event Propogation in Practice

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   // Stop propogation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('UL', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   }
//   // true // Listen at Capture Phase instead of Bubble Phase
// );

///////////////////////////////////////
// 190. Traversing the DOM

// const h1 = document.querySelector('h1');

// // Going Down: Children
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// // Going Up: Parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// // Closest is the opposite of QuerySelector
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Sidesteps: Siblings
// console.log(h1.previousElementSibling); // Only retuns first sibling
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // Go up to get Siblings
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

///////////////////////////////////////
// 199. DOM Lifecycle

// HTML needs to be parsed

document.addEventListener('DOMContentLoaded', e =>
  console.log('HTML Parsed and DOM Tree built', e)
);

// Load event is fired when the window is ready && external resources are loaded

window.addEventListener('load', e => console.log('Page fully loaded.', e));
// Confirm before leaving site (like stupid facebook creator studio)
// window.addEventListener('beforeunload', e => {
//   e.preventDefault();
//   console.log('Created before the user leaves.', e);
//   e.returnValue = '';
// });
