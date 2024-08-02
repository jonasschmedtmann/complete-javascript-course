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
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess || guess < 0 || guess > 20) {
    document.querySelector('.message').textContent = 'Bad Guess;Invalid!!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
  }
});
