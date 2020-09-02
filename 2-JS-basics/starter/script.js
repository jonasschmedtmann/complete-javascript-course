/*
// console.log("Hello World! (from imported module)");

// var is depreciated; use const or let (ES6), also ";" not needed
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;
console.log(typeof age); // number

var fullAge = true;

// create variable without assigning a value (defaults to 'undefined')
var job; // currently undefined
console.log(job);

// assigning a value to an existing variable
job = "Teacher";
console.log(job);

*/

// let's break some rules
// var 3years = 3; // cannot start the name of variable with number
// var john/mark = 'John and Mark'; cannot have a forbidden character inside a variable
// var function = 23; function is a reserved keyword

// Type coercion

var firstName = "John";
var age = 28;

// converts age (number) to string. will also convert boolean and undefined to string
console.log(firstName + " " + age);

// creating multiple variables
var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is " + age + " year old " + job + ". Is he married? " + isMarried);

// Variable mutation
age = "twenty eight";
job = "driver";

// pop-up message in browser
alert(firstName + " is " + age + " year old " + job);

// pop-up user input in browser with input saved to variable
var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);
