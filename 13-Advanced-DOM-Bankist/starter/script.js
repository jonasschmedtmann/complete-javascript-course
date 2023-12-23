'use strict';

console.log(document.documentElement);
console.log(document.head);
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
const cookieMessage = document.createElement('div');
const header = document.querySelector('.header');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML = `We use cookies for improved functionality and analytics \
<button class="btn btn--close-cookie">Got it!</button>`;
header.append(cookieMessage);
//header.append(cookieMessage.cloneNode(true));

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => cookieMessage.remove());

// Styles, Attributes, Classes
cookieMessage.style.width = '100%';
cookieMessage.style.backgroundColor = '#37383d';
console.log(getComputedStyle(cookieMessage).color);
cookieMessage.style.height =
  Number.parseFloat(getComputedStyle(cookieMessage).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Backist');
console.log(logo.getAttribute('src'));

// Classes
logo.classList.add('name', 'j');
logo.classList.remove('name', 'j');
logo.classList.toggle('name');
console.log(logo.classList.contains('name'));

// Types of events and event handlers
//const h1 = document.querySelector('h1');
//
//const mouseDetected = function (e) {
//  console.log('addEventListener: mouse detected in h1');
//  h1.removeEventListener('mouseenter', mouseDetected);
//};
//
//h1.addEventListener('mouseenter', mouseDetected);
//
//h1.onmouseenter = () => console.log('onmouseenter: mouse detected in h1');

// Event Propagation
const randomeInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

const randomColor = () =>
  `rgb(${randomeInt(0, 255)}, ${randomeInt(0, 255)}, ${randomeInt(0, 255)})`;
console.log(randomColor());

//navLink.forEach(link =>
//  link.addEventListener('click', function (e) {
//    e.preventDefault();
//    link.style.backgroundColor = randomColor();
//  })
//);
//navLinksContainer.addEventListener(
//  'click',
//  () => (navLinksContainer.style.backgroundColor = randomColor())
//);
//nav.addEventListener(
//  'click',
//  () => (nav.style.backgroundColor = randomColor())
//);

/* DOM Traversal */
//const h1 = document.querySelector('h1');
//
//// Downwards
//console.log(h1.querySelectorAll('.highlight'));
//console.log(h1.childNodes);
//console.log(h1.children);
//h1.firstElementChild.style.color = 'white';
//h1.lastElementChild.style.color = 'orangered';
//
//// Upwards
//console.log('parentNode:', h1.parentNode);
//console.log('parentElement:', h1.parentElement);
//console.log('closest: ', h1.closest('.header'));
//
//// Sideways
//console.log('previousElementSibling:', h1.previousElementSibling);
//console.log('nextElementSibling:', h1.nextElementSibling);
//
//console.log('previousSibling:', h1.previousSibling);
//console.log('nextSibling:', h1.nextSibling);
//
//console.log('parentElement.children:', h1.parentElement.children);
//Array.from(h1.parentElement.children).forEach(child => {
//  if (child !== h1) child.style.transform = 'scale(0.5)';
//});
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
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

//for (let i = 0; i < btnsOpenModal.length; i++)
//  btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  // const s1Coords = section1.getBoundingClientRect();

  // console.log(s1Coords);
  // console.log('Current scroll X Y', window.scrollX, window.scrollY);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
  //  window.scrollTo({
  //    left: s1Coords.left + window.scrollX,
  //    top: s1Coords.top + window.scrollY,
  //    behavior: 'smooth',
  //  });
});

///////////////////////////////////////
// Nav Link Scrolling

const nav = document.querySelector('.nav');
const navLinksContainer = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__link');

//navLinks.forEach(link => {
//  link.addEventListener('click', function (e) {
//    e.preventDefault();
//    const id = this.getAttribute('href');
//    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//  });
//});

navLinksContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target?.getAttribute('href');
  if (id) document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////
// Nav link focus
const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Operations tabed compnent
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clickedBtn = e.target.closest('.operations__tab');
  // Guard Clause
  if (!clickedBtn) return;

  // Activate tab
  console.log(this.children);
  [...this.children].forEach(tab =>
    tab.classList.remove('operations__tab--active')
  );
  clickedBtn.classList.add('operations__tab--active');

  // Display content
  const tabContent = document.querySelector(
    `.operations__content--${clickedBtn.dataset.tab}`
  );
  document
    .querySelector('.operations__content--active')
    .classList.remove('operations__content--active');
  tabContent.classList.add('operations__content--active');
});

///////////////////////////////////////
// ticky nav bar

//window.addEventListener('scroll', function (e) {
//  console.log(this.window.scrollY);
//  const initialCoords = section1.getBoundingClientRect();
//  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//});

//const obsCallback = function (entries, observer) {
//  entries.forEach(entry => {
//    console.log(entry);
//  });
//};
//const observerOptions = {
//  root: null,
//  threshold: [0, 0.2],
//};
//const observer = new IntersectionObserver(obsCallback, observerOptions);
//observer.observe(section1);

const navheight = nav.getBoundingClientRect().height;

const headerObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navheight}px`,
};
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(
  stickyNav,
  headerObserverOptions
);

headerObserver.observe(header);

///////////////////////////////////////
// Reveal sections on scroll

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
};

const sectionObserverOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: '',
};

const sectionObserver = new IntersectionObserver(
  revealSection,
  sectionObserverOptions
);

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  }
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.4,
  rootMargin: '200px',
});

imgTargets.forEach(img => {
  imgObserver.observe(img);
});

///////////////////////////////////////
// Slider Component

const slides = document.querySelectorAll('.slide');
const btnSliderLeft = document.querySelector('.slider__btn--left');
const btnSliderRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
  currentSlide = slide;
  updateDots();
};
const slideRight = function () {
  currentSlide++;
  if (currentSlide < slides.length) {
    goToSlide(currentSlide);
  } else {
    currentSlide = 0;
    goToSlide(currentSlide);
  }
};
const slideLeft = function () {
  currentSlide--;
  if (currentSlide >= 0) {
    goToSlide(currentSlide);
  } else {
    currentSlide = slides.length - 1;
    goToSlide(currentSlide);
  }
};
const createDots = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
const updateDots = function () {
  dotsContainer
    .querySelector('.dots__dot--active')
    ?.classList.remove('dots__dot--active');
  dotsContainer
    .querySelector(`[data-slide='${currentSlide}']`)
    .classList.add('dots__dot--active');
};
// init slides
createDots();
goToSlide(0);

btnSliderRight.addEventListener('click', function (e) {
  e.preventDefault();
  slideRight();
});

btnSliderLeft.addEventListener('click', function (e) {
  e.preventDefault();
  slideLeft();
});

document.addEventListener('keydown', function (e) {
  e.key === 'ArrowRight' && slideRight();
  e.key === 'ArrowLeft' && slideLeft();
});

// Dots implementation

dotsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('dots__dot')) {
    goToSlide(e.target.dataset.slide);
    updateDots();
  }
});
