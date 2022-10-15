'use strict';

/* 
    82: Project #3: PIG Game
    83: Rolling the Dice
    84: Switching the Active Player
*/

// Select the elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.querySelector('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

btnRoll.addEventListener('click', function () {
    // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display the dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // Check if the dice roll is 1
    if (dice === 1) {
        // switch the current player

        const currentPlayerScore = +document.querySelector(`#score--${activePlayer}`).textContent
        document.querySelector(`#score--${activePlayer}`).textContent = currentPlayerScore + currentScore;
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

    } else {
        // add the score to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
});
