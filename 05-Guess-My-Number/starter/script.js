'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let bgcolor = "#222";
let hs = 0;


function handleClick() {
    // add another if statement to check if the player has already lost or won , this should just return
    if(bgcolor === "#AA4A44"||bgcolor === "#60b347"){
        document.querySelector('.message').textContent = "click on play again!";
        return;
    }
    let guess = Number(document.querySelector('.guess').value);
    if(document.querySelector('.guess').value === ""){
        document.querySelector('.message').textContent = "no number has been entered";
    }
    else if(guess<1 || guess>20){
        document.querySelector('.message').textContent = "enter a valid number";
    }
    else{
        if(guess === secretNumber){

            if(score>hs){
                hs = score;
                document.querySelector('.highscore').textContent = score;
            }
            document.querySelector('.message').textContent = "Yay, u win";
            bgcolor = '#60b347';
            document.querySelector('body').style.
            backgroundColor = bgcolor;
            document.querySelector('.number').textContent = secretNumber;


        }
        else if(guess>secretNumber){
            if(score === 1){
                document.querySelector('.message').textContent = "you loose, Try again";
                document.querySelector('.number').textContent = secretNumber;
                bgcolor = "#AA4A44";
                document.querySelector('body').style.
                backgroundColor = bgcolor;
                document.querySelector('.score').textContent = 0;
                return;
            }
            score --;
            document.querySelector('.message').textContent = "wrong,Too high! Guess again";
            document.querySelector('.score').textContent = score;

        }
        else{
            if(score === 1){
                document.querySelector('.message').textContent = "you loose, Try again";
                document.querySelector('.number').textContent = secretNumber;
                bgcolor = "#AA4A44";
                document.querySelector('body').style.
                backgroundColor = bgcolor;
                document.querySelector('.score').textContent = 0;
                return;
            }
            score --;
            document.querySelector('.message').textContent = "wrong,Too Low! Guess again"
            document.querySelector('.score').textContent = score;


        }

    
    }
  }
  
  document.querySelector('.check').addEventListener("click", handleClick);
  document.querySelector('.again').addEventListener("click", function() {
    document.querySelector('.message').textContent = "Start guessing...";
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    bgcolor = "#222";
    document.querySelector('body').style.
                backgroundColor = bgcolor;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = ""; 

    
  });