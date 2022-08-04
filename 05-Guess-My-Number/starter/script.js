"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const changeColorWidthStyle = function (backgroundColor, width) {
  document.querySelector("body").style.backgroundColor = backgroundColor;
  document.querySelector(".number").style.width = width;
};

const changeScore = function (scoreValue) {
  document.querySelector(".score").textContent = scoreValue;
}

const randomNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
}

let secret = randomNum();
console.log(secret);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number!");
  }
  if (guess === secret) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secret;

    changeColorWidthStyle("#60b347", "30rem");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(
        guess > secret ? "Too high! Try again..." : "Too low! Try again..."
      );
      score--;
      changeScore(score);
    } else {
      displayMessage("Game Over!");
      changeScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secret = randomNum();
  score = 20;

  changeScore(score);
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";

  changeColorWidthStyle("#222", "15rem");
});
