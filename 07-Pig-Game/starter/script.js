'use strict';

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

const totalScores = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');

let currentScore0 = 0;
    document.querySelector('#current--0').textContent = currentScore0;
let totalScore0 = 0;
    document.querySelector('#score--0').textContent = totalScore0;
let currentScore1 = 0;
    document.querySelector('#current--1').textContent = currentScore1;
let totalScore1 = 0;
    document.querySelector('#score--1').textContent = totalScore1;

const image = document.querySelector('.dice');
let currentPlayer = "player1"; 

console.log(currentScore0, currentScore1, totalScore0, totalScore1);

function resetScores() {
    console.log("new game");
    currentScores.forEach((currentScore) => currentScore.textContent = 0);
    totalScores.forEach((totalScore) => totalScore.textContent = 0);
    image.hidden = true;
    currentPlayer = "player1";
}

function play() {
    const number = Math.ceil(Math.random() * 6);
    switch (number) {
        case 1:
            image.src = "dice-1.png";
            break;
        case 2:
            image.src = "dice-2.png";
            break;
        case 3:
            image.src = "dice-3.png";
            break;
        case 4:
            image.src = "dice-4.png";
            break;
        case 5:
            image.src = "dice-5.png";
            break;
        case 6:
            image.src = "dice-6.png";
            break;
    }
    image.hidden = false;
    if (currentPlayer === "player1") {
        console.log("player1", currentScore0, number);
        currentScore0 += number;
        console.log(currentScore0);
        document.querySelector('#current--0').textContent = currentScore0;
    } else {
        currentScore1 += number;
    }
}

function addToTotal() {
    
}

newGame.addEventListener('click', resetScores);
rollDice.addEventListener('click', play);
hold.addEventListener('click', addToTotal)


