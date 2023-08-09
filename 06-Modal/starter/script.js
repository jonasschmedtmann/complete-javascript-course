'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
  console.log(btnOpenModal[i].textContent);

// just like and if-else statement, when there's only one line of code that I want to execute, I actually don't have to use curly braces (a block)
