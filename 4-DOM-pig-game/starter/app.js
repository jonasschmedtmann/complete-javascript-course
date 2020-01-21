/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/









// First DOM Access and Manipulation, LESSON 18
// 1. declare variables
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function() {
    // Do something here
    //  Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //  Display the result, we set the display to none
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    //  update the dice image src to the dice number rolled
    diceDOM.src = 'dice-' + dice + '.png';
    

  // LESSON 19 Events and Event Handling (instruction orders continue from lesson 18)  

    //  Update the round score IF the rolled number was NOT a 1 (!== means it doesnt do type coercion, != does)
    if (dice !== 1) {
        // add score
        roundScore += dice; // roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if activePlayer = 0 then activePlayer should = 1, else activePlayer = 0
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // // Removing classes
            // document.querySelector('.player-0-panel').classList.remove('active');

        // // Add a class
            // document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
    }
});


// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';
// var x = document.querySelector('#score-0').textContent; 





