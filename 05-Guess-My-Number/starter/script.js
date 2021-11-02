'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Whe there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😝 No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.message').textContent = '😀 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🈸 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👽 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🪅 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👽 You lost the game';
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
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = secretNumber;
});
