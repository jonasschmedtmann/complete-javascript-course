'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreSpan = document.querySelector('.score');
const highscoreSpan = document.querySelector('.highscore');
const userInput = document.querySelector('.guess');
const submitBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');
// userGuess.value = 23;
// // console.log(userGuess.value); GRABS THE VALUE OF THE INPUT FIELD

let secretNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 100;
scoreSpan.textContent = score; // dynamically generated score
highscoreSpan.textContent = highscore;

const displayMsg = (msgText) => {
  message.textContent = msgText;
}

const handleSubmit = () => {
  const userGuess = Number(userInput.value);
  console.log(userGuess);

  // no userGuess
  if (!userGuess || userGuess > 20 || userGuess < 1) {
    // message.textContent = "⛔️ Must guess a # between 1 & 20";
    displayMsg("⛔️ Must guess a # between 1 & 20");

    // correct userGuess
  } else if (userGuess === secretNum) {
    displayMsg("🙌🏼 You win! 🙌🏼");
    body.style.backgroundColor = "#38b000";
    number.style.width = "30rem";
    number.textContent = secretNum;

    if (score > highscore) {
      highscore = score;
      highscoreSpan.textContent = score;
    }

    // incorrect userGuess
  } else if (userGuess !== secretNum) {
    if (score > 10) {
      displayMsg(userGuess > secretNum ? "📈 too high" : "📉 too low");
      score -= 10;
      scoreSpan.textContent = score;
      body.style.backgroundColor = "#f4a259";
    } else {
      displayMsg("💥 You lost the game!");
      body.style.backgroundColor = "#bc4749";
      scoreSpan.textContent = 0;
      number.style.width = "30rem";
      number.textContent = secretNum;
    }
  }

  // previous code: following DRY principles, used ternary operator on line 45
  // else if (userGuess > secretNum) {
  //   if (score > 10) {
  //     message.textContent = "👎🏼 Your guess is too high";
  //     score -= 10;
  //     scoreSpan.textContent = score;
  //     body.style.backgroundColor = "#f4a259";
  //   } else {
  //     message.textContent = "💥 You lost the game!";
  //     body.style.backgroundColor = "#bc4749";
  //     scoreSpan.textContent = 0;
  //     number.style.width = "30rem";
  //     number.textContent = secretNum;
  //   }

  //   // user guess too low
  // } else if (userGuess < secretNum) {
  //   if (score > 10) {
  //     message.textContent = "👎🏼 Your guess is too low";
  //     score -= 10;
  //     scoreSpan.textContent = score;
  //     body.style.backgroundColor = "#f4a259";
  //   } else {
  //     message.textContent = "💥 You lost the game!";
  //     body.style.backgroundColor = "#bc4749";
  //     scoreSpan.textContent = 0;
  //     number.style.width = "30rem";
  //     number.textContent = secretNum;
  //   }
  // }
}

// const playAgain = () => {
//   location.reload(); 
// we dont want to reload the browser or we will lose our highscore--  we want to physcially RESET everything
// }
const playAgain = () => {
  score = 100;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  scoreSpan.textContent = score;
  number.textContent = "?";
  userInput.value = "";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
}

submitBtn.addEventListener('click', handleSubmit);
againBtn.addEventListener('click', playAgain);