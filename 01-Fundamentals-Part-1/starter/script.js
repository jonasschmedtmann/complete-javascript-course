/*
let js = 'amazing';
console.log(40+8+23-10);
console.log('Jonas');
console.log(23);

let firstName = "Bob";
console.log(firstName);

let name = 3;
console.log(name);

let country = "USA", continent = "North America", population = 35000;
console.log(country + " " + continent + " " + population);

let isIsland = true;
let language = "";

console.log(isIsland);

const LANGUAGE = "English";


let isFun = true;
console.log(isFun);
console.log(typeof true)
console.log(typeof isFun)
console.log(typeof 23)
console.log(typeof "Jonas")

isFun = "YES!";
console.log(typeof isFun);

let year;
console.log(year);

year = 1991;
console.log(year);

console.log(typeof null);


let age = 30;
const year = 1988;
// year = 2004;
console.log(year);

var job = 'programmer';
job = "teacher"
console.log(job);

lastName = 'Turgun';
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
// console.log(ageJonas);
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = "Shmidt";
console.log(firstName + ""+ lastName);

// Assignment operators
let x = 10+5;

x+= 10;
x *= 4;
x++;
x--;
console.log(x);
*/

// Comparison operators
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 -5);

let x, y;
x = y = 25-10-5;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas,ageSarah, averageAge)
*/

//let markHeight, markWeight, johnHeight, johnWeight;
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
/*
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2; 
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/

// Template literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job +'!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${firstName} and I like being a ${job} for ${year- birthYear} year old people`);

console.log(`Who is doing whatever?`);

console.log(`String with 
multiple 
lines`);
*/
/*
const age = 15;

if(age >= 18) {
console.log('Sarah can start driving license 🚗');
} else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. 🥹  Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000) {
       century = 20;
} else {
       century = 21;
}
console.log(century);
*/

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;
/*
const markBMI = markWeight / markHeight ** 2; 
const johnBMI = johnWeight / johnHeight ** 2;

console.log(`Mark ${markBMI}, John ${johnBMI}`);

if(markBMI > johnBMI) {
      console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
      console.log(`John's BMI ${johnBMI} is higher than ${markBMI}!`)
}
*/
/*
// Conversion and Coercion
const inputYear = '1991'
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(123));

// type coersion
console.log('I am ' + 23 + ' years old') // if there's tring in front + operator converts to string
console.log('23' - '10' - 3)
console.log('23' * '10')
console.log('23' / '10')

let n = '1' + 1; // '11'
n = n-1; // 11-1 = 10
console.log(n); // 10

// 2+3+4+'5' // '95'
// '10'-'4'-'3'-2+'5' // '15'
*/

//
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); // 1991 '1991'
// console.log(Number(inputYear) + 18); // 2009

// console.log(Number("Jonas")); // Nan
// console.log(typeof NaN); // number

// console.log(String(23), 23);

// *** type coercion
// console.log("I am " + 23 + " years old"); // + operator turns numbers into strings

// console.log("23" - "10" - 3); // - turns to number
// console.log("23" - "10" - 3); // 10 => - operator turns to number
// console.log("23" + "10" + 3); // 23103 => + operator turns to string
// console.log("23" * "2"); // 46 => * turns to number
// console.log("23" / "2"); // 11.5 => / turns to number

// let n = "1" + 1; // 11 => because + op turns to string
// n = n - 1; // 11 - 1 = 10 => - op turns to number

// Boolean
// 5 falsy values: 0 '', undefined, null, NaN

// console.log(Boolean(0)); // fasle
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true
// console.log(Boolean("")); // false

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// --- * Equality operator

// ===  strict equality operator - doesn't to type coercion, it will returns true only if both values are the same
// ===  loose equality operator- does type coercion, it will return true if 1 value is true

// 18 === 18; // true
// 18 === "18"; // false

// 18 == 18; // true
// 18 == "18"; // true

// const age = 18;
// if (age === 18) console.log("You just became an adult (strict)");

// if (age == 18) console.log("You just became an adult (loose)");

//const favorite = prompt("What's your favortie number?");

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 23) {
//   // '23' == 23
//   console.log("Cool! 23 is an amazing number!");
// }

// const favorite2 = Number(prompt("What's your favortie number?"));

// console.log(favorite2);
// console.log(typeof favorite2);

// if (favorite2 === 23) {
//   // '23' == 23
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite2 === 7) {
//   console.log("7 is also a cool number!");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favorite2 !== 23) console.log("Why not 23?");

// const hasDriversLisence = true; // A
// const hasGoodVision = false; // B
// console.log(hasDriversLisence && hasGoodVision);
// console.log(hasDriversLisence || hasGoodVision);
// console.log(!hasDriversLisence);

// if (hasDriversLisence && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = true; // C
// console.log((hasDriversLisence && hasGoodVision) || isTired);

// if (hasDriversLisence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// console.log(scoreDolphins);
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the trophy 🏆`);
// } else if (scoreDolphins < scoreKoalas) {
//   console.log(`Koalas win the trophy 🏆`);
// } else {
//   console.log(`Both win the trophy 🏆`);
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Dolphins win the trophy 🏆`);
// } else if (scoreDolphins < scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Koalas win the trophy 🏆`);
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log(`Both win the trophy 🏆`);
// } else {
//   console.log("No one wins the trophy  🥹");
// }

// const day = "myday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code exxamples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code exxamples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day");
// }

// Statement and Expressions

//Statement full - consists of expressions
// if (23 > 10) {
//   const str = "23 is bigger";
// }

// //Expression part of statement
// const name = "James";
// console.log(`I'm ${2023 - 1990} years old and my name is ${name}`);

// The condiditional operator - Ternary

// const age = 23;
// // age >= 18;
// // ? console.log(`I like to drink wine 🍷`)
// // : console.log("I like to drink water 💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = " water 💧";
// }
// console.log(drink2);

// // Template literal
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// Challenge #4
//const bill = 250;
// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// JS Versions - ES5, ES6
