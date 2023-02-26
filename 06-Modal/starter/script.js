'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (btn) {
  if (btn.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', OpenModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);