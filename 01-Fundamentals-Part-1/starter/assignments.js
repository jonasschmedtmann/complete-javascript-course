//JavaScript Fundamentals Part 1

"use strict";

console.log("------Values and Variables-------");
let country = "Canada";
let continent = "North America";
let population = 38781291;

console.log(country);
console.log(continent);
console.log(population);

console.log("------Data Types-------");
let isIsland = false;
// let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
// console.log(typeof language);

console.log("------Let Const Var-------");
const language = "Tagalog";
console.log(language);

console.log("------Basic Operators-------");
population /= 2;
++population;
console.log(population);
const avePopulation = 33000000;
console.log(avePopulation > population);
const description =
  "Protugal is in Europe, and its 11 million people speak portuguese";

console.log("------Coding Challenge #1-------");

function calculateBMI(mass, height) {
  return mass / height ** 2;
}

let mass;
let height;

//Test Data 1
// let markBMI = calculateBMI(78, 1.69);
// let johnBMI = calculateBMI(92, 1.95);

// console.log("Mark BMI: " + markBMI);
// console.log("John BMI: " + johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// //Test Data 2
// markBMI = calculateBMI(95, 1.88);
// johnBMI = calculateBMI(85, 1.76);

// console.log("Mark BMI: " + markBMI);
// console.log("John BMI: " + johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

console.log("------Coding Challenge #2-------");
//Test Data 1
let markBMI = calculateBMI(78, 1.69);
let johnBMI = calculateBMI(92, 1.95);

if (markBMI > johnBMI)
  console.log(`Mark BMI ${markBMI} is HIGHER than  John BMI: ${johnBMI}`);
else console.log(`Mark BMI ${markBMI} is LOWER than  John BMI: ${johnBMI}`);

//Test Data 2
markBMI = calculateBMI(95, 1.88);
johnBMI = calculateBMI(85, 1.76);

if (markBMI > johnBMI)
  console.log(`Mark BMI ${markBMI} is HIGHER than  John BMI: ${johnBMI}`);
else console.log(`Mark BMI ${markBMI} is LOWER than  John BMI: ${johnBMI}`);

console.log("------Coding Challenge #3-------");

function getAve(a, b, c) {
  return (a + b + c) / 3;
}

let dolphins = getAve(96, 108, 89);
let koala = getAve(88, 91, 110);

dolphins = getAve(97, 112, 101);
koala = getAve(109, 95, 123);

dolphins = getAve(97, 112, 101);
koala = getAve(109, 95, 106);

if (dolphins > koala) {
  console.log("Dolphins win");
} else if (koala > dolphins) {
  console.log("Koala win");
} else {
  console.log("Draw");
}

console.log("------Coding Challenge #4-------");

// tip 15% if bill >= 50 && <= 300
// if different then tip is 20%

const bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(tip);
