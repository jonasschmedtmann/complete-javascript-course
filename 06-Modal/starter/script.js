'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let index = 0; index < btnsOpenModal.length; index++) {
  console.log(btnsOpenModal[index].textContent);
}
