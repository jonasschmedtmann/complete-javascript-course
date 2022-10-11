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
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = +document.querySelector('.score').textContent;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value;

    if (!guess) {   // no input
        document.querySelector('.message').textContent = '🚫 No Number !!';
    } else if (guess === secretNumber) {    // guess is correct
        document.querySelector('.message').textContent = '🏆 Correct Number!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        // Update the high score
        if (highScore < score) {
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }

    } else if (guess > secretNumber) {  // guess is high
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High!!';
        } else {
            document.querySelector('.message').textContent = 'You lost the game!!!';
        }
        decreaseScore();
        updateScoreUI();
    } else if (guess < secretNumber) {  // guess is low
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!!';
        } else {
            document.querySelector('.message').textContent = '🎲 You lost the game!!!';
        }
        decreaseScore();
        updateScoreUI();
    }


});

const decreaseScore = () => {
    score--;
};

const updateHighScore = () => {

};

function updateScoreUI () {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    updateScoreUI();

});