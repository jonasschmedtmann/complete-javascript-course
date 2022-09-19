'use strict';
//selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore = 0;
let score = 0;
let scoreEl;
let currentPlayerScore;
let player = player0El;
let otherPlayer = player1El;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayers = function () {
  player.classList.remove('player--active');
  otherPlayer.classList.add('player--active');
  let playerTemp = player;
  player = otherPlayer;
  otherPlayer = playerTemp;
};

const isWin = function () {
  return !(
    player0El.classList.contains('player--winner') ||
    player1El.classList.contains('player--winner')
  );
};

btnRoll.addEventListener('click', function () {
  if (isWin()) {
    //generate random number
    let randomDice = Math.trunc(Math.random() * 6) + 1;

    if (player0El.classList.contains('player--active')) {
      currentPlayerScore = current0El;
    } else {
      currentPlayerScore = current1El;
    }

    //display dice
    diceEl.src = `dice-${randomDice}.png`;
    diceEl.classList.remove('hidden');

    //if dice is not 1
    if (randomDice !== 1) {
      // Add score to current score
      currentScore += randomDice;
      currentPlayerScore.textContent = currentScore;
    } else {
      // Switch player
      currentScore = 0;
      currentPlayerScore.textContent = currentScore;
      switchPlayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isWin()) {
    if (player0El.classList.contains('player--active')) {
      scoreEl = score0El;
    } else {
      scoreEl = score1El;
    }

    score = Number(scoreEl.textContent);
    score += currentScore;
    scoreEl.textContent = score;
    currentScore = 0;
    currentPlayerScore.textContent = 0;

    if (score >= 20) {
      player.classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      switchPlayers();
    }
  }
});

btnNew.addEventListener('click', function () {
  currentScore = 0;
  player = player0El;
  otherPlayer = player1El;
  player.classList.add('player--active');
  otherPlayer.classList.remove('player--active');

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player.classList.remove('player--winner');
  otherPlayer.classList.remove('player--winner');
});
