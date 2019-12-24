/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
Additional rules : 
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
*/

var scores, currentScore, activePlayer, gamePlaying;
var totalScore0,totalScore1;
var current0,current1;
var prevDiceNum;
var diceDOM = document.querySelector('.dice');
var winScore, input;

function initialize(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    prevDiceNum = 0;
    winScore = 0;
    

    //Initally hiding the dice
    document.querySelector('.dice').style.display = 'none';

    //Initalizing Total Scores at the begining to ZERO
    totalScore0 = document.querySelector('#score-0');
    totalScore1 = document.querySelector('#score-1');
    totalScore0.innerHTML = 0;
    totalScore1.innerHTML = 0;
    
    //Initalizing Round Scores at the begining to ZERO
    current0 = document.querySelector('#current-0') ;
    current1 = document.querySelector('#current-1') ;
    current0.innerHTML = 0;
    current1.innerHTML = 0;

    //When new game button is clicked 'Winner' message should be removed, the following lines does that
    document.querySelector('#name-0').textContent = '';   
    document.querySelector('#name-1').textContent = '';  

    //Removing winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //Adding 'active' class to current activePlayer
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    
    // winScore = setWinScore();
    //Default value
    input = document.querySelector('.final-score').value = 100;
}

initialize();


document.querySelector('.btn-new').addEventListener('click', function () {
    initialize();
});

//Roll Dice Button Event listener
document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying){
        // while(!winScore){
        //     setWinScore();
        // }
        //1. Rolling a dice
        var dice = Math.floor( Math.random()  * 6 ) + 1;
        // dice = 6;
        console.log("Current Dice number " + dice);
        //2. Chnage the dice image
        diceDOM.src = 'dice-' + dice + '.png'

        //3. Display the dice
        diceDOM.style.display = 'block';

        
        if(dice === prevDiceNum === 6){
            scores[activePlayer] = 0;
            nextPlayer();
        }//4. Calculating round score if the current dice number is NOT 1
        else if(dice !== 1){
            
            roundScore += dice; 
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            prevDiceNum = dice;
        }
        else{//Calculating round score if the current dice number IS 1
  
            nextPlayer();
            // // Below logic is refactored into nextPlayer() function
            // // If  the current dice number IS 1
            // roundScore = 0;

            // //Making round scores of both the players to ZERO
            // current0.innerHTML=0; 
            // current1.innerHTML = 0;
            
            // //Making current active player as non-active
            // document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

            // //Changing active player 
            // activePlayer = activePlayer=== 0 ? 1 : 0;
            
            // //Making current active player as active
            // document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

            // //Hiding dice 
            // //diceDOM.style.display = 'none';
        }//end of else block
     
    }    

 })


//Hold Dice Button Event Listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying ){

        // while(!winScore){
        //     setWinScore();
        // }
        // 
        
        scores[activePlayer] += roundScore;
        totalScore0.innerHTML = scores[0];
        totalScore1.innerHTML = scores[1];
        input = document.querySelector('.final-score').value;
        if(scores[activePlayer] > input - 1 ){
            diceDOM.style.display = 'none';
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';   
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            current0.innerHTML = current1.innerHTML = roundScore = 0;
            gamePlaying = false;
            input = 0;
        } else {
            nextPlayer();
        }
        // document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        // if (activePlayer === 0){
        //     totalScore0.innerHTML = String(Number(totalScore0.innerHTML) + Number(roundScore)); 
        //      current0.innerHTML = 0;
        //      activePlayer = 1;         
        // } else {
        //     totalScore1.innerHTML = String (Number(totalScore1.innerHTML) + Number(roundScore));
        //     current1.innerHTML = 0;
        //     activePlayer = 0;
        // }



        // if(Number(totalScore0.innerHTML) > 99 ){
        //     alert("Player 0 won");
        //     document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        //     initialize();
        //     document.querySelector('.player-0-panel').classList.toggle('active');  
        // } else if(Number(totalScore1.innerHTML) > 99){
        //     alert("Player 1 won");
        //     initialize();
        //     document.querySelector('.player-1-panel').classList.toggle('active');
        // } else{
        //     roundScore = 0;
        //     document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');      
        // }
        // document.querySelector('.dice').style.display = 'none'; 
    }
 });

function nextPlayer (){
    prevDiceNum = 0;    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    current0.innerHTML = current1.innerHTML = roundScore = 0;
}

function setWinScore() {
    winScore = Number (window.prompt("Please enter the winning score number above 1 : "));
    if(winScore < 2 ){
        setWinScore()
    }
    console.log("Winning score " + winScore + " Type of winScore " + typeof winScore)
}