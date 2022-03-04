'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// State -----------------------------------------------------------------------------
let score = 20;
let highscore = 0;

//Methods -----------------------------------------------------------------------------
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displaySuccess = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '30rem';
};

const doGuess = number => {
  return new Promise((resolve, reject) => {
    if (number === secretNumber) {
      resolve();
    }
    if (number !== secretNumber) {
      reject();
    }
  });
};

const guessNumber = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) displayMessage('⛔️ No number!');

  doGuess(guess)
    .then(() => {
      displayMessage('🎉 Correct Number!');
      displaySuccess();
      score > highscore &&
        (() => {
          highscore = score;
          document.querySelector('.highscore').textContent = score;
        })();
    })
    .catch(() => {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    });
};

const restartGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

//Dom manipulate  ----------------------------------------------------------------------------------------

document.querySelector('.guess').addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    guessNumber();
  }
});

document.querySelector('.check').addEventListener('click', () => {
  guessNumber();
});

document.querySelector('.again').addEventListener('click', () => {
  restartGame();
});
