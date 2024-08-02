'use strict';

/* console.log(document.querySelector('.message').textContent);
;

document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = '#';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

/* const secretNumber = function () {
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(i);
  }
  let num = Math.floor(Math.random() * (arr.length + 1));
  if (num === 0) {
    return secretNumber();
  } else {
    return num;
  }
}; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
/* document.querySelector('.number').textContent = secretNumber; */
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Bad Guess;Invalid!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < 0 || guess > 20) {
    document.querySelector('.message').textContent = 'No tricks, Goodbye!!!!';
    setTimeout(() => {
      window.close();
    }, 2000);
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.highscore').textContent = highScore;
});
