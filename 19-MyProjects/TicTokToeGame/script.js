// use strict mode
"use strict";
// get all cells
/*
 * declare a board array with nine empty strings
 * define the function to check winning conditions for tic tac toe game
 * define a fucntion to handle click events
 * define the symbols for players
 */
currentPlayer = "X";
const cell = document.querySelectorAll(".cell");
console.log(cell);
// declare a board array with nine empty strings
const board = [];
// loop through all cells
for (let i = 0; i < cell.length; i++) {
  // create an empty string
  board[i] = "";
}

// add event listener to each cell
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", handleClick);
}

function handleClick(event) {}
