'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

//we can add and remove classes
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnsShowModal.length; i++) 
    btnsShowModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//for the keyboard we only have 3 events:
// - keyup - when we remove the finger from the key
// - keydown - when we press the key - MOST USED!
// - keypress - is fired continuedly when we are pressing the key

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
    } 
})