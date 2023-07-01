'use strict';
const showbtnModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const showModal = () => {
  console.log('Button clicked ');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showbtnModal.length; i++) {
  showbtnModal[i].addEventListener('click', showModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key == 'Escape') {
    closeModal();
  }
});
