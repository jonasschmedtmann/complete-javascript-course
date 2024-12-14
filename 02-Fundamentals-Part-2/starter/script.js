"use strict";
//forbids us to do certain things & creates visible error in developers console in cases where js would fail silently.

function c(valueToBePrinted) {
  console.log(valueToBePrinted);
}

function cc() {
  console.clear();
}

let hasDriversLisc = false;
const passTest = true;

if (passTest) hasDriversLisc = true;
if (hasDriversLisc) console.log("I can drive");

//const interface = "test";
//strict mode will prompt but without that it wont show error

console.clear();

// B. FUNCTIONS
function logger() {
  console.log("Hello from Devanshee");
}

//invoke, call, run the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const jc = fruitProcessor(4, 5);
console.log(jc);

console.clear();

// C. function declarations and expressions

//func declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}
calcAge1(2000);

//function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
console.log(calcAge2(1992));

console.clear();
//function declatations could be called before defined which doesnt work in expressions. so expressions are better

// D. arrow functions : one liner return : this doesnt have this keyword!
const calcAge3 = (birthYear) => 2034 - birthYear;
console.log(calcAge3(1990));

console.clear();

const yearsUntilRetured = (birthYear, name) => {
  const age = 2021 - birthYear;
  const retiremnt = 65 - age;
  return `${name} retires in ${retiremnt}`;
};

console.log(yearsUntilRetured(1993, "Hell"));

// E. functions calling other functions

function cutFruit(fruit) {
  return (fruit = 4);
}

function fruitProcessor(apples, oranges) {
  const applePcs = cutFruit(apples);
  const orangePcs = cutFruit(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePcs} apples pieces and ${orangePcs} oranges pieces`;
  return juice;
}

console.log(fruitProcessor(2, 3));
console.clear();

// F. Arrays

const humans = ["Henna", "Jinal", "Nirali"];
console.log(humans);

const years = new Array(2000, 2001, 2002);

console.log(humans[0]);
console.log(length);
console.log(humans[humans.length - 1]);

//changing array with const! ONLY PRIMITIVE VALUES ARE IMMUTABLE, objects could be changed. you couldnt change the entire array but can modify that value
humans[2] = "James";
console.log(humans);

const fname = "Devanshee";
const devs = [fname, "Vankani", 2021 - 2000, humans];
console.log(devs);

console.clear();

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearArray = [2000, 2001, 2002];
//console.log(calcAge3(yearArray));

cc();

// G. Objects and it's properties

const deva = {
  fname: "Devanshee",
  lname: "Vankani",
  age: 21,
  profession: "intern",
};

c(deva);

//dot operator
c(deva.lname);
//bracket notation
c(deva["age"]);

let temp = "f";
c(deva[temp + "name"]);
/* 
const interestedIn = prompt("What would you like to know about me?");
c(interestedIn);

if (deva[interestedIn]) c(deva[interestedIn]);
else c("Wrong request");
 */
deva.location = "Rajkot";
deva["github"] = "devansheee";

// H. Object Methods

const devansheee = {
  fname: "Devanshee",
  lname: "Vankani",
  age: 21,
  profession: "intern",
  hasLiscence: true,
  birthYear: 2000,

  //method: we are using Function EXPRESSION :D

  /* calcAge: function (birthYear) {
    return 2020 - birthYear;
  }, */

  calcAge: function () {
    return 2022 - this.birthYear;
  },
};
// c(devansheee.calcAge(devansheee.birthYear));
c(devansheee.calcAge());

cc();

// I. Loops
//looping reverse

const fruits = ["orange", "apple", "grapes", "mango"];

// console.log(devansheee);
for (var i = fruits.length - 1; i >= 0; i--) {
  c(fruits[i]);
}
