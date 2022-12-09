'use strict';

// DOM Manipulation
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.highscore').textContent = 10;
let score = 20;
console.log(score);

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent = 'Correct Number!';

  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {

    document.querySelector('.message').textContent = 'No Number Entered 😮‍💨';

  } else if (guess === secretNumber) {

    document.querySelector('.message').textContent = ' 👍 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

  } else if (guess > secretNumber) {

      if (score > 1) {

        document.querySelector('.message').textContent = '😂 Too High Bro';
        score--;
        document.querySelector('.score').textContent = score;

    } else {

      document.querySelector('.message').textContent = '🤪 Game Over';
      document.querySelector('.score').textContent = 0;

    }

  } else if (guess < secretNumber) {
    if (score > 1) {

      document.querySelector('.message').textContent = '😂 Too Low Bro';
      score--;
      document.querySelector('.score').textContent = score;

    } else {

      document.querySelector('.message').textContent = '🤪 Game Over';
      //document.querySelector('.score').textContent = 0;

    }
  }
});

// Problem: Reset the game state to the original settings so player can start over
// 1. create an event handler to lesten for the "Again Btn Click"
// 2 Reset the initial vals

document.querySelector('.again').addEventListener('click', function () {

  if ( document.querySelector('.highscore').textContent <  document.querySelector('.score').textContent ) {

    console.log('New High Score');
    document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;

  }

  document.querySelector('.message').textContent = 'Lets Play again';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  score = 20;  

});
