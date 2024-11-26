'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);

//HANDLING CLICK EVENTS FOR CHECK BUTTON
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //Changing the background colour
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Changing the width of the number
    document.querySelector('.number').style.width = '30rem';

    //Highscore function
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      //or
      // score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '😢 Sorry, you lost the game!';
      displayMessage('😢 Sorry, you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// -------------OR------------
//When player's guess values are too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       //or
//       // score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         '😢 Sorry, you lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//     //When player's guess values are too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         '😢 Sorry, you lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

//HANDLING CLICK EVENTS FOR AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  // console.log('You want a reset');
  score = 20;
  //changing secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //changing the text
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //changing the score
  document.querySelector('.score').textContent = score;
  //changing the number
  document.querySelector('.number').textContent = '?';
  //changing the guess imput
  document.querySelector('.guess').value = '';
  //Changing the background colour
  document.querySelector('body').style.backgroundColor = '#222';
  //Changing the width of the number
  document.querySelector('.number').style.width = '15rem';
});
