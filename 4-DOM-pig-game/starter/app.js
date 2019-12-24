/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, currentScore, activePlayer;
var totalScore0,totalScore1;
var current0,current1;
var diceDOM = document.querySelector('.dice');

function initialize(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

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
}

initialize();


document.querySelector('.btn-new').addEventListener('click', function () {
    initialize();
});

//Roll Dice Button Event listener
document.querySelector('.btn-roll').addEventListener('click', function () {

    //1. Rolling a dice
    var dice = Math.floor( Math.random()  * 6 ) + 1;

    //2. Display the dice
    
    diceDOM.style.display = 'block';

    //3. Chnage the dice image
    diceDOM.src = 'dice-' + dice + '.png'

    //4. Calculating round score if the current dice number is NOT 1
    if(dice !== 1){
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
        // If  the current dice number IS 1
        roundScore = 0;

        //Making round scores of both the players to ZERO
        current0.innerHTML=0; 
        current1.innerHTML = 0;
        
        //Making current active player as non-active
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

        //Changing active player 
        activePlayer = activePlayer=== 0 ? 1 : 0;
        
        //Making current active player as active
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

        //Hiding dice 
        //diceDOM.style.display = 'none';
    }

 })

function nextPlayer (){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    current0.innerHTML = current1.innerHTML = roundScore = 0;
    totalScore0.innerHTML = scores[0];
    totalScore1.innerHTML = scores[1];


}
//Hold Dice Button Event Listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[activePlayer] += roundScore;
    
    if(scores[activePlayer] > 9){
        diceDOM.style.display = 'none';
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';   
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
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
 });


