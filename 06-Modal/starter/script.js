'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//keydown - as soon as the key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
