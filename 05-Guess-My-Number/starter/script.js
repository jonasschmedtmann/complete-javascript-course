'use strict';
/*
console.log(document.querySelector(`.message`).textContent);

////////////////////////////////////
// Selecting & Manipulating Elements
// - When using querySelector, you must put the . in front of the class you are selecting and the whole thing must be in quotes or backticks.
document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

/////////////////////////////////////
// Handling Click Events
// - The function that we created below for the .check class is not explicitly called by us, it is handled by the javascript machine when the button is clicked.

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no guess
  if (!guess) {
    // document.querySelector(`.message`).textContent = `⛔ No Number!`;
    displayMessage(`⛔ No Number!`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    // document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    }
  } else {
    displayMessage(`💥 You lost the game!`);
    // document.querySelector(`.message`).textContent = `;
    document.querySelector(`.score`).textContent = 0;
  }
});

////////////////////////////
// Coding Challenge 1

// How I did it. THIS WON'T WORK BECAUSE IT WOULD ERASE THE HIGHSCORE THAT IS STORED.
// document.querySelector(`.again`).addEventListener(`click`, function () {
//   window.location.reload();
// });

// How Jonas did it.
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start guessing...`);
  //document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = '';

  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

/////////////////////////////////////
// Implementing the Game Logic
// - const number = Math.trunc(Math.random() * 20) + 1; Calculates a random number, would actually only go to 19.9999, so we add 1 to the end since we removed the decimal with trunc()
//   document.querySelector(`.number`).textContent = number; Assigns the text contect of the number class to the number we calculated above.

///////////////////////////////////
// Manipulating CSS Styles
// - When changing a property name from an html document, if there are two words like background-color, you need to change it to camel case.
// - Values that you are changing from a css file need to be inside of a string in the JS file, style.width = `30rem`

////////////////////////////////
// Refactoring Our Code: The DRY Principle
// - You can write functions to change textContent and call them instead of explicitly changing the class' textContent
// - const displayMessage = function (message) {
//      document.querySelector(`.message`).textContent = message;
//      }
