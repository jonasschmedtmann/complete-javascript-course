'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*30)+1;
let score = 20,highScore =0;
// Display message function 

const displayMessage = function(message){
   document.querySelector('.message').textContent = message;
};
//Added display number function expression
const displayNumber = function(){
    document.querySelector('.number').textContent = secretNumber;
};
//Added display score function expression
const displayScore = function(score){
   document.querySelector('.score').textContent = score;

};

//guess
document.querySelector('.check').addEventListener('click',function(){
   
    const guess = Number(document.querySelector('.guess').value);
     //no number
     if(!guess){
        displayMessage('No Number');
        displayNumber();
     }
     // when player wins
     else if(guess === secretNumber){
        displayMessage('Correct Number !!');
        displayNumber();
        score++;
        displayScore( score);
        document.querySelector('body').style.backgroundColor ='#66CD00';
        if(score> highScore)
           highScore = score;
           document.querySelector('.highscore').textContent = highScore;
     }
     // when player guess too high
     else if(guess !== secretNumber){
        if(score >1){
          // document.querySelector('.message').textContent = (guess > secretNumber ? 'Too High' : 'Too Low');
          displayMessage (guess > secretNumber ? 'Too High' : 'Too Low');
          displayNumber();
           score --;
           displayScore( score);
        }
        else{
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor ='#FF0000	';
        }
     }
     // when player guess wrong guess
     else {
        if(score >1){
            displayMessage('Wrong Guess ');
            displayNumber();
            score--;
            displayScore( score);
        }
        else{
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
     }

    });

    // when clicked on Again button

document.querySelector('.again').addEventListener('click',function(){
  
      secretNumber = Math.trunc(Math.random()*30)+1;
      //document.querySelector('.highscore').textContent= Number(document.querySelector('.highscore').textContent) + score;
      document.querySelector('.score').textContent = 20;
      displayMessage('Start guessing...');
      document.querySelector('.number').textContent = "?";
      document.querySelector('.guess').value = "0";
      document.querySelector('body').style.backgroundColor ='#222';
   }
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
