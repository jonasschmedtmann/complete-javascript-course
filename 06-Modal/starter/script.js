'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
/* console.log(btnsOpenModal); */
/* for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
} */

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const keyClose = function (event) {
  if (
    event.key === 'Escape' &&
    !modal.classList.contains('hidden') &&
    !overlay.classList.contains('hidden')
  ) {
    closeModal();
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  document.addEventListener('keydown', keyClose);
  overlay.addEventListener('click', closeModal);
}
