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

btnsOpenModal.forEach( (val) => val.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



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
message.style.backgroundColor = "#37383d"; 
message.style.width = "120%";

// how to get styles 

console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px'; 

//working with custom Css variables 
document.documentElement.style.setProperty('--color-primary', 'orangered'); 

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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

console.log(btnScrollTo);
console.log(section1);

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

const h1 = document.querySelector('h1'); 

const alertH1 = function(e) {
  alert('addEventListener: Great! '); 
  // Method 1 of remove event listener
  // h1.removeEventListener('mouseenter',alertH1); 
}
h1.addEventListener('mouseenter', alertH1); 

setTimeout( () => HTMLQuoteElement.removeEventListener(
  'mouseenter', alertH1), 3000); 

// h1.onmouseenter = function(e) {
//   alert('addEventListener: Great! ')
// }; 

// Event Propagation: Bubbling and Capturing 