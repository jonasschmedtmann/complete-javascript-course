'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let index = 0; index < btnsOpenModal.length; index++)
  btnsOpenModal[index].addEventListener('click', e => {
    // code
    // Open the modal when the corresponding button is clicked
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', e => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  // code
});

overlay.addEventListener('click', e => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  // code
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});