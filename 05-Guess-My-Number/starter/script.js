'use strict';

/*
// with JS we select the elements in the HTML file BASED ON THE CLASSES

// The HTML file contains the classes

// A little bit like we can select elements in CSS we can do the same
// in JS

// how to selec elements from html file with JS

console.log(document.querySelector('.message').textContent);

// querySelector is a method that is available on the document OBJECT
// we need to pass in a selector for that method
// THIS SELECTOR IS EXACTLY THE SAME SELECTOR THAT WE WOULD USE IN CSS -
// use the . # etc just like we would do if CSS

// IF THE ELEMENT WE WANT TO SELECT IS A CLASS WE USE .

// GETTING THE TEXT: .textContent
// THE RESULT OF THIS QUERYSELECTOR METHOD IS GONNA BE AN ELEMENT AND THEN ON THAT ELEMENT WE CAN READ THE TEXTCONTENT PROPERTY
// WHEN WE HAVE MULTIPLE . OPERATORS THEY ARE EXECUTED FROM LEFT TO RIGHT
// WHAT IS BEFORE THE LAST DOT WILL BE EXECUTED AND REPLACED AND THE OTHER . WILL BE APPLYED TO IT.;
// SO WE CAN READ THE TEXT CONTENT USING ANOTHER DOT

// --------------------------------------------

// ---> WHATS DOM AND DOM MANIPULATION???

// we're going to make JS interact with a webpage

// AND THE TECHNICAL TERM FOR THAT IS DOING DOM MANIPULATION

// BESIDES GETTING THE TEXT CONTENT WE CAN ALSO SET THE CONTENT OF THE ELEMENT

document.querySelector('.message').textContent = 'Correct number';
console.log(document.querySelector('.message').textContent);

//WE NEED TO WRITE TEXT CONTENT BECAUSE WE CANNOT SET THE ENTIRE ELEMENT BEACUSE THE ELEMENT HAS WAY MORE THAN JUST THE CONTENT

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

//console.log(document.querySelector('.guess').value);
// WITH THE INPUT VIEW TO GET THE INPUT PROPERTY WE USE THE VALUE PROPERTY
// AND WE CAN ALSO USE TO SET THE VALUE, TO MANIPULATE THIS ELEMENT
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// we need to put a function alongisde the method addeventlistener, and it's a special kind of function.
//that's because aas a second argument, it expects this event handler function - in the second argument we need to pass a function to be what the code does qhen we click the buttom
// IT'S POSSIBLE BECAUSE A FUNCTION IS JUST A VALUE - THEN WE CAN ALSO PASS IT INTO ANOTHER FUNCTION AS AN ARGUMENT
// just like any other value, like a string or a number
// THE FUNCTION IS THE EVENT HANDLER
// WE DID NOT CALL THE FUCNTION IT WILL BE JS WHO WILL CALL THIS FUNCTION AS SOON AS THE EVENT HAPPENS

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; // this way the first score is always going to be the highscore
// display the secret number for development:
//document.querySelector('.number').textContent = secretNumber;
// class name is number

// MATH IS BASICALLY AN OBJECT THAT JS GIVES US AND ON THERE, WE HAVE A LOT OF DIFFERENT METHODS AND RANDOM IS ONE OF THEM
// AND IT GIVES US A NUMBER BETWEEN ZERO AND ONE

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // THIS IS A STATE VARIABLE, BECAUSE THIS SCORE IS PART OF THE SO-CALLED APPLICATION STATE WHICH IS BASICALLY ALL THE DATA THAT IS RELEVANT TO THE APPLICATION
  // WE CAN SAY THAT THE SECRETNUMBER VARIABLE IS ALSO PART OF THE STATE OF APPLICATION
  // IN CASE THERE IS NO GUESS

  // WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem'; // number plus the unit

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--; // IS THE SAME AS SCORE--
      document.querySelector('.score').textContent = score;
      console.log(score);
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--; // IS THE SAME AS SCORE--
      document.querySelector('.score').textContent = score;
      console.log(score);
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem';
});

// CHALLENGE'S ANSWER:
// FIRST CHANGE CONST SECRETNUMBER TO LET
// score = 20
// secretNumber =  Math.trunc(Math.random() * 20) + 1;

// IF THE GUESS IS GREATER THAN THE NUMBER

// THE OUTPUT IS ZERO CAUSE ZERO IS A FALSE VALUE
// THAT WAS THE FIRST SCENARIO
// THE FIRST SCENARIO IS ALWAYS TO ASSUME THAT THERE IS ACTUALLY NO INPUT
// THE INPUT VALUE FROM THE USER WILL BE A STRING ALWAYS
// THIS FUNCTION WILL NOT BE CALLED IMMEDIATELY ONCE THE SCRIPT IS EXECUTED
// THIS FUNCTION WILL ONLY BE CALLED AS SOON AS THE EVENT HAPPENS
// IN ORDER TO COMPARE THE NUMBERS, WE NEED TO CONVERT THE RESDULT OF GUESS TO A NUMBER

// USUALLY IN AN APPLICATION LIKE THIS WHICH HAS AN INPUT VALUE FROM THE USER,
// THE FIRST THING TO DO IS TO CHECK IF THERE ACTUALLY IS A VALUE
// AND IF THERE IS NO VALUE THEN WE CAN PRINT SOMETHING TO THE CONSOLE AS A RESPONSE
