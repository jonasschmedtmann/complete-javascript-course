'use strict';

/* console.log(document.querySelector('.message').textContent);
;

document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = '#';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Bad Guess;Invalid!!!';
  } else if (guess === 1) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else {
    document.querySelector('.message').textContent = 'Try again!';
  }
});
