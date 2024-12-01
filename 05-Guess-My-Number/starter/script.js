'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log((document.querySelector('.number').textContent = 13));
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
function evaluate1() {
  return '📈 التخمين عالي!';
}
function evaluate2() {
  return '📉 التخمين قليل!';
}
function name() {
  score--;
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    document.querySelector('.message').textContent = 'لقد خسرت اللعبة';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#db5a42';
    document.querySelector('.check').disabled = true;
    document.querySelector('.again').addEventListener('click', e => {
      location.reload();
      // code
    });
  }
  /**
   *  this function is called when the user lose the game
   *  it changes the background color of the page to red and
   *  disable the check button
   *  it also adds an event listener to the again button to reload the page
   */
  /******  a49c5849-e33b-4541-8866-a1c9080cc063  *******/
}
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'لا توجد رقم!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 الرقم صحيح';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').style.cssText =
      'color: #DB5A42; font-size: 3rem; font-weight: bold;';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = evaluate1();
    name();
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = evaluate2();
    name();
  }
});
// Syntax: condition ? valueIfTrue : valueIfFalse
// Example: Determine greeting based on login status
//const greeting = isLoggedIn ? 'Welcome, User!' : 'Please Log In';

//guess > secretNumber ? (document.querySelector('.message').textContent = '📈 التخمين عالي!') : (document.querySelector('.message').textContent = '📉 التخمين قليل!');
//
//




