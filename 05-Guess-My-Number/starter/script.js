'use strict';
/*
console.log(document.querySelector('.message').textContent); //.textContent shows string content
document.querySelector('.message').textContent = 'Correct Number 🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highScore = 0;
//Remove secret number when finished with project//
// document.querySelector('.number').textContent = secretNumber;

//*addEventListener is the Best method & most used today* 2 arguments 1. action 2. function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess > 20) {
    //If guess is more than 20
    document.querySelector('.message').textContent =
      '❌ Number MUST BE between 1 - 20';
  } else if (guess === secretNumber) {
    //When player wins
    document.querySelector('.message').textContent = 'Correct Number 🥳';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    //When guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 YOU LOST THE GAME!';
      document.querySelector('body').style.backgroundColor = '#fc0909';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //When guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 YOU LOST THE GAME!';
      document.querySelector('body').style.backgroundColor = '#fc0909';
      document.querySelector('.score').textContent = 0;
    }
  }
});

///////////Section-7 Coding Challenge #1 /////////////////////////

//@@@BEFORE VIDEO HELP@@@@
//.again btn which resets everything back to default//
// document.querySelector('.again').addEventListener('click', function () {
//   document.querySelector('.score').textContent = '20';
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   Number((document.querySelector('.guess').value = ''));
// });

/* @@@ AFTER VIDEO HELP @@@ */
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

///////////////////////////Section-7 Coding Challenge #1 $$$COMPLETE$$$$////////////////
