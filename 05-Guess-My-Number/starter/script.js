'use strict';

const secretNum = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';
console.log('Secret Number: ', secretNum);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (disScore) {
  document.querySelector('.score').textContent = disScore;
};

const displayNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

const updateBody = function (width, bgColor) {
  document.querySelector('.number').style.width = width;
  document.querySelector('body').style.backgroundColor = bgColor;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number 🥸');
  } else if (guess === secretNum) {
    displayMessage('Je baat 😎');
    displayScore(score++);
    displayNumber(secretNum);
    updateBody('30rem', '#60b347');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNum) {
    displayMessage(guess > secretNum ? 'Too high 🥵' : 'Too low 🥶');
    displayScore(score--);
  } else {
    displayMessage('You loose. 🤬');
    displayScore(0);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const secretNum = Math.trunc(Math.random() * 20 + 1);
  displayNumber('?');
  console.log('Secret Number: ', secretNum);

  displayScore(20);
  displayMessage('Keep Guessing... ');
  document.querySelector('.guess').value = '';

  updateBody('15rem', '#222');
});
