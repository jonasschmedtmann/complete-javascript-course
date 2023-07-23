"use strict";
/*
function logger() {
  console.log("hello world");
}

///////////
//These values don't return anything they just log to the developer console
logger();
logger();
logger();
///////////

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//////////////
//These functions actually return something
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
//////////////

//Functions allow use to write more maintable code because they let us skip writing the same code again and again

//Core developer principle DRY
//*Don't repeat yourself*

const num = Number("23");
*/
////////////
// Different function types

/*
const age1 = calcAge1(1991);
// console.log(age1);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
//Previous function is called Function Declarations

// below is what's call an "anonymous" function
const calcAge2 = function (birthYear) {
  return 2027 - birthYear;
}; // this variable holds the function
//Functions are not a type, but they are a a value
// if they are a value we can store it in a variable

const age2 = calcAge2(1991);

console.log(age1, age1);

//Function declarations vs expressions
//we can call declarations before they are deefined in the code
// This cannot be done with the expression
//This happens because of a process called hoisting

Question: which type of function should I call?
Often times it's a matter of personal preference
Jonas prefers expressions becaause it forces him to define all of the functions at the beginning, which makes for cleaner code
But if you prefer declarations then just use that

However you need to know both.
*/

/////////////////////
// Arrow functions
// Shorter and faster to write

// const calcAGe2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// Arrow function
// easier and faster to write
// Return happens implicilty (ie you don't need to write the return keyword, good for single commands)
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// These functions get more complicated with more parameters and more lines of code

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
  // Return can only be ommitted on one line functions
};

console.log(yearsUntilRetirement(1991, "john"));
console.log(yearsUntilRetirement(1980, "bob"));
*/

// as you add more code and more parameters you begin to lose the advantage of arrow functions

// Same question as earlier, when do i use which function
// Arrow functions do not get a "this" keyword
// more about "this" later

/////////////////
// Calling functions inside of eachother
// food processing example

// Function for cutting fruit into multiple pieces

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));
