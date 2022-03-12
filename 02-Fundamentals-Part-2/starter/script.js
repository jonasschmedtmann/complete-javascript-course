"use strict"; // All you have to do to activate it for the entire script. Has to be the first line, however.
// You can also use it for a specific function or block, but you might as well use it for the whole script.
// Makes it easier to avoid accidental errors because it forbids us to do certain things and shows errors that it otherwise would fail silently

// One of the most important changes strict mode uses
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // WITHOUT strict mode, this would not show the error
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio"; // Yields an error because interface is a reserved word that might be implemented in the future
const private = 534; // Same thing. Strict mode reserves these words so we can't use them as variables

// ----------------------------------------------------------------

// A function is code that can be used over and over again

// You can think of functions as a food processor: it takes something and returns something else
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
  // return can return any value from the function. That value can then be used anywhere in the code
}

// fruitProcessor(5, 0); // Logs just 5 0
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Logs the full "Juice with 5 apples and 0 oranges."
// console.log(fruitProcessor(5, 0)); // Logs the same thing, just doesn't create a variable

// The coding principle DRY: Don't Repeat Yourself

function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  // return age;
  return 2037 - birthYear; // A condensed version of above
}
const age1 = calcAge1(1991);

// Arguments and parameters aren't interchangeable but still pretty close

// ----------------------------------------------------------------

// Function Declarations vs. Expressions

// Function declaration
function calcAge2(birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

// Function expression
const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};
const age3 = calcAge3(1991);

console.log(age2, age3);

// A big difference is that declarations can be called before they're defined in the code, although that may not be a great idea in some cases. You can prefer one over the other but both have their place in JavaScript

// Arrow functions are a special form of function expression which are shorter and therefore faster to write. However, they do not replace all other functions

// Arrow function version of above
const calcAge4 = (birthYear) => 2037 - birthYear;
const age4 = calcAge4(1991);
console.log(age4);

// Function declaration - function that can be used before it is delcared
// Function expression - essentially a function VALUE stored in a variable
// Arrow function - Great for quick one-line functions. Has no 'this' keyword
// Three different ways of writing functions, but they all work in a similar way: receive data, transform data, and then output data

// ----------------------------------------------------------------
// Coding Challenge #1

const calcAverage = (score1, score2, score3, score4, score5, score6) => {
  const avgDolphins = (score1 + score2 + score3) / 3;
  const avgKoalas = (score4 + score5 + score6) / 3;
  console.log(`Average Dolphins score: ${avgDolphins}`);
  console.log(`Average Koalas score: ${avgKoalas}`);
  checkWinner(avgDolphins, avgKoalas);
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("NO ONE WINS");
  }
};

console.log(calcAverage(44, 23, 71, 65, 54, 59));
console.log(calcAverage(85, 54, 41, 23, 34, 27));

// -------------------------------- Answer --------------------------------

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// ----------------------------------------------------------------

// ----------------------------------------------------------------
