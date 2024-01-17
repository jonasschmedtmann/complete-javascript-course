'use strict';
/*
console.log(document.querySelector('.message').textContent); //gets text content of a DOM element

document.querySelector('.message').textContent = 'Correct Number! 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

const genSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayWinner = function (secretNumber, highScore) {
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

let secretNumber = genSecretNumber();
console.log(secretNumber);
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

// adds an event listener to an element and executes a function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    displayMessage('No number! ⛔️');
    // out of range guess
  } else if (guess < 1 || guess > 20) {
    displayMessage('Guess between 1 and 20!');
    score--;
    document.querySelector('.score').textContent = score;
    // winner!
  } else if (guess === secretNumber) {
    if (score > highScore) {
      displayMessage('New High Score! 🥇');
    } else {
      displayMessage('Correct Number! 🎉');
    }

    highScore = highScore < score ? score : highScore;
    displayWinner(secretNumber, highScore);
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! 💥');
      document.querySelector('.score').textContent = 0;
    }
    // too high
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = genSecretNumber();
  console.log(secretNumber);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
