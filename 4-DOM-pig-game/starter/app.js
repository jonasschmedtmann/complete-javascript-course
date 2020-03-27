/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying, prevRoll,prevRollTwo, winningScore;

init();


//to selecet elements in the DOM use querySelecotr on the document object then add the textContent method to change the text inside. The method textContent can only change plain text NOT HTML. below is a setter

//var dice;
//document.querySelector('#current-' + activePlayer).textContent = dice;

//using the innerHTML method on the DOM object allows changing the html of the document. When doing so you need to place new html as a string.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//Using a variable to store the content  of an html element allows you to read the contents, below is a getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//to change the style of an element use the style method along with the property you want to change.
//setting the dice to not display to start the game
// document.querySelector('.dice').style.display = 'none';

// function button(){
//     //TODO
// }

//callback function used below, it is a function that is used as an argument to the event listener, a callback function is a function that is called by anther function; notice that when the function is the parameter you do not need the parens only the name of the fucntion
//document.querySelector('.btn-roll').addEventListener('click',button);

//if you wanted to just write the function as the parameter you could do that and that is called an anonymous function; anonymous functions do not have a name and cannot be reused; example below

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        //Random number
        //Math.floor returns an integer, Math.random returns a random number between 0-1
        var dice = Math.floor(Math.random()*6) + 1;
        var diceTwo = Math.floor(Math.random()*6) + 1;

        //display result
        //set a variable to reuse the dice element from the dom
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        var diceTwoDOM = document.querySelector('.dice2');
        diceTwoDOM.style.display = 'block';
        
        //change the image in the dom for the dice
        diceDOM.src = 'dice-' + dice + '.png';
        diceTwoDOM.src = 'dice-'+ diceTwo + '.png';        
        //update round score IF the rolled number was not a 1
        if ((prevRoll === 6 && prevRollTwo === 6) && (dice === 6 && diceTwo === 6)) {
            roundScore = 0;
            updateScore(true);
            nextPlayer();
        }
        else if (dice !== 1 && diceTwo !== 1) {
            //add score
            roundScore = roundScore + dice + diceTwo;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            prevRoll = dice;
            prevRollTwo = diceTwo;
        }else {
            //next player
            nextPlayer();
        }
    };
});

//undefined, 0, null or "" are coerced to false
//anything else is coerced to true

//updates score, requires true or false to remove global score for player or not
function updateScore(removeScore){
    if (removeScore){
        scores[activePlayer] = 0;
    } else {
        //update UI
        scores[activePlayer] += roundScore;
    }
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
};

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
        //add current score to global score
        updateScore(false);
        //check if player won game
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else { 
            //next player   
            nextPlayer();
        }
    }
});

//using a callback function below when the new game buttong is pressed
document.querySelector('.btn-new').addEventListener('click', init);

//initialization script

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    winningScore = 20;
    //clear input value on ui
    document.getElementById('custom-score').value = '';
    //state variable to control whether we want to play the game or not, basically shuts down the game when not playing
    gamePlaying = true;
    //set custom score for game by user input
    document.getElementById('bt-score').addEventListener('click', function(){
        var scoreToWin = document.getElementById('custom-score').value; 
        if (scoreToWin > 0){
            winningScore = scoreToWin;
        }
    });

        //when using getElementById you don not need the # symbol like you do for queryselector
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    prevRoll = 0;
    prevRollTwo = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //classList method is used to select classes and the remove method is used to remove a class, you need to pass in the name of the class you want to remove
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    //when you want to go back and forth between adding and removing a class it's better to use the toggle method
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/