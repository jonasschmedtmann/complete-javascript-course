'use strict';

// Elements
const elScore0 = document.getElementById('score--0');
const elCurrent0 = document.getElementById('current--0');
const elPlayer0 = document.querySelector('.player--0');
const elScore1 = document.getElementById('score--1');
const elCurrent1 = document.getElementById('current--1');
const elPlayer1 = document.querySelector('.player--1');
const elDice = document.querySelector('.dice');

// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Values
let currentScore, activePlayer, scores, playing;
  
// Action(s)
const togglePLayer = function () {
  elPlayer0.classList.toggle('player--active');
  elPlayer1.classList.toggle('player--active');
}

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  
  elScore0.textContent = 0;
  elScore1.textContent = 0;
  elDice.classList.add('hidden');
  elCurrent0.textContent = 0;
  elCurrent0.textContent = 0;
  
  elPlayer0.classList.remove('player--winner');
  elPlayer1.classList.remove('player--winner');
  elPlayer0.classList.add('player--active');
  elPlayer1.classList.remove('player--active');
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  togglePLayer();
}

const rollDice = function () {
  if (playing) {
    const numDice = Math.trunc(Math.random() * 6) + 1;
    elDice.src = `dice-${numDice}.png`;
    elDice.classList.remove('hidden');

    if (numDice !== 1) {
      currentScore += numDice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
    return currentScore;
  }
};

const holdScore = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
};

// Starting or Reset Conditions
init();

// Rolling the dice
btnRoll.addEventListener('click', rollDice);

// Hold
btnHold.addEventListener('click', holdScore);

//Reset Game
btnNew.addEventListener('click', init);