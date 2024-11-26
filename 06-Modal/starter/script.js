'use strict';

/*
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModals = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModals = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// show modals
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModals);
}

closeModal.addEventListener('click', closeModals);
overlay.addEventListener('click', closeModals);

// // close modals
// closeModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// // close modal with clicking background
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModals();
  }
});
*/

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const closeModals = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModals = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', showModals);
}

closeModal.addEventListener('click', closeModals);
overlay.addEventListener('click', closeModals);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModals();
  }
});
