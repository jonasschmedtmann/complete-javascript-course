'use strict';

let answer;
let score = 20;
let Highscore=0;

// Function to start or reset the game
let again = () => {
    answer = Math.floor((Math.random() * 20) + 1);
    score = 20;
    document.getElementById('score').innerHTML = score;
    document.getElementById('message').innerHTML = 'Start guessing...';
    document.getElementById('number').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.getElementById('answer').innerHTML = '?';
};

// Function to play the game
let playgame = () => {
    let input = document.getElementById('number');
    let value = Number(input.value);  // Ensure input is treated as a number

    if (!value) {
        document.getElementById('message').innerHTML = "No number!";
    } else if (value === answer) {
        document.getElementById('message').innerHTML = "Correct answer!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.getElementById('answer').innerHTML = answer;
        if(score<=0) {return 0;}
        else if(score>0 && score>=Highscore) {
            Highscore=score;
            document.getElementById('highscore').innerHTML = Highscore; 
        }
    } else if (value > answer) {
        document.getElementById('message').innerHTML = "Too High!";
        score--;
        document.getElementById('score').innerHTML = score;
    } else {
        document.getElementById('message').innerHTML = "Too Low!";
        score--;
        document.getElementById('score').innerHTML = score;
    }

    // Reset the game if the score reaches 0
    if (score <= 0) {
        document.getElementById('message').innerHTML = "Game Over!";
        score = 0;
    }
};

// Start the game for the first time
again();
