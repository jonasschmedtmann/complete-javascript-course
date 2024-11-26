'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `Correct Number! 👍`;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


*/

let secretNumber;
const calcSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
let score = 20;
let highScore = 0;

calcSecretNumber();
// document.querySelector('.number').textContent = secretNumber;

const wrongGuess = function () {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    score--;
    changeMessage('You lost the game! 😞');
  }
};

const changeMessage = function (newMessage) {
  document.querySelector('.message').textContent = newMessage;
};

document.querySelector('.check ').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    changeMessage(`No number 💔`);
  } else if (guess === secretNumber) {
    changeMessage(`Correct number! 😎`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    changeMessage(`Too high! 👇`);
    wrongGuess();
  } else if (guess < secretNumber) {
    changeMessage(`Too low! 👆`);
    wrongGuess();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  calcSecretNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  changeMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
