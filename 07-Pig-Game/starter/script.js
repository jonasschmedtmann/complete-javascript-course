'use strict';

// Buttons
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Current Score
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

// Selecting players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Intial Setting
// Set the starting score to 0
score0El.textContent = 0;
score1El.textContent = 0;
// Hide the dice
diceEl.classList.add('hidden');

// Current score
let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];

// User rolls dice
btnRoll.addEventListener('click', function () {
  // Generate randome dice roll
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  // Display dice roll
  diceEl.classList.remove('hidden');
  // Display rolled dice number
  diceEl.src = `dice-${randomDice}.png`;
  // Check if a number is one
  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // If it is not one
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    console.log('changed');
    // Switch player
    activePlayer = activePlayer ? 0 : 1;
    currentScore = 0;
    // Switch player scores and background color
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    console.log(activePlayer);
  }
  console.log(currentScore);
});

btnHold.addEventListener('click', function () {
  if (!isGameOver) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    console.log(totalScore);
    // If a player wins
    if (totalScore[activePlayer] >= 20) {
      // Game over
      isGameOver = true;
      // Display winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      // Hide the dice and score to zero
      diceEl.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  if (isGameOver || !isGameOver) {
    isGameOver = false;
    totalScore = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    console.log(totalScore);
  }
  console.log(activePlayer);
});
