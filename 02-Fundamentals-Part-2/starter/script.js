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
// Return happens implicitly (ie you don't need to write the return keyword, good for single commands)
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// These functions get more complicated with more parameters and more lines of code

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
  // Return can only be omitted on one line functions
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
/*
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
*/

////////////////////
// Years until retirement function
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in %{retirement} years`);
    return retirement;
    // function exit immediately following the return keyword
    // any other code within the function will not be executed
  } else {
    console.log(`${firstName} has already retired🎊`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1950, "mike"));
*/

////////////////////////////
// Data Structures Arrays //
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// it would be horrible to have to create a single variable for every single value

const friends = ["Micheal", "Steven", "Peter"]; // make sure commas are outside quotes
// ^literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
// arrays are 0 based, meaning the first value is index = 0
console.log(friends.length);
// length is not zero based, just gives you the number of elements
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends[2]);

// an array is not a primitive value and is therefore mutable even though we used the const key word

// friends = ["bob", "alice"]; <- we cannot change the entire array however since it is still declared using the const keyword, we can only change the individual values

const firstName = "jonas";
const jonas = [firstName, "schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
*/

// Exercise
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

// Does not work: calcAge(years)
// cannot do a number minus an array

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);

const ages = [age1, age2, age3, age4];
console.log(ages);
*/

////////////////////////////////
//  Array Methods  //
/*
// add elements
const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay"); // push method adds to end of array
console.log(friends);
console.log(newLength);

friends.unshift("john"); // unshift adds to beginning of array
console.log(friends);

// Remove elements
friends.pop(); // remove last element, no argument needed
const popped = friends.pop(); // returns removed element
console.log(friends);
console.log(popped); // returns removed element

friends.shift(); // removes first element
console.log(friends);

// Returns number corresponding to index
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("bob"));

// returns boolean
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
// includes method has type restriction
console.log(friends.includes("23")); // returns false
console.log(friends.includes(23)); // returns true

if (friends.includes("Steven")) {
  console.log("you have a friend named Steven");
}
*/

//////////////////////////////////
// Coding Challenge //
/*
CHALLENGE #2

Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

    1) Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

    2) And now let's use arrays! So, create an array called bills containing the test data below.

    3) Create an array called tips containing the tip value for each bill, calculated from the function you created before.

    4) BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
/*
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
*/

///////////////////////////////////
// Objects //

// Objects are the most fundamental principle in JavaScript

// Object literal syntax -> literally writing out the syntax

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Steven", "Peter"],
};
*/
// we should use arrays for more ordered data and objects for named data

////////////////////////
// Dot vs Bracket Notation //
////////////////////////
/*
// console.log(jonas);
// dot notation requires "real" property name
console.log(jonas.lastName);
// "." is an operator
console.log(jonas["lastName"]);

// bracket notation can use "computed" property name
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
*/
// Dot vs Bracket notation //

// when we compute name we use bracket, in other causes use dot notation
/*
const interestdIn = prompt(
  "What do you want to know about Jonas?  Chose between firstName, lastName, age, job, and friends"
);
/*
console.log(jonas.interestdIn) -> returns "undefined"
console.log(jonas[interestdIn]); -> returns actual prompt
*/

// undefined is what we get when we try to access a property that doesn't exist
//if this value exists then it's a truthy value
/*
if (jonas[interestdIn]) {
  console.log(jonas[interestdIn]);
} else {
  console.log(
    "Wrong request!  Chose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";

console.log(jonas);
////////////////////////////////
// Challenge //
// "Jonas has 3 friends and his best friend is called Michael"

const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Peter", "Steven"],
};

jonas.output = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;

console.log(jonas.output);
*/

////////////////////////////////
// Object Methods //

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Steven", "Peter"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function (birthYear) {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear; // creates new property of object
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers liscense`;
  },
};

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas["calcAge"](1991)); // bracket notation

// birthYear is already defined in the object
// we can read the birth year directly from the object using the "this" keyword
// this keyword is equal to the object on which its called, or its equal to the object calling the method
// this is a very useful property because it stops us from having to repeat ourselves, if we need to change the object name for example, we would have to manually change everything
// this reveals a big limitation of arrow functions since they can't use "this", reaffirms that they are best for shorter functions

/////////////////////////
// Challenge
// Jonas is a 46-year old teacher, and hes has a drivers license

console.log(jonas.getSummary());
*/

//////////////////////////
// Challenge #3 //
//////////////////////////

/*Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

    1) For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

    2) Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

    3) Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


👋 OPTIONAL: You can watch my solution in video format in the next lecture


IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

mark.bmi > john.bmi
  ? console.log(
      `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    )
  : console.log(
      `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
    );
*/

///////////////////////////
// Loops //
///////////////////////////

// Loops are a fundamental aspect of programming because they automate repetitive tasks

// another control structure life if statements

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// ☝️ this is terrible

// for loop

// for loop keeps running while the condition you set is TRUE

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

//////////////////////////////
// Looping through arrays
//////////////////////////////
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// // console.log(jonas[0])
// // console.log(jonas[1])
// // ...
// // console.log(jonas[4])
// // jonas[5] does NOT exist

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

// continue is to exit the current iteration and proceed to the next one
// break exits the entire loop
console.log("---Only string---");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i]);
}
*/

///////////////////
// Looping backwards and loops within loops (nested) //
///////////////////

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// //0,2...4
// //4,3...0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------- Starting Exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
//   }
// }

//////////////////////////////////
// While loop //
//////////////////////////////////

// while loops vs for loops

// while loops we can only specify conditions
// runs "while" the condition is true

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights rep ${rep}`);
//   rep++;
// }

// while loops is more versatile than for loop
// while loops don't necessarily "need" a counter

// example, depends on random variable

// dice roll example, runs until you get a 6

// console.log(dice);
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("loops is about to end...");
//   }
// }

// when we want to loop over a predeterinmined amount, we use for loops, if we're not sure, we use while loops

//////////////////////
// Coding Challenge #4 //
//////////////////////
