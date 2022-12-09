/*
 ------------------------------------------------------------------declarinf vars
let js = "amazing";
if (js === "amazing") alert("JavaScript is da bomb");

40 + 8 + 23 - 10;

 variable types
let JavaScriptIsFun = true;
console.log(typeof JavaScriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log("Jonas");


let age = 31;
const birthyear = 1972;
console.log(birthyear);
// birthyear = 1973;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
*/
//-------------------------------setting strict mode

"use strict";

// let hasDriversLiscence = false;
// const passTest = true;

// if (passTest) hasDriversLiscence = true;
// if (hasDriversLiscence) console.log("I can drive");

// ------------------------------------- functions

// function logger() {
//     console.log("My name is Brad");
// }

// // calling, running or invoking a func
// logger();
// logger();
// logger();

// function fruitPrcessor(apples, oranges) {
//     const juice = `${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitPrcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitPrcessor(2, 4);
// console.log(appleOrangeJuice);



// // ------------------------------------------------------FUNCTION DECLARATIONS
// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge(1991);


// //  FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// // -----------------------------------------------------ARROW FUNCTIONS-----------------------------------------
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Brad"));


// -------------------------------------------FUNCTIONS CALLING FUNCTIONS INSIDE A FUNCTION
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitPrcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangeFruitPieces = cutFruitPieces(oranges);

//     const juice = `${applePieces} pieces of apple and ${orangeFruitPieces} pieces of orange`;
//     return juice;
// }

// // console.log(fruitPrcessor(2, 3));
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         return -1;
//     }
//     //return retirement;
//     //return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Brad"));
// console.log(yearsUntilRetirement(1970, "Bob"));

// --------------------------------------------------------- data structures

// ARRAY PLAY
// array expect expressions as parameters

// const friends = ['Ted', 'Luke', 'Ernest'];
// console.log(friends);

// const dates = new Array(1968, 1972, 2015);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Mike'
// console.log(friends[friends.length - 1]);
// console.log(friends);
// // const bradBio = ['Bradley', 'Seftel', 1973 - 1];

// // ---------- OR ---------------
// const fName = 'Bradley';
// const bradBio = [fName, 'Alexander', 'Seftel', 1973 - 1, 'Web Developer', friends];
// console.log(bradBio);


// --------------------- exercise
// const calcAge = function (birthYear) {
//     //console.log(birthYear);
//     return 2050 - birthYear;
// }

// const years = [1968, 1972, 2015];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// // arrays can also call funcs as they are an expresion
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);

//const friends = ['Ted', 'Luke', 'Ernest'];

// add elements
// const newLength = friends.push('Brad');

// console.log(friends);
// console.log(newLength);

// friends.unshift('Jon');
// console.log(friends)

// //remove elements
// const popped = friends.pop();
// console.log(friends)
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Ted'));
// console.log(friends.includes('Luke'));

// ---------------------------------------------------------OBJECTS ------------
// const brad = {
//     firstName: 'Brad',
//     lastName: 'Seftel',
//     birthYear: 1972,
//     job: 'Web Developer',
//     friends: ['Ted', 'Luke', 'Ernest'],
//     hasDriversLiscence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return 2037 - this.age;
//     }
// }

// brad.calcAge();
// console.log(brad.age);

// console.log(brad.lastName);
// console.log(brad['lastName']);

// const nameKey = 'Name';
// console.log(brad['first' + nameKey]);
// console.log(brad['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Brad? Please choose either First Name, Last Name, age, job or friends.');

// if (brad[interestedIn]) {
//     console.log(brad[interestedIn]);
// } else {
//     console.log('Wrong request');
// }

// brad.location = 'Canada';
// brad.website = 'www.brad-seftel.com';
// console.log(brad);

// ---------------------------------------------challenge
// - construst the following string without hard coding any part
// Brad has three friends, and his best friend is called Luke

// console.log(` ${brad["firstName"]} has ${brad.friends.length} friends and his best friends name is ${brad.friends[1]} `);


// -------------------------------------------- Challenge
// construct the string "Brad is a 50 year old web developer and has a valid drivers liscence"
/*
const brad = {
    firstName: 'Brad',
    lastName: 'Seftel',
    birthYear: 1972,
    currentYear: 2022,
    job: 'Web Developer',
    friends: ['Ted', 'Luke', 'Ernest'],
    hasDriversLiscence: true,

    calcAge: function () {
        return this.age = this.currentYear - this.birthYear;
    },

    isDriversLiscenceValid: function () {
        return this.hasDriversLiscence ? "Valid" : "Invalid"
    },

}

brad.calcAge();
console.log(` ${brad.firstName} is a ${brad.calcAge()} year old ${brad.job} and has a ${brad.isDriversLiscenceValid()} drivers liscence`);
*/

// ------------------------------------------------------- LOOPS
//for (let rep = 1; rep <= 10; rep++) {

//  console.log(`'Lifting weights rep ${rep}'`);
//}

/*
const types = [];
const bradsArray = [
    'Brad',
    'Seftel',
    2037 - 1972,
    'teacher',
    ['Ted', 'Luke', 'Ernest'],
    true
];


for (let i = 0; i < bradsArray.length; i++) {
    console.log(typeof bradsArray[i]);
    // ways to fill an array
    // types[i] = typeof bradsArray[i];
    types.push(typeof bradsArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];


for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// cont && break
console.log('---ONLY STRINGS---');
for (let i = 0; i < bradsArray.length; i++) {
    if (typeof bradsArray[i] !== 'string') continue;

    console.log(bradsArray[i], typeof bradsArray[i]);
}

console.log('---BREAK WITH A NUMBER---');
for (let i = 0; i < bradsArray.length; i++) {

    if (typeof bradsArray[i] === 'number') break;
    console.log(bradsArray[i], typeof bradsArray[i]);
}
*/

// ----------------------------------------------------looping backwards

// const bradsArray = [
//     'Brad',
//     'Seftel',
//     2037 - 1972,
//     'teacher',
//     ['Ted', 'Luke', 'Ernest'],
// ];

// for (let i = bradsArray.length - 1; i >= 0; i--) {
//     console.log(i, bradsArray[i]);
// }

// // loop inside a loop

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log('------------- Starting Exercise', exercise);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise} Lifting weight rep ${rep}`);
//     }

//}

// ----------------------------------------------- WHILE LOOPS
// let rep = 1;
// while (rep <= 10) {
//     //console.log(`WHILE: Lifting weights reps" ${rep}`);
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is terminating');
//}