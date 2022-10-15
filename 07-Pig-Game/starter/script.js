'use strict';

/* 
    82: Project #3: PIG Game
    83: Rolling the Dice
    84: Switching the Active Player
    85: Holding current score
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
let playing = true;

btnRoll.addEventListener('click', function () {
    if (playing) {
        // Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // Display the dice roll
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // Check if the dice roll is 1
        if (dice === 1) {
            // switch the current player
            switchPlayer();
        } else {
            // add the score to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        switchPlayer();
    }
});

const switchPlayer = () => {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] < 20) {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    } else {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('.player--active');
        diceEl.classList.add('hidden');
    }
}

// const resetGame = () => {
//     score0El.textContent = 0;
//     score1El.textContent = 0;
//     diceEl.classList.add('hidden');
//     currentScore = 0;
//     activePlayer = 0;
//     scores = [0, 0];
//     document.getElementById(`current--${activePlayer}`).textContent = currentScore;
// }
