'use strict';

let score = 20;
let highScore = 0;
let secretNumber = calcNumber();

function calcNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

// document.getElementById('dis').disabled;
document.querySelector('.check').addEventListener('click', function () {
  let guess;
  guess = +document.querySelector('.guess').value;

  if (!guess) {
    displayMessage('Not a number');
  } else if (guess === secretNumber) {
    displayMessage('You win');
    checkHighscore();
  } else {
    if (score < 1) {
      displayMessage('You lost');
    } else {
      guess > secretNumber
        ? displayMessage('Too high')
        : displayMessage('Too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

const checkHighscore = function () {
  if (score > highScore) {
    document.querySelector('.highscore').textContent = score;
    alert(`New highscore ${score}`);
  }
};
