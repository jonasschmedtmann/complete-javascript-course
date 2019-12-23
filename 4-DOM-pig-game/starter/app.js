/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, currentScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;


//Initally hiding the dice
 document.querySelector('.dice').style.display = 'none';

 //Initalizing Total Scores at the begining to ZERO
 var totalScore0 = document.querySelector('#score-0').innerHTML = 0;
 var totalScore1 = document.querySelector('#score-1').innerHTML = 0;

//Initalizing Round Scores at the begining to ZERO
 var current0 = document.querySelector('#current-0') ;
 var current1 = document.querySelector('#current-1') ;
 current0.innerHTML = 0;
 current1.innerHTML = 0;

//Roll Dice Button Event listener
 document.querySelector('.btn-roll').addEventListener('click', function () {

    //1. Rolling a dice
    var dice = Math.floor( Math.random()  * 6 ) + 1;

    //2. Display the dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';

    //3. Chnage the dice image
    diceDOM.src = 'dice-' + dice + '.png'

    //4. Calculating round score if the current dice number is NOT 1
    if(dice !== 1){
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
        roundScore = 0;

        //Making round scores of both the players to ZERO
        current0.innerHTML=0; 
        current1.innerHTML = 0;
        
        //Making current active player as non-active
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        //Changing active player 
        activePlayer = activePlayer=== 0 ? 1 : 0;
        
        //Making current active player as active
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

        //Hiding dice 
        diceDOM.style.display = 'none';
    }

 })



 // document.querySelector('#current-' + activePlayer).textContent = dice;
 
 //  var x = document.querySelector('#score-0').textContent;
 //  console.log(x);