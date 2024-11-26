'use strict';

// Constant for setup
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceRoll = () => Math.trunc(Math.random() * 6) + 1;

let totalScore;
let currentScore0El = document.getElementById('current--0');
let currentScore1El = document.getElementById('current--1');
const player0Score = document.getElementById('score--0');
const player1Score = document.getElementById('score--1');

let diceEl = document.querySelector('.dice');
let playersTurn;
let currentScore;
let playing;

// occurs on save/refresh
const init = function () {
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  player0Score.textContent = 0;
  player1Score.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore = 0;
  totalScore = [0, 0];
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  playersTurn = 0;
  playing = 1;
};

init();

// to switch from one player to another
function switchPlayer() {
  playersTurn = !playersTurn ? 1 : 0;
  currentScore = 0;
  document.getElementById(`current--${!playersTurn ? 1 : 0}`).textContent =
    currentScore;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    let currentRoll = diceRoll();
    diceEl.src = `dice-${currentRoll}.png`;

    if (currentRoll !== 1) {
      currentScore += currentRoll;
      document.getElementById(`current--${playersTurn ? 1 : 0}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    totalScore[playersTurn ? 1 : 0] += currentScore;
    document.getElementById(`score--${playersTurn ? 1 : 0}`).textContent =
      totalScore[playersTurn ? 1 : 0];

    if (totalScore[playersTurn ? 1 : 0] >= 100) {
      document
        .querySelector(`.player--${playersTurn ? 1 : 0}`)
        .classList.add('player--winner');
      playing = 0;
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${playersTurn ? 1 : 0}`)
    .classList.remove('player--winner');
  init();
});
