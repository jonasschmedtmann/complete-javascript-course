'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice funcionality
btnRoll.addEventListener('click', function () {
  //Generate random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  //Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;

  //Check for rolled 1: if true, switch to next player
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    current0El.textContent = currentScore; //CHANGE LATER
  } else {
  }
});
