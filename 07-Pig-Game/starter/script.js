'use strict';

/* Select elements */
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('#current--0');
const current1El = document.getElementById('#current--1');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

/* Declare variables */
let diceValue = '';
let currentScore = 0;

/* Functions */

/* Initialize game */
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

/* Roll Dice */
rollDiceBtn.addEventListener('click', function () {
  /* Generate random dice */
  diceValue = Math.trunc(Math.random() * 6) + 1;
  console.log(diceValue);
  /* Display dice */
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceValue}.png`;
  /* Check if 1 rolled */
  if (diceValue !== 1) {
    /* add dice value to current score */
    currentScore += diceValue;
  } else {
  }
});

/* Hold btn event */
holdBtn.addEventListener('click', function () {
  /* add current score to total score for active player */
});

/* New game btn event */
newGameBtn.addEventListener('click', function () {});
