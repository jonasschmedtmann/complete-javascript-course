'use strict';

const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const currentScore = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const userGuess = document.querySelector(".guess");
const message = document.querySelector(".message");

let numToGuess = Math.floor((Math.random() * 20)+1);

const generateRandomNum = () => {
    numToGuess = Math.floor((Math.random() * 20)+1);
    return numToGuess;
}

checkBtn.addEventListener("click", function(){
    if(!userGuess.value){
        message.innerHTML = "No guess detected!";
    } else if (userGuess.value < numToGuess && Number(currentScore.innerHTML)){
        message.innerHTML = "Too Low!";
        if(Number(currentScore.innerHTML) > 0){
            currentScore.innerHTML = Number(currentScore.innerHTML) - 1;
        }
    } else if (userGuess.value > numToGuess){
        message.innerHTML = "Too High!";
        if(Number(currentScore.innerHTML) > 0){
            currentScore.innerHTML = Number(currentScore.innerHTML) - 1;
        }
    } else if (userGuess.value == numToGuess){
        message.innerHTML = "You are correct!";
        document.body.style.backgroundColor = "#60b347";
        if(Number(currentScore.innerHTML) > Number(highscore.innerHTML)){
            highscore.innerHTML = currentScore.innerHTML;
        }
        
    } else {
        message.innerHTML = "You lost...";
    }
});

againBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "#222";
    userGuess.value = "";
    currentScore.innerHTML = 20;
    message.innerHTML = "Start Guessing";
    generateRandomNum();
})



