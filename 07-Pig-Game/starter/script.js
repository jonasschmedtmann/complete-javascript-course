'use strict';

/* Select elements */
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

/* Declare variables */
let diceValue = '';
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let isGameOver = false;

/* Functions */
const swapActiveOverlay = function (activePlayer) {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer === 0 ? 1 : 0}`)
    .classList.add('player--active');
};
const swapActivePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  swapActiveOverlay(activePlayer);
  activePlayer = activePlayer === 0 ? 1 : 0;
};
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
  if (!isGameOver) {
    /* Check if 1 rolled */
    if (diceValue !== 1) {
      /* add dice value to current score */
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      /*     Set score to 0 and swap players */
      swapActivePlayer();
    }
  }
});

/* Hold btn event */
holdBtn.addEventListener('click', function () {
  if (!isGameOver) {
    /* add current score to total score for active player */
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      diceEl.classList.add('hidden');
      console.log(`Player ${activePlayer + 1} Wins!`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      isGameOver = true;
    } else {
      swapActivePlayer();
    }
  }
});

/* New game btn event */
newGameBtn.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  activePlayer = 0;
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  for (let i = 0; i < scores.length; i++) {
    scores[i] = 0;
  }
  score0El.textContent = 0;
  score1El.textContent = 0;
  isGameOver = false;
});
