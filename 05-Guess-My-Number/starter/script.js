'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

 */

const displayContent = function (message) {
  document.querySelector('.message').textContent = message;
};

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number';
    displayContent('No Number');
  }
  //correct guess
  if (guess === secret) {
    //document.querySelector('.message').textContent = 'Correct Number';
    displayContent('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secret;

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    document.querySelector('.number').style.width = '30rem';
  }
  //incorrect guess
  else {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secret ? 'Too high' : 'Too Low';
      displayContent(guess > secret ? 'Too high' : 'Too Low');
      document.querySelector('.score').textContent = --score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game :(';
      displayContent('You lost the game :(');
      document.querySelector('.score').textContent = --score;
    }
  }
  /* else if (guess > secret) {
    document.querySelector('.message').textContent = 'Too high';
    document.querySelector('.score').textContent = --score;
  } else if (guess < secret) {
    document.querySelector('.message').textContent = 'Too low';
    document.querySelector('.score').textContent = --score;
  }
  if (score == 0) {
    document.querySelector('.message').textContent = 'You lost the game :(';
    document.querySelector('.score').textContent = 0;
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayContent('Start guessing the number');
});
