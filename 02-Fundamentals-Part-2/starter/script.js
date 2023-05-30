"use strict";
document.getElementById("testqq");

const btn = document.createElement("btn");

btn.addEventListener;

//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function Expressiont
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow Function
const calcAge3 = (birthyear) => 2037 - birthyear;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//Array
const friend1 = "Jr";
const friend2 = "RenRen";
const friend3 = "Jayason";

const friends = [friend1, friend2, friend3];

// Creating an Object
const person = {
  fName: "Neil",
  lName: "Caoile",
  age: 25,
};

//Accessing objects value
console.log(person.age); // Dot notation
console.log(person["age"]); // Bracket
