'use strict';

let number = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displaySecretNumber = function () {
  number.style.width = '30rem';
  number.textContent = secretNumber;
};
let updateScore = function () {
  if (score > 0) {
    score--;
  } else if (score === 0) {
    displayMessage('GAME OVER!');
    backgroundColor('red');
    displaySecretNumber();
  }
  document.querySelector('.score').textContent = score;
};

let gameEngine = function () {
  const guess = Number(document.querySelector('.guess').value);

  // NO INPUT
  if (!guess) {
    displayMessage('There was no number!');

    // WINNER
  } else if (guess === secretNumber) {
    backgroundColor('#60b347');
    displayMessage("That's the correct number! 🎉");
    displaySecretNumber();
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // TOO HIGH
  } else if (guess > secretNumber) {
    displayMessage("That's too high!");
    updateScore();

    // TOO LOW
  } else if (guess < secretNumber) {
    displayMessage("That's too low!");
    updateScore();
  }
};

document.querySelector('.check').addEventListener('click', gameEngine);

//// GAME RESET /////
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  number.style.width = '15rem';
  number.textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
});

let cheat = false;

if (cheat) {
  document.querySelector('.number').textContent = secretNumber;
}
