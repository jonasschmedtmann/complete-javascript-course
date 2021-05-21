'use strict';

let number = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let cheatCode = [];

// FUNCTIONS
let backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displaySecretNumber = function () {
  number.style.width = '30rem';
  number.textContent = secretNumber;
};
let updateScore = function () {
  if (score > 0) {
    score--;
  } else if (score === 0) {
    displayMessage('GAME OVER!');
    backgroundColor('red');
    displaySecretNumber();
  }
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};

// GAME LOGIC
let gameEngine = function () {
  const guess = Number(document.querySelector('.guess').value);

  // NO INPUT
  if (!guess) {
    displayMessage('There was no number!');

    // WINNER
  } else if (guess === secretNumber) {
    backgroundColor('#60b347');
    displayMessage("That's the correct number! 🎉");
    displaySecretNumber();
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // TOO HIGH
  } else if (guess > secretNumber) {
    displayMessage("That's too high!");
    updateScore();

    // TOO LOW
  } else if (guess < secretNumber) {
    displayMessage("That's too low!");
    updateScore();
  }
};

document.querySelector('.check').addEventListener('click', gameEngine);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    gameEngine();
  }
});

//// GAME RESET /////
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  number.style.width = '15rem';
  number.textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  cheatCode = [];
});

/// KONAMI CHEAT CODE ///
let cheat = false;
const cheatKey = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];
document.addEventListener('keydown', function (e) {
  cheatCode.push(e.key);
  if (cheatCode.length === 10) {
    let i = 0;
    while (i < 10) {
      if (cheatCode[i] === cheatKey[i]) {
        i++;
      }
    }
    cheat = true;
    document.querySelector('.number').textContent = secretNumber;
    backgroundColor('blue');
  }
});
