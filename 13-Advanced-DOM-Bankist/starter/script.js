'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
/////////////////////////////////////////////////////////


const openModal = function (e) {
  e.preventDefault(); 
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( (val) => val.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (x/y) ', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, 
  document.documentElement.clientWidth);


  // old way 
  // window.scrollTo({
  //   left: s1coords.left + window.pageYOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // new way for smooth scroll 
  section1.scrollIntoView({behavior: 'smooth'}); 
}); 

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//page Navigation 

// not optimal adding event listener for all elements with .nav__link class
// document.querySelectorAll('.nav__link').forEach( function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault(); 
    
//     const id = this.getAttribute('href'); 
//     console.log(id);

//     document.querySelector(id).scrollIntoView({behavior: 'smooth'}); 
//   })
// });



/* 
1. Add event listner to common parent elemnt 
2. Determine wht element originated the event

*/
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault(); 
  console.log(e.target);

  // matching strategy 
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); 
    console.log(id);

    document.querySelector(id).scrollIntoView({behavior: 'smooth'}); 

  }
})
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSelections = document.querySelectorAll('.section'); 
console.log(allSelections); 

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

console.log(allButtons); 


document.getElementsByClassName('btn');

console.log(document.getElementsByClassName('btn'));

//creating and Inserting elements 
// insertAdjacentHTML 

const message = document.createElement('div');

message.classList.add('cookie-message'); 
message.textContent = "We use cookied for imporved functionality and analytics.";

message.innerHTML = 
'We use cookied for imporved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>' ;

// header.prepend(message); 
header.append(message); 
// header.append(message.cloneNode(true)); 



// Delete elements 
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  // message.remove(); 
  message.parentElement.removeChild(message);
});



// Styles 
// message.style.backgroundColor = "#37383d"; 
message.style.width = "120%";

// how to get styles 

console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px'; 

//working with custom Css variables 
// document.documentElement.style.setProperty('--color-primary', 'orangered'); 

//Atributes 

const logo = document.querySelector('.nav__logo');

// only works if attributes are standard, can not be custom 
console.log(logo.alt);
console.log(logo.className);



// setting atributies 

logo.alt = 'Beautiful Minimalist logo'
console.log(logo.alt);

console.log(logo.src); // prints absolute path 
console.log(logo.getAttribute('src')); // gets realtive path 

//Data Attributes 

console.log(logo.dataset.versionNumber);


//Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();


//Implementing Smooth Scroll



console.log(btnScrollTo);
console.log(section1);



// const h1 = document.querySelector('h1'); 

// const alertH1 = function(e) {
//   alert('addEventListener: Great! '); 
//   // Method 1 of remove event listener
//   // h1.removeEventListener('mouseenter',alertH1); 
// }
// h1.addEventListener('mouseenter', alertH1); 

// setTimeout( () => HTMLQuoteElement.removeEventListener(
//   'mouseenter', alertH1), 3000); 

// h1.onmouseenter = function(e) {
//   alert('addEventListener: Great! ')
// }; 

// Event Propagation: Bubbling and Capturing 

// Event Progpagation Practice 

const randomInt = (min,max) => Math.floor(Math.random() * (max-min+1) + min);

const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)} )`;


// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target,e.currentTarget);
//   console.log(e.currentTarget === this);

//   // stop propagation
//   // e.stopPropagation(); 
// })
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target,e.currentTarget);
  
// })
// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target,e.currentTarget);
// },);


// DOM traversing 

const h1 = document.querySelector('h1');

// going downwards: child

console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'blue';

//going upwards: parents

console.log(h1.parentNode);
console.log(h1.parentElement);

// selects closes parent based on  class name 
h1.closest('.header').style.background = 'var(--gradient-secondary)'

// .closest is like the oppoiste of querySelector 
h1.closest('h1').style.background = 'var(--gradient-primary)' 

// Going sideways: Siblings 

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//get all siblings 
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
}); 