/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// CHALLENGE 1 - a player loses his ENTIRE score when he rolls two 6's in a row. After that, it is also the next player's turn. HINT: ALWAYS SAVE THE PREVIOUS DICE ROLL IN A SEPARATE VARIABLE




var scores, roundScore, activePlayer, gamePlaying, previousDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        // Do something here
        //  Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //  Display the result, we set the display to none
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        //  update the dice image src to the dice number rolled
        diceDOM.src = 'dice-' + dice + '.png';
        

        // we also want a player to lose his entire score when he rolls two 6's in a row
        if (dice === 6 && previousDice === 6) {
            // player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            // add score
            roundScore += dice; // roundScore = roundScore + dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
        // new variable to save the previous dice roll inside of
        previousDice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;

document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
 if (scores[activePlayer] >= 20){
     document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
     document.querySelector('.dice').classList.toggle = 'none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     gamePlaying = false;

 } else {
     nextPlayer();
 }
})



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

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
    document.querySelector('.player-0-panel').classList.add('active'); 
    document.querySelector('.player-1-panel').classList.remove('active');
}

