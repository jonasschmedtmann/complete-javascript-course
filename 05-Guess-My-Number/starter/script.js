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
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = +document.querySelector('.score').textContent;

document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value;

    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number !!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🍾 Correct Number!!';
        document.querySelector('.highscore').textContent = secretNumber;
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '🙆🏼‍♂️ Too High!!';
        } else {
            document.querySelector('.message').textContent = 'You lost the game!!!';
        }
        updateScore();
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!!';
        } else {
            document.querySelector('.message').textContent = 'You lost the game!!!';
        }
        updateScore();
    }


});

function updateScore () {
    score--;
    document.querySelector('.score').textContent = score;
}