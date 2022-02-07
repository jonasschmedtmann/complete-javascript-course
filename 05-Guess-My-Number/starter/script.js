'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Whe there is no input
  if (!guess) {
    displayMessage('😝 No number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('😀 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🈸 Too high!' : '🪅 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👽 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
//   1. Select the element with the 'again' class and attach a click event handler
//   2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
//   3. Restore the initial conditions of the message, number, score and guess input fields
//   4. Also restore the original background color (#222) and number width (15rem) GOOD LUCK 😀

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.removeProperty('background-color');
  document.querySelector('.number').style.removeProperty('width');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = secretNumber;
});
