'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Display Secret Number
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;
let updateScore = function () {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score === 0) {
    document.querySelector('.message').textContent = 'GAME OVER!';
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'There was no number!';

    // WINNER
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent =
      "That's the correct number! 🎉";
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // TOO HIGH
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = "That's too high!";
    updateScore();

    // TOO LOW
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = "That's too low!";
    updateScore();
  }
});

//// GAME RESET /////
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
});
