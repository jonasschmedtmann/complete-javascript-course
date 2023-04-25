'use strict';

let players = Array.from(document.querySelectorAll('.player'));
const scores = Array.from(document.querySelectorAll('.score'));
const currentScores = Array.from(document.querySelectorAll('.current-score'));
const dice = document.querySelector('.dice');
const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

let scoreInd = 0;
let gameRun = true;
scores.map(elem => (elem.innerHTML = 0));
dice.classList.add('hidden');

const rollDice = () => {
  if (gameRun) {
    let randomDice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.setAttribute('src', `dice-${randomDice}.png`);
    if (randomDice == 1) {
      players.map((elem, ind) => {
        if (elem.classList.contains('player--active')) {
          elem.classList.remove('player--active');
          currentScores[ind].innerHTML = 0;
        } else {
          elem.classList.add('player--active');
          scoreInd = ind;
          currentScores[ind].innerHTML = 0;
        }
      });
    } else {
      currentScores[scoreInd].innerHTML =
        +currentScores[scoreInd].innerHTML + randomDice;
    }
  }
};

const holdScore = () => {
  if (gameRun) {
    scores[scoreInd].innerHTML =
      +scores[scoreInd].innerHTML + +currentScores[scoreInd].innerHTML;
    if (+scores[scoreInd].innerHTML >= 20) {
      players[scoreInd].classList.add('player--winner');
      players[scoreInd].classList.remove('player--active');
      dice.classList.add('hidden');

      gameRun = false;
    } else {
      players.map((elem, ind) => {
        if (elem.classList.contains('player--active')) {
          elem.classList.remove('player--active');
          currentScores[ind].innerHTML = 0;
        } else {
          elem.classList.add('player--active');
          scoreInd = ind;
          currentScores[ind].innerHTML = 0;
        }
      });
    }
  }
};

const resetGame = () => {
  scores.map(elem => (elem.innerHTML = 0));
  currentScores.map(elem => (elem.innerHTML = 0));
  players.map(elem => {
    if (elem.classList.contains('player--winner')) {
      console.log(elem);
      elem.classList.remove('player--winner');
      elem.classList.add('player--active');
    }
  });
  gameRun = true;
};

rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', holdScore);
newButton.addEventListener('click', resetGame);
