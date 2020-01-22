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

init();

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
        nextPlayer();
    }
});


// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';
// var x = document.querySelector('#score-0').textContent; 

// Implementing our 'Hold' function and the DRY Principle LESSON 20

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to players global score once we have clicked on the btn hold
    scores[activePlayer] += roundScore;

    // update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
 // check if player won game
 if (scores[activePlayer] >= 20){
     document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
     document.querySelector('.dice').classList.toggle = 'none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

 } else {
     // Next Player
     nextPlayer();
 }
})



function nextPlayer() {
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


// Creating a Game Initialization Function LESSON 21 

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active'); // removing and adding so we don't add 2 active classes, because then if we did want to remove later, we would have to remove twice. its like it stacks
    document.querySelector('.player-1-panel').classList.remove('active');
}
