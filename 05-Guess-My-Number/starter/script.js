'use strict';

/*
    72: Selecting and manipulating DOM elements
*/
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🍾 Correct Number!!';

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(
//     document.querySelector('.guess').value
// );

/* 
    73: Handling the Click Events
    74: Implementing the Game Logic
    75: Manipulating CSS styles
    76: Coding Challenge #1 -- Implementing the reset button
    77: Implementing high scores
    78: Refactoring the code: The DRY Principle
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = +document.querySelector('.score').textContent;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value;

    if (!guess) {   // no input
        displayMessage('🚫 No Number !!');
    } else if (guess === secretNumber) {    // guess is correct
        displayMessage('🏆 Correct Number!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        // Update the high score
        if (highScore < score) {
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }

    } else if (guess !== secretNumber) {

        let message;
        // When score is above 0, update the message for input.
        if (score > 1) {
            message = guess > secretNumber ? '📈 Too High!!' : '📉 Too Low!!';
        } else {
            message = '😢 You lost the game!!!';
            document.querySelector('.check').disabled = true;
        }
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(message);
    }
});

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');

});