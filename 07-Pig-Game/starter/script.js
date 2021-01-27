'use strict';

const currentScore0Dom = document.getElementById('current--0');
const currentScore1Dom = document.getElementById('current--1');
const score0Dom = document.getElementById('score--0');
const score1Dom = document.getElementById('score--1');
const player0Dom = document.querySelector('.player--0');
const player1Dom = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const rollBTNDom = document.querySelector('.btn--roll');
const holdBTNDom = document.querySelector('.btn--hold');
const newBTNDom = document.querySelector('.btn--new');

let currentScore, activePlayer, scores;
const scoreToWin = 20;

// *** init ***

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  score0Dom.textContent = 0;
  score1Dom.textContent = 0;
  currentScore0Dom.textContent = 0;
  currentScore1Dom.textContent = 0;

  rollBTNDom.classList.remove('hidden');
  holdBTNDom.classList.remove('hidden');
  player0Dom.classList.add('player--active');
  player1Dom.classList.remove('player--active');
  player0Dom.classList.remove('player--winner');
  player1Dom.classList.remove('player--winner');
  dice.classList.add('hidden');
};

const getRoll = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0Dom.classList.toggle('player--active');
  player1Dom.classList.toggle('player--active');

  activePlayer = activePlayer === 0 ? 1 : 0;
};

const winGame = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  rollBTNDom.classList.add('hidden');
  holdBTNDom.classList.add('hidden');
};

// *** On page load ***

init();

// *** Roll button functionality ***

rollBTNDom.addEventListener('click', function () {
  const dieRoll = getRoll();
  dice.classList.remove('hidden');
  dice.src = `dice-${dieRoll}.png`;

  if (dieRoll !== 1) {
    currentScore += dieRoll;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

//  *** Hold button functionality ***

holdBTNDom.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  scores[activePlayer] >= scoreToWin ? winGame() : switchPlayer();
});

newBTNDom.addEventListener('click', init);
