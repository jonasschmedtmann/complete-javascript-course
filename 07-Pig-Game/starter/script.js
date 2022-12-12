'use strict';

// Buttons
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

// Intial Setting
// Set the starting score to 0
score0El.textContent = 0;
score1El.textContent = 0;
// Hide the dice
diceEl.classList.add('hidden');

// User rolls dice
btnRoll.addEventListener('click', function () {
  // Generate randome dice roll
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  // Display dice roll
  diceEl.classList.remove('hidden');
  // Display rolled dice number
  diceEl.src = `dice-${randomDice}.png`;
});
