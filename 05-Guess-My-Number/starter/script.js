'use strict';

// Generate random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

// Display message
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// when check button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉 Correct Number!');
    // show secret number when player wins
    document.querySelector('.number').textContent = secretNumber;
    // check highscore and replace if necess...
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is different than secretNumber
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    displayScore(score);
  } else {
    displayMessage('Game Over!');
    displayMessage(0);
  }
  // When player guesses higher number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // When player guesses lower number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
});
// When again button is clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  displayMessage('Start guessing...');
  displayMessage(score);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
