/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

// global scores for player 1 & player 2
// scores = [0, 0];
// roundScore (only 1 player plays per round)
// roundScore = 0;
// player 1 = 0, player 2 = 1
// activePlayer = 0;

// function to set scores and active player
init();

// manipulating the DOM
// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// reads value of #score-0 and stores that to var x
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

// adding a css property to an html element
// document.querySelector(".dice").style.display = "none";

// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";

// callback function a function that calls another function
// anonymous function -> unnamed function
document.querySelector(".btn-roll").addEventListener("click", function () {
	if (gamePlaying) {
		// 1. Random number
		// d6 -> random * highest number + 1
		var dice = Math.floor(Math.random() * 6) + 1;
		// console.log(dice);

		// 2. Display the result
		var diceDOM = document.querySelector(".dice");
		diceDOM.style.display = "block";
		diceDOM.src = "dice-" + dice + ".png";

		// 3. Update the round score IF the rolled number was NOT 1
		if (dice !== 1) {
			// Add score
			roundScore += dice;
			document.querySelector("#current-" + activePlayer).textContent = roundScore;
		} else {
			// Next player
			nextPlayer();
		}
	}
});

// hold button
document.querySelector(".btn-hold").addEventListener("click", function () {
	if (gamePlaying) {
		// add current score to player's global score
		scores[activePlayer] += roundScore;
		// update the UI
		document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

		// check if player won the game
		if (scores[activePlayer] >= 20) {
			document.querySelector("#name-" + activePlayer).textContent = "Winner!";
			document.querySelector(".dice").style.display = "none";
			document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
			document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
			gamePlaying = false;
		} else {
			// switch players
			nextPlayer();
		}
	}
});

function nextPlayer() {
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	// reset round scores
	roundScore = 0;
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";

	// change "active" player
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");

	// hide dice on new round
	document.querySelector(".dice").style.display = "none";
}

// new game
// instead of an anon func, pass in a callback to the init function
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.querySelector(".dice").style.display = "none";

	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	// reset winner displays
	document.getElementById("name-0").textContent = "Player 1";
	document.getElementById("name-1").textContent = "Player 2";
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");
	document.querySelector(".player-1-panel").classList.remove("active");
}
