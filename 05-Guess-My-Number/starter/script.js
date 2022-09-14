'use strict';
//adding comment
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 90;
// console.log(document.querySelector('.guess').value);
let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';

  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess < randomNumber ? '📉 Too low!' : '📈 Too high!');
    } else {
      displayMessage('💥 You lost the game!');
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else if (randomNumber === guess) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.highscore').textContent = 0;
  score = 20;
  document.querySelector('.score').textContent = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
