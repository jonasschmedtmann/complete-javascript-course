'use strict';

//element selection
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

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
// setting the initial values
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //set score to 0
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); // change background highlight
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // Dice Rolling Functionality
    const dice = Math.trunc(Math.random() * 6) + 1; //1. Generate random dice roll
    diceEl.classList.remove('hidden'); //2. Display the dice roll
    diceEl.src = `dice-${dice}.png`;
    // console.log(`I have rolled an ${dice} and I am displaying ${diceEl.src}`);

    if (dice !== 1) {
      //Check for random dice roll is 1 - if True switch to next player

      currentScore += dice; //add to current score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // change later
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      //TRY TO ADD A MODAL WITH THE WINNER
    } else {
      // check if player's score is >= 100
      // finish the game
      switchPlayer();
    }
  }
});

//implement New Game mechanic
btnNew.addEventListener('click', init);
