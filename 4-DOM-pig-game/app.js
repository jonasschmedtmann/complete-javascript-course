/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, end, winningScore, lastRoll1, lastRoll2;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(end){
        alert("Please Start a New Game");
        return;
    }

    var dice1 = Math.floor(Math.random() * 6) + 1; 
    var dice2 = Math.floor(Math.random() * 6) + 1; 
    
    var dice1DOM = document.querySelector('.dice1');
    var dice2DOM = document.querySelector('.dice2');
    dice1DOM.style.display = 'block';
    dice1DOM.src = 'dice-' + dice1 + '.png';
    dice2DOM.style.display = 'block';
    dice2DOM.src = 'dice-' + dice2 + '.png';

    if((dice1 === 1) || (dice2 === 1)){
        document.querySelector("#current-" + activePlayer).textContent = 0;
        nextPlayer();
    } else if(((dice1 === 6) || (dice2 === 6)) && ((lastRoll1) || (lastRoll2 == 6))){
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer();
    } else {
        roundScore += (dice1 + dice2);
        if((scores[activePlayer] + roundScore) >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('#score-' + activePlayer).textContent = (scores[activePlayer] + roundScore);      
            document.querySelector("#current-" + activePlayer).textContent = 0;
            end = true;
        } else {
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            lastRoll1 = dice1
            lastRoll2 = dice2;
        }
    }
});

document.querySelector(".btn-hold").addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-"+ activePlayer).textContent = scores[activePlayer];
    nextPlayer();
    roundScore = 0;
});

document.querySelector(".final-score").addEventListener('input', function() {
    init();
});

document.querySelector(".btn-new").addEventListener('click', init);

function init(){
    winningScore = document.querySelector(".final-score").value;
    if(winningScore == false){
        winningScore = 100;
    }
    console.log("Winning Score: " + winningScore);
    end = false;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    activePlayer = Math.floor(Math.random() * 2);
    roundScore = 0;
    scores = [0, 0];
    lastRoll = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

function nextPlayer(){
    roundScore = 0;
    lastRoll1 = 0;
    lastRoll2 = 0;
    document.querySelector("#current-"+ activePlayer).textContent = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    activePlayer = (activePlayer === 0 ? 1 : 0);
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
}

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
