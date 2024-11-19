/*
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

// console.log(allSections); // NodeList does not update

document.getElementById('secton--1');
const allButtons = document.getElementsByTagName('button');

// console.log(allButtons); //HTMLCollection: "live" collection meaning if the DOM changes, the collection is immediately updated

// console.log(document.getElementsByClassName('btn')); // HTMLCollection

// Creating and Inserting Elements
// elementToAttachTo.insertAdjacentHTML('afterbegin', whatYouWantToInsert);
// .insertAdjacentHTML 

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);

// header.before(message);
// header.after(message);

// DELETE ELEMENTS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => {
    message.remove();
  });



// STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.width); //120%
console.log(message.style.height); // empty -- cannot read properties from .css file

console.log(getComputedStyle(message).height); //52.1181px

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// for custom css variables (:root)
// document.documentElement.style.setProperty('--color-primary', 'yellow');

// ATTRIBUTES
const logo = document.querySelector('.nav__logo');
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt); // bankist logo
console.log(logo.src); // http://127.0.0.1:5501/13-Advanced-DOM-Bankist/starter/img/logo.png
console.log(logo.className); //nav__logo
logo.setAttribute('company', 'Bankist');

// non-standard
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); //Jonas

console.log(logo.src); // EXACT PATH (what is being read by the browser)
console.log(logo.getAttribute('src')); // RELATIVE PATH (what is on the html)

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // ABSOLUTE PATH TO LINK: http://127.0.0.1:5501/13-Advanced-DOM-Bankist/starter/#
console.log(link.getAttribute('href')); // relative path : #

// DATA ATTRIBUTES
console.log(logo.dataset.versionNumber); // 3.0


// CLASSES
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains(); // not .includes()

// DONT USE -- will override and will only allow one class name
logo.className = 'jonas'
*/



/*
// HANDLING EVENTS, REMOVING HANDLERS
const h1 = document.querySelector('h1');
const alertH1 = (e) => {
  console.log('addEventListener: Great! You are reading the heading');

  // removes listener after listening to event once
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// removing listener after a certain time has passed
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);


// old way of doing event listener
// h1.onmouseenter = (e) => {
//   console.log('onmouseenter: Great! You are reading the heading')
// }

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// remember that the 'this' keyword points to the window when using an arrow function
// to properly access 'this', use a regular function(){} format
document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINKS', this);
  console.log(e.currentTarget === this); // true
  this.style.backgroundColor = randomColor();

  // stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.target.style.backgroundColor = randomColor();
  console.log('nav links', e.target);
});

document.querySelector('.nav').addEventListener('click', (e) => {
  e.target.style.backgroundColor = randomColor();
  console.log('nav bar', e.target);
});

*/


/*
const h1 = document.querySelector('h1');

// Going down the DOM tree aka Child
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes); // not used a lot

console.log(h1.children); //HTML Collection of direct children elements
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going up the dom tree aka Parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// finds the closest PARENT element
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going side ways on the DOM tree: siblings

// more common way
console.log(h1.previousElementSibling); // null, no previous sibling element
console.log(h1.nextElementSibling); // <h4> lorem </h4>

console.log(h1.previousSibling); // #text -- nodeList
console.log(h1.nextSibling); // #text

console.log(h1.parentElement.children); // get all siblings including itself, HTMLCollection (not an array, but iterable)

[...h1.parentElement.children].forEach(function (el) {
  // if current element is not the h1 element aka selecting all the siblings
  if (el !== h1) {
    el.style.transform = 'scale(0.5)'
  }
});
*/
