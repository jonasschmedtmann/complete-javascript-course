'use strict';

// Generate random number
const randomNumber = Math.trunc(Math.random() * 10) + 1;
console.log(randomNumber);

const score = document.querySelector('.score').textContent;

// hide the randomNumber later
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (guess === randomNumber) {
    console.log('match');
  } else if (guess > randomNumber) {
    score;
  }
});
