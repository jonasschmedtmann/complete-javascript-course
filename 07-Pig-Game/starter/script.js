'use strict';
const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')
const score0EL = document.querySelector('#score--0')
const score1EL = document.getElementById('score--1')
const currentScore0EL = document.getElementById('current--0')
const currentScore1EL = document.getElementById('current--1')

const diceEL = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden')

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0
    //     Toggle will add the class if it's not there and it'll remove it if it's there.
    player0EL = classList.toggle('.player--active')
    player1EL = classList.toggle('.player--active')
}




btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log('dice')

    diceEL.classList.remove('hidden')
    diceEL.src = `dice-$(dice).png`;
    if (dice !== 1) {
        currentScore = + dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
})
    .btnHold.addEventListener(click, function () {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer]

        if (scores(activePlayer) >= 20) {
            document.querySelector(`.player--${activePlayer}`).
                classList.add('player--winner');

            document.querySelector(`.player--${activePlayer}`).
                classList.remove('player--active');
        } else {
            switchPlayer()
        }
    })