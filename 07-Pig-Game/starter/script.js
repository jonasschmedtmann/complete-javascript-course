'use strict';

// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Game Engine
const scores = [0, 0];
let currentScore = 0;
let allScores = document.querySelectorAll('.score');
let activePlayer = 0;

const playerSwitch = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  if (activePlayer === 0) {
    player0.classList.remove('player--active');
    activePlayer = 1;
    player1.classList.add('player--active');
  } else {
    activePlayer = 0;
    player0.classList.add('player--active');
  }
  currentScore = 0;
};

const hideDie = function () {
  diceEl.classList.add('hidden');
};

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  hideDie();
  if (!player0.classList.contains('player--active')) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
};

const roll = function () {
  if (diceEl.classList.contains('hidden')) {
    diceEl.classList.remove('hidden');
  }
  let dieValue = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dieValue}.png`;
  if (dieValue !== 1) {
    currentScore += dieValue;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    console.log('Score reset!');
    playerSwitch();
  }
};
const hold = function () {
  // add current score to active player's score
  scores[activePlayer] += currentScore;
  console.log(scores);
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] < 10) {
    playerSwitch();
    hideDie();
  } else {
    hideDie();
    document.getElementById(`score--${activePlayer}`).textContent = `Player ${
      activePlayer + 1
    } Wins!`;
  }
};

init();
document.querySelector('.btn--roll').addEventListener('click', roll);
document.querySelector('.btn--hold').addEventListener('click', hold);
document.querySelector('.btn--new').addEventListener('click', init);
