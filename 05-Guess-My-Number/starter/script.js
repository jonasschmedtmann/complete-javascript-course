'use strict';

// Generate random number
let randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

document.querySelector('.score').textContent = 10;

// hide the randomNumber later
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (guess === randomNumber) {
    console.log('match');
  } else if ()
});
