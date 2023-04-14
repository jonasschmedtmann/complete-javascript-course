'use strict';
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0Display = document.querySelector("#score--0");
const score1Display = document.querySelector("#score--1");
const currScore0El = document.querySelector("#current--0");
const currScore1El = document.querySelector("#current--1");
const diceImg = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHoldScore = document.querySelector(".btn--hold");
const btnRules = document.querySelector(".btn--rules");
const rulesModal = document.querySelector(".rules-modal");
const closeModal = document.querySelector(".close-modal");

let totalScores, currentScore, activePlayer, playing;

const init = function () {
  // stores an array of scores 0 for player 0 and 0 for player 1
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // starting conditions
  score0Display.textContent = 0;
  score1Display.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;

  diceImg.classList.add("hidden");
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
};

const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(
    `#current--${activePlayer}`
  ).textContent = currentScore;
  // is activePlayer === 0??? , if YES-- make active player 1, otherwise: make active player 0 aka SWITCH PLAYERS'''
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle who is the active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRollDice.addEventListener("click", function () {
  if (playing) {
    // 1. genearte random dice roll
    const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice roll
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${randomDiceRoll}.png`;
    // 3. check for 1: if true, switch to next player otherwise add dice roll to current score
    if (randomDiceRoll !== 1) {
      currentScore += randomDiceRoll;
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHoldScore.addEventListener("click", function () {
  if (playing) {
    // add current score to actice player's total score
    // totalScores at position 1 will have the value of the current totalScore plus the currentScore
    totalScores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = totalScores[activePlayer];

    if (totalScores[activePlayer] >= 50) {

      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceImg.classList.add('hidden');
    } else {
      //otherwise switch players)
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener("click", init);

btnRules.addEventListener("click", function () {
  rulesModal.classList.toggle("hidden");
});

closeModal.addEventListener("click", function () {
  rulesModal.classList.add("hidden");
});

init();