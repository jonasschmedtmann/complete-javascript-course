'use strict';

// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.message').textContent = 'Correct Number!';
//
// console.log(document.querySelector('.guess').value);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const gameOver = function () {
  displayMessage('❗GAME OVER❗');
  document.querySelector('.score').textContent = '0';
  document.querySelector('.number').textContent = '!';
};
const wrongGuess = function (message) {
  currentScore--;
  displayMessage(message);
  document.querySelector('.score').textContent = currentScore;
};
// Generate random number for solution
let solutionNumber = Math.trunc(Math.random() * 20) + 1;
console.log(solutionNumber);

// Player starter score
let currentScore = 20;

// Event Handler for clicking the 'check' btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input condition
  if (!guess) {
    displayMessage('Input a number to start guessing...');
  } else if (guess == solutionNumber) {
    // Win condition
    if (currentScore > 1) {
      document.querySelector('.message').textContent =
        '🎉 You guessed the correct number!';
      document.querySelector('.number').textContent = solutionNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.color = '#60b347';

      // Determine if player receives high score
      if (
        currentScore > Number(document.querySelector('.highscore').textContent)
      ) {
        document.querySelector('.highscore').textContent = currentScore;
      }
    }
  } else if (guess !== solutionNumber) {
    // Guessed wrong condition
    if (currentScore > 1) {
      wrongGuess(guess > solutionNumber ? 'Too high...' : 'Too low...');
    } else {
      gameOver();
    }
  }
});

// Event handler for clicking the 'again' btn
document.querySelector('.again').addEventListener('click', function () {
  solutionNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  // Change Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.color = '#222';
  document.querySelector('.number').style.width = '15rem';
});
