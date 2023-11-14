'use strict';

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModalBtn = document.querySelectorAll('.show-modal');

// console.log(modal, 'modal');
// console.log(overlay, 'overlay');
// console.log(showModalBtn, 'showModal');

const addModal =() => {
        // console.log(modal.classList, 'classList');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < showModalBtn.length; i++) {
    // console.log(showModalBtn[i].textContent);
    showModalBtn[i].addEventListener('click', addModal)
    }

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown' , function (e) {
    // document.querySelector(e.key);
    if(e.key === 'Escape') {
        closeModal();
    }
})