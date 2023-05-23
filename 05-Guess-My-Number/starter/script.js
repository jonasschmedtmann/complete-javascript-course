'use strict';

let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);

let score = 10;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = '?'
    if (!guess) {
        document.querySelector('.message').textContent  = 'Type a number!';
    } else if (guess === secretNumber){
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.message').textContent = 'You won the game!';
        secretNumber = Math.floor(Math.random() * 100) + 1;
        console.log(secretNumber);
    } else if (guess > secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
            document.querySelector('.message').textContent = "GAME OVER!"
        } else {
            document.querySelector('.message').textContent = 'Too high, try again!';
        }
    } else if (guess < secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
            document.querySelector('.message').textContent = "GAME OVER!"
        } else {
            document.querySelector('.message').textContent = 'Too low, try again!';
        }
    }
})
