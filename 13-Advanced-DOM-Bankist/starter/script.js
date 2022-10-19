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
'We use cookied for imporved functionality and analytics. <button class = "btn btn-close-cookie">Got it!</button>' ;

// header.prepend(message); 
header.append(message); 
// header.append(message.cloneNode(true)); 



// Delete elements 
document.querySelector('.btn--close-cookies').addEventListener('click', function() {
  message.remove(); 
})