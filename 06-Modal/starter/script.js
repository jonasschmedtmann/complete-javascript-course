'use strict';

const showBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const button of showBtns) {
  button.addEventListener('click', showModal);
}

overlay.addEventListener('click', hideModal);
closeModal.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal();
});
