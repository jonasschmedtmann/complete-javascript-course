'use strict';
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');
let currentPlayer = 0;
let currentDiceRollValue = 0,
  totalScoreForFirstPlayer = 0,
  totalScoreForSecondPlayer = 0,
  scoreAfterCurrentDiceRoll = 0;
const doOperationIfNumberIsOne = () => {
  scoreAfterCurrentDiceRoll = 0;
  if (firstPlayer.classList.contains('player--active')) {
    document.getElementById(`current--${currentPlayer}`).innerHTML =
      scoreAfterCurrentDiceRoll;
    currentPlayer = 1;
    firstPlayer.classList.remove('player--active');
    secondPlayer.classList.add('player--active');
  } else {
    document.getElementById(`current--${currentPlayer}`).innerHTML =
      scoreAfterCurrentDiceRoll;
    currentPlayer = 0;
    firstPlayer.classList.add('player--active');
    secondPlayer.classList.remove('player--active');
  }
};
const doOperationOnRollDice = () => {
  currentDiceRollValue = Math.trunc(Math.random() * 6) + 1;
  if (currentDiceRollValue == 1) {
    doOperationIfNumberIsOne();
  } else {
    scoreAfterCurrentDiceRoll += currentDiceRollValue;
  }
  diceImage.src = `dice-${currentDiceRollValue}.png`;
  document.getElementById(`current--${currentPlayer}`).innerHTML =
    scoreAfterCurrentDiceRoll;
};

const doOperationOnHoldDice = () => {
  if (currentPlayer == 0) {
    totalScoreForFirstPlayer += scoreAfterCurrentDiceRoll;
    document.getElementById(`score--0`).innerHTML = totalScoreForFirstPlayer;
    if (totalScoreForFirstPlayer >= 100) {
      diceImage.classList.add('hidden');
      firstPlayer.classList.add('player--winner');
      //console.log('Player 1 wins !!');
    } else {
      doOperationIfNumberIsOne();
    }
  } else {
    totalScoreForSecondPlayer += scoreAfterCurrentDiceRoll;
    document.getElementById(`score--1`).innerHTML = totalScoreForSecondPlayer;
    if (totalScoreForSecondPlayer >= 100) {
      diceImage.classList.add('hidden');
      secondPlayer.classList.add('player--winner');
      //console.log('Player 2 wins !!');
    } else {
      doOperationIfNumberIsOne();
    }
  }
};
rollDice.addEventListener('click', doOperationOnRollDice);
holdDice.addEventListener('click', doOperationOnHoldDice);
newGame.addEventListener('click', function () {
  diceImage.classList.remove('hidden');
  currentDiceRollValue = 0;
  totalScoreForFirstPlayer = 0;
  totalScoreForSecondPlayer = 0;
  scoreAfterCurrentDiceRoll = 0;
  firstPlayer.classList.add('player--active');
  secondPlayer.classList.remove('player--active');
  document.getElementById(`current--0`).innerHTML = 0;
  document.getElementById(`current--1`).innerHTML = 0;
  firstPlayer.classList.remove('player--winner');
  secondPlayer.classList.remove('player--winner');
  document.getElementById(`score--1`).innerHTML = 0;
  document.getElementById(`score--0`).innerHTML = 0;
});
