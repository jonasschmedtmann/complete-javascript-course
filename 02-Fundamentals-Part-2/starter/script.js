"use strict";

// -------------------- Functions ------------------------- //

function logger() {
  console.log("My name is Jonas");
}

// calling or invoking the function
// logger();

// const appleOrangeJuice = fruitJuicer(2, 4);
// console.log(appleOrangeJuice);

// -------- Function Declarations and Function Expressions ------- //

// Function Declaration - They can be called before function declaration due to hoisting //

// console.log(calcAgeDeclaration(1988));

function calcAgeDeclaration(birthYear) {
  return 2023 - birthYear;
}

const myAge = calcAgeDeclaration(1988);
// console.log(myAge);

// Function Expression //

const calcAgeExpression = function birthYear(birthYear) {
  return 2023 - birthYear;
};

const myAge2 = calcAgeExpression(1988);
// console.log(myAge2);

// ---------------------- Arrow Function ----------------- //
// A special type of function expression
// Has no "this" keyword

// const calcAgeArrow = (birthYear) => 2023 - birthYear;
// const myAge3 = calcAgeArrow(1988);
// console.log(myAge3);

const fruitCutter = (fruit) => fruit * 4;

function fruitJuicer(apples, oranges) {
  const applePieces = fruitCutter(apples);
  const orangePieces = fruitCutter(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

// console.log(fruitJuicer(5, 2));

// ------------------------- Arrays ----------------------- //
// Arrays are a type of data structure
// We can mutate arrays even declared with const but cannot replace the entire array with const. Only primitive values declared with const are immutable

// This is the literal syntax
const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

const years = new Array(1991, 1984, 2008, 2021);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
friends[2] = "Jay";
// console.log(friends);
const firstName = "Jonas";
const profession = "teacher";
const jonasS = [
  firstName,
  "Schmedtmann",
  2023 - 1991,
  friends,
  profession === "teacher",
];
// console.log(jonasS);

const calcAgeArrow = (birthYear) => 2023 - birthYear;

const birthYears = [1990, 1967, 2002, 2010, 2018];

// for (let i = 0; i < birthYears.length - 1; i++) {
//   const year = calcAgeArrow(birthYears[i]);
//   console.log(year);
// }

// --------------------- Array Methods ------------------ //
// .push() this will add elements to the end of an array and return the new length of the array
const newLength = friends.push("Michelle", "Carol");
// console.log(newLength);

// .unshift() - adds elements to the beginning of an array and also returns the new length of the array

const frontLength = friends.unshift("Mary");
// console.log(friends, frontLength);

// .pop() - will remove the last element of an array and return that last element that was removed
const popped = friends.pop();
// console.log(popped);

// .shift() - will remove the first element of an array and return that last element that was removed

const shifted = friends.shift();
// console.log(friends, shifted);

// .indexOf() will return the index of the element in the array. If they element is not in the array, it will return -1

// console.log(birthYears.indexOf(1990));

// .includes() It will return true if the element is in the array and false if the element is not in the array. This uses strict equality as I believe indexOf does as well

// console.log(friends.includes("Steven"));

// --------------------- Objects ----------------------------- //
// Objects are another data structure like arrays, In fact arrays are a special type of object.
// Objects are composed of key value pairs. The key (also called property) being the variable name and then the value
// The order of objects do not matter when trying to retrieve values, unlike arrays which are index based

// object literal syntax
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2023 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// ------------------- Dot and Bracket Notation --------------- //

// the dot . is an operator also called "Member access"
// Dot notation - cannot compute the property name like with bracket notation
// console.log(jonas.lastName);

// Bracket notation - also called "Computer Member access" can used brackets to compute the key from any expression

// *** We will get undefined if the property does not exist on the object //

// console.log(jonas["lastName"]);

const nameKey = "Name";
// console.log(jonas["first" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends"
// );
// console.log(
//   jonas[interestedIn]
//     ? jonas[interestedIn]
//     : "We do not have this information on Jonas yet"
// );

// Adding / changing values with dot and bracket notation

jonas.location = "Portugal";
jonas["x"] = "@jonasschmedtman";

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
// );

// ----------------- Object methods -------------------- //

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    // this keyword/variable is a property on all objects referring to the object on which the method is called. Can also be used to store a new property
    // console.log(this);
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  summary() {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

// console.log(jonas2.calcAge(), jonas2.age);
// console.log(jonas2.summary());

// --------------------- For loop  -------------------------- //
// A for loop is a loop that has a counter. For loops keeps running whiel condition is tr

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }

// ---------- Looping through array ---------------------- //
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2024 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// let types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   types.push(typeof jonasArray[i]);
// }

const calcAge2 = (birthYear) => 2024 - birthYear;

const years2 = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years2.length; i++) {
  ages.push(calcAge2(years2[i]));
}
// console.log(ages);

// loop statement: continue - to exit the current iteration of the loop and continue

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   types.push(typeof jonasArray[i]);
// }

// loop statement: break - to completely terminate the whole loop

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;
//   types.push(typeof jonasArray[i]);
// }

// --------- Looping backwards and loops in loops ------------- //

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2024 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Looping backwards

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(jonasArray[i]);
// }

// loop inside of a loop

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------------ Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Rep ${rep}`);
//   }
// }

// ------------------- while loop ----------------------- //
// the while loop is more versitle than the for loop because all it needs is the condition even without a counter
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// while loop example without a counter

let dice = Math.trunc(Math.random() * 6) + 1;
let counter = 1;
while (dice !== 6) {
  console.log(`Dice roll #${counter}: You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("You rolled a 6! Win!");
  counter++;
}

// console.log(Math.floor(Math.random() * 7));
// console.log(Math.trunc(Math.random() * 7));
// console.log(Math.trunc(Math.random() * 6) + 1);
