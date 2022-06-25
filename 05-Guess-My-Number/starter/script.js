'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Correct Number! ')
);
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 4;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

1. select element with 'again' class
2. add click event handler for 'again' class
3. 'again' resets the score
4. 'again' resets secretNumber
5. 'again' resets the message, number,score and guess input
fields
6. 'again resets the 





*/
// The Game Code - Refactored
// Identity duplicate code

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    displayMessage('Please enter a number');
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high ...' : 'Too low ...');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // lose condition
    else {
      displayMessage('Game lost. Try again...');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   // When number is too high
  //   else if (guess > secretNumber) {

  //     }
  //   }
  // When number is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  // lose condition
  else {
    document.querySelector('.message').textContent = 'Game lost. Try again...';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
