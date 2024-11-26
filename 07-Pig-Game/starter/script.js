'use strict';

const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
document.querySelector(`#score--0`).textContent = `0`;
document.querySelector(`#score--1`).textContent = `0`;
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let dice = 0;

document.querySelector(`#current--` + activePlayer).textContent = dice;

// const btnRoll = document.querySelector(`.btn--roll`);
// let dicePic = document.querySelector(`.dice`);
// // let currentScore0 = Number(document.querySelector(`#current--0`).textContent);
// // let currentScore1 = Number(document.querySelector(`#current--1`).textContent);
// console.log(currentScore0);

const diceRoll = function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(
      `#current--` + activePlayer
    ).textContent = currentScore;
  } else {
    currentScore = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector('#current--0').textContent = '0';
    document.querySelector('#current--1').textContent = '0';
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    console.log(activePlayer);
  }
  console.log(currentScore);
};

btnRoll.addEventListener(`click`, diceRoll);

const hold = function () {
  if (activePlayer === 0) {
    scores[0] += currentScore;
    if
    activePlayer = 1;
    document.querySelector('.player--1').classList.toggle('player--active');
    scores[0] += currentScore;
    document.querySelector(`#score--0`).textContent = scores[0];
    currentScore = 0;
  } else {
    activePlayer = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    scores[1] += currentScore;
    document.querySelector(`#score--1`).textContent = currentScore;
    currentScore = 0;
  }
};

btnHold.addEventListener(`click`, hold);
