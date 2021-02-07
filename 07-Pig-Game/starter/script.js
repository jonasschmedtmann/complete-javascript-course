'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//Set a value to .score
score0El.textContent = 0;
score1El.textContent = 0;
//Hides .dice .png imgs
diceEl.classList.add('hidden');
