/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //Need to have as a string bc it's html in javascript. Will parse as javascript unless in string since can't read html. 
// document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//this is to cause button to roll the dice
// function btn() {
//     //Do something here

// }
// btn(); //calls function

//document.querySelector('.btn-roll').addEventListener('click', btn); //addeventlistener is the callback function.  can also do anonymous function with funtion(). (can't use annonymous outside of this area.)
var scores, roundScore, activePlayer, dice, gamePlaying;
init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
    //1. Random number
    dice = Math.floor(Math.random() * 6) + 1;
    //2. Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    //3. Update total so long as not a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        //roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore; // Only shows the text as it is. 

    } else {
      nextPlayer();

    }
    } 
   
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
          //Add Current score to global score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
         //Next player
        nextPlayer();
    }
   
    }
      
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init); //Passing and not calling so that's why don't have the parenthases 

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; //style method. css property = css value. This line takes away the dice at the beginning when the page is originally loaded.

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

};
















