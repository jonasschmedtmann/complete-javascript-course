'use strict';
const number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > number) {
    document.querySelector('.message').textContent = '📈  high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = '📉  low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});


