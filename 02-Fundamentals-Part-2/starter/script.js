"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function logger() {
//   console.log("My name is Jonas");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// //console.log(fruitProcessor(5, 0)); // directly print

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// Function declaration

//const age1 = calcAge1(1991);  // hoisting - can declare variable before function
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// * Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear; // arrow
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     return -1;
//     console.log(`${firstName} retires in ${retirement} years`);
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(1, 2, 3));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No teams wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
