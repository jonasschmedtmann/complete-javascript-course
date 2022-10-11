'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////Selecting Elements////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
//Returns a node list - if I delete something it doesn't updates itself
const allSection = document.querySelectorAll('.section');
//console.log(allSection);

//Returns an HTML Collection - if I delete will update itself
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
//console.log(allButtons);

//console.log(document.getElementsByClassName('btn'));

//Button scrolling

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////
//Page navigation

//This way the function is attached to all elements and could impact the performence
/*document.querySelectorAll('.nav__link').forEach(el =>
  el.addEventListener('click', function (e) {
    e.preventDefault(); //prevents from scrolling down the page
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  })
);*/

//using event delegation
//1. Add event listener to common parent element
//2 Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy - to ignore clicks that weren0't on the buttons
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause - if null the code continues being executed
  if (!clicked) return;

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
const handleHover = function (e) {
  //console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation
//scroll event is not efficient
/*const initialCords = section1.getBoundingClientRect();
console.log(initialCords);

window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);

  if (this.window.scrollY > initialCords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

//Intersection Observer API
//will be called each time our target (observed element) is intersection the root element at the threshold we define
// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => console.log(entry))
// };

// const obsOptions = {
//   root: null, //the element we want to intersect
//   threshold:[0, 0.2] //percentage of intersection at wich the observer will callback
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//Reveal sections

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

//Lazy loading images
const imgTarget = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace scr with data.source
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', //load the imgs before we reach them
});

imgTarget.forEach(img => imgObserver.observe(img));

//Slide component
const slider = function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;
  console.log(maxSlide);

  //Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  //Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    //console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();
/*


///////////Creating and Inserting Elements///////////
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie" >Got it!</button>';

//prepend makes the first child of header
//header.prepend(message);
//append makes the last child of header and we can move elements!
header.append(message);

//this way we can have the same element copied- rarely used
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

////////////Delete Elements////////
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

////////STYLES///////
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//you can use set property for everything but usually we just use it for root elements
document.documentElement.style.setProperty('--color-primary', 'orangered')

////////ATRIBUTES - src, class, alt /////////
const loggo = document.querySelector('.nav__logo');
console.log(loggo.alt);
console.log(loggo.className);
loggo.alt = 'Beautiful minimalist logo'

//Non-standard
console.log(loggo.designer); //doesn't read because is not an atribute expected in image clas
console.log(loggo.getAttribute('designer'));
//Creates an attribute
loggo.setAttribute('company', 'Bankist')

console.log(loggo.src); //absolute version with URL
console.log(loggo.getAttribute('src')); //relative version

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //absolute URL
console.log(link.getAttribute('href')); //as you wrote it in html

//Data attributes
console.log(loggo.dataset.versionNumber);

//Classes
//Won't interfere with other classes
loggo.classList.add('c', 'j');
loggo.classList.remove('c', 'j');
loggo.classList.toggle('c');
loggo.classList.contains('c');

//Don't use - will overwrite all existing classes
//loggo.className = 'angela'


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  //coordinates from the button to the top and end of the window
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //Scrolling
  //Old School way
  //current pisotion + current scroll
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  //New way
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////EVENTS///////
//AddEventListener is better cause we can use multiple eventlisteners and we can remove an eventhandler if we don't need it
const h1 = document.querySelector('h1');
const alertH1 = e => {
  alert('addEventListener: You are reading the heading!');
  //to listen to the event only once
  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = e => {
//   alert('addEventListener: You are reading the heading!');
// }

//////////EVENT PROPAGATION //////
//AddEventListener is only listening for elements in the bubbling phase and not the capturing phase
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //Stop event propagation - stop the event before the next functions
  //e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

//the target from the event is the same -- .nav_link because of bubbling. It was the place where it originated the action
//the current target is the same as the this keyword
//Capturing is rarely used these days


////DOM TRAVERSING/////
const h1 = document.querySelector('h1');

//Going downwads: child
console.log(h1.querySelectorAll('.highlight')); //only select children of h1 element
console.log(h1.childNodes);
console.log(h1.children); //works only from direct children

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered'
console.log(h1.firstChild);
console.log(h1.firstElementChild);

//Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

//selects the closest parent element that has the header class no matter how far up in the tree
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

//sellecting sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)'
})
*/

//////DOM lifecycle

//DOM content loading - is fired by the document as soon as the html is downloaded. All the JS content must be loaded and executed before the DOM loader event can happen
document.addEventListener('DOMContentLoaded', function(e) {
  console.log('HTML Pparsed and DOM tree built!', e);
})

//load event - loads images and external sources after content loading