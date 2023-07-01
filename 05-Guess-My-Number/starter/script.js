'use strict';

let score = 20;
let highscore = 0;
const checkIfScoreIsZero = score => (score == 0 ? true : false);
let count = 0;
const doOperationOnGuessingNumber = () => {
  if (!checkIfScoreIsZero(score)) {
    const guessValue = Number(document.querySelector('.guess').value);
    if (!guessValue) {
      document.querySelector('.message').textContent = '⛔️ No Number !';
    }
    if (guessValue == randomNumber) {
      guessValueEqualsToRandomNumber();
    } else if (guessValue > randomNumber) {
      document.querySelector('.message').textContent = '📈 Too High !';
      score--;
    } else {
      document.querySelector('.message').textContent = '📉 Too Low !';
      score--;
    }
  } else {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('h1').textContent = '💥 You Lose the Game !!!';
  }
  document.querySelector('.score').textContent = score;
};

const guessValueEqualsToRandomNumber = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('.number').textContent = randomNumber;
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};
let randomNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(randomNumber);

const resetScoresAndStartGameAgain = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  randomNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //console.log(randomNumber);
};
document
  .querySelector('.check')
  .addEventListener('click', doOperationOnGuessingNumber);
document
  .querySelector('.again')
  .addEventListener('click', resetScoresAndStartGameAgain);
