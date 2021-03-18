"use strict";

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`);

// const interface = `audio`;

function logger() {
  console.log(`i printed`);
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 9);
console.log(appleJuice);
