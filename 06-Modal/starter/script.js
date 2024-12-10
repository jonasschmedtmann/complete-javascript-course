'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const showModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

btnsOpenModal.forEach((button) => 
button.addEventListener('click', showModal));

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
