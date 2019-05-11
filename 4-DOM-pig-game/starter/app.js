/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice)

document.querySelector('#current-' + activePlayer).textContent = dice; //This method will not allow HTML styling such as the accent in the method
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' //Commented out here

var x = document.querySelector('#score-1').textContent;
console.log(x)

document.querySelector('.dice').style.display = 'none';















