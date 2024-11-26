'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
} 

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = '?'
    if (!guess) {
        document.querySelector('.message').textContent  = 'Type a number!';
    } else if (guess === secretNumber){
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayMessage('You won the game!');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore; 
        }
    } else {
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
            displayMessage("GAME OVER!");
        } else if (guess > secretNumber) {
            displayMessage('Too high, try again!');
        } else if (guess < secretNumber) {
            displayMessage('Too low, try again!');
        }
    } 
})

//coding challenge 1

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; 
})
