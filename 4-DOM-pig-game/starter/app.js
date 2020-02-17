/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  //set all the scores to zero
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

init();
//document.querySelector("#current-" + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector("#score-" + activePlayer).textContent; //read content in the id and store it into the variable 'x'
console.log(x);

//using query selector to change the css of an object (hide the die)
//document.querySelector(".dice").style.display = "none";

//when the mouse is clicked on the "roll dice" button, do this:
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1. get a random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //3. update the round score IF the the rolled number is NOT a 1
  if (dice !== 1) {
    //add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    changePlayer();
  }
});

function changePlayer() {
  //next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //set round score to 0
  roundScore = 0;

  //display 0 as the round score
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";

  //switch the styling of the players to reflect who is 'active'
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //hide the die when a '1' is rolled
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-hold").addEventListener("click", function() {
  //add the current score to player's global score
  scores[activePlayer] += roundScore;

  //update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  //check if the player won the game
  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    changePlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", init);
