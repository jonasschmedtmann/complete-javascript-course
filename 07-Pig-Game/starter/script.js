'use strict';

// Define selectable elements
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

// Define needed variables
let scores, currentScore, activePlayer, playing;

const switchPlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  current0El.textContent = 0;
  current1El.textContent = 0;
};

const initGame = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--active', 'player--winner');
  player0El.classList.add('player--active');
  diceEl.classList.add('hidden');
};

initGame();

btnRoll.addEventListener('click', function () {
  if (!playing) return;
  // gen random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // display dice matching roll
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  //check for rolled 1
  if (dice != 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) return;
  // add current score to active players score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // check if current player's score >= 100: if so win,
  if (scores[activePlayer] >= 100) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceEl.classList.add('hidden');
  } else {
    //otherwise change players
    switchPlayer();
  }
});

btnNew.addEventListener('click', initGame);
