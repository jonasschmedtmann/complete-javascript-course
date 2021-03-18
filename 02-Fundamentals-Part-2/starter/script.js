// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriversLicense = true;
// // if (hasDriversLicense) console.log(`I can drive`);

// // const interface = `audio`;

// function logger() {
//   console.log(`i printed`);
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 9);
// console.log(appleJuice);

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge(1846);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1846);

// console.log(`This is function declaration ${age1}`);

// console.log(`This is function expression ${age1}`);

// // arrow functions
// (birthYear) => 2034 - birthYear;
// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(1843));

// const yearsUntilRetirement = (birthYear, firstname) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstname} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1990, "john"));

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  return `Juice with ${applePieces} pieces apples and ${orangePieces} pieces oranges`;
}

const cutPieces = (fruit) => fruit * 4;
console.log(fruitProcessor(2, 6));

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement} years`;
};
