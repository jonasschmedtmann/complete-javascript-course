'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('overlay');
const btnCloseModal = document.querySelector('close-modal');
const btnsOpenModal = document.querySelectorAll('show-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(click, function () {
    console.log('Butoni u shtyp');
  });
