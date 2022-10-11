'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number! 🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//with an input fiel you use the value method
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

//Event listener - wait for an event to happen to do something
//addEventListener - takes 2 arguments. The first is the thing we need to change and the 2nd is a function
// to change styles on CSS always use .style;

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

        //When there is no input
    if(!guess) {
        document.querySelector('.message').textContent = '❌ No number ';

        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Correct number! 🥳';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            //When guess is too low
        } else if (guess < secretNumber) {
        
        if(score > 0) {
            document.querySelector('.message').textContent = '⬇️ Too low!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game! 💥';
        }
        //When guess is too high
    } else if (guess > secretNumber) {
        if(score > 0) {
            document.querySelector('.message').textContent = '⬆️ Too high'
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game! 💥';
        }  
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score; 
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start Guessing ...';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
*/

//2nd try
let secretNumber = Math.round(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const changeBackgroundColor = string =>
  (document.querySelector('body').style.backgroundColor = string);
const changeNumberWidth = string =>
  (document.querySelector('.number').style.width = string);
const displayScore = score =>
  (document.querySelector('.score').textContent = score);
const displaySecretNumber = number =>
  (document.querySelector('.number').textContent = secretNumber);

const rightAnswer = () => {
  displayMessage('You are right!');
  displaySecretNumber();
  changeNumberWidth('30rem');
  changeBackgroundColor('#60b347');
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
  }
};

const wrongAnswer = guess => {
  displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
  if (score <= 0) {
    displayMessage('You lost!');
  } else {
    score--;
    displayScore(score);
  }
};

const onCheck = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    rightAnswer();
  } else if (guess !== secretNumber) {
    wrongAnswer();
  }
};

const onAgain = () => {
  score = 20;
  secretNumber = Math.round(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  displayScore(score);
  displaySecretNumber('?');
  changeNumberWidth('15rem');
  displayMessage('Start guessing...');
  changeBackgroundColor('#222');
};

document.querySelector('.check').addEventListener('click', onCheck);
document.querySelector('.again').addEventListener('click', onAgain);
