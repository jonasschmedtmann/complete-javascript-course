'use strict';

//element selection

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// setting the initial values

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Dice Rolling Functionality

btnRoll.addEventListener('click', function () {
  //1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display the dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(`I have rolled an ${dice} and I am displaying ${diceEl.src}`);
  //3. Check for random dice roll is 1 - if True switch to next player
  if (dice !== 1) {
    //add to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; // change later
  } else {
    // change player
    //4. make a statement on how to change the player again
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    //1. change background highlight
    //2. reset scoreEl to 0
    //3. change to current1El
  }
});
