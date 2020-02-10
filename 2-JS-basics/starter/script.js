/*
var firstName = "Joshua";
var lasName = "Kaddu";
console.log(firstName, lasName);

var age = 29;
console.log(age);

var ofAge = true;
console.log(ofAge);

var job;
console.log(job);

job = "philanthropist";
console.log(job);
*/

/**********************************************
 * Variable Mutation and Type Coercion
 */

var firstName = "Joshua";
var age = 29;

// Type coercion(turned the number and boolean into a string)
var job, isMarried;
job = "engineer";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    " Is he a senior developer?" +
    isMarried
);

// Variable Mutation
age = "twenty nine";
job = "coach";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    " Is he a senior developer?" +
    isMarried
);
// var lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName);

/******************************************************
 * Basic Operators
 */

var year, yearJob, yearMark;
now = 2020;
ageJob = 29;
ageMark = 33;

// Math Operators
yearJob = now - 29;
yearMark = now - 33;

console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical Operators
var jobOlder = ageJob > ageMark;
console.log(jobOlder);

// typeof operator
console.log(typeof jobOlder);
console.log(typeof ageJob);
console.log(typeof "Job is younger than MArk");
var x;
console.log(typeof x);

/************************************************
 * Operator Precedence
 */

var current = 2020;
var yearMan = 1989;
var fullAge = 30;

// Multiple Operators
var isFullAge = current - yearMan >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageMan = current - yearMan;
var ageArk = 35;
var average = (ageMan + ageArk) / 2;
console.log(average);

// Multiple Assignments
var a, b;
a = b = (3 + 4) * 3 - 5; // 7 * 3 - 5 // 21 - 5 // 16
console.log(a, b);

// More Operators
// a = a * 3; same thing a *= 3;
a *= 3;
console.log(a);
a += 10;
console.log(a);
a += 1;
// increment
a++;
// decrement
a--;

/********************************************
 * Code Challenge
 */

var markWeight = 100;
var johnWeight = 95;
var markHeight = 1.8;
var johnHeight = 1.9;

var markBMI = markWeight / (markHeight ^ 2);
var johnBMI = johnWeight / (johnHeight ^ 2);
console.log(johnBMI, markBMI);

var greater = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's?" + greater);

/********************************************
 * If/Else Statements
 */

var firstLady = "Bailey";
var civilStatus = "married";

if (civilStatus === "single") {
  console.log(firstLady + " is single");
} else {
  console.log(firstLady + " is married");
}

var isMarried = true;
if (isMarried) {
  console.log(firstLady + " is married");
} else {
  console.log(firstLady + " is single");
}

// Code challenge using if/else statement
var markWeight = 100;
var johnWeight = 95;
var markHeight = 1.8;
var johnHeight = 1.9;

var markBMI = markWeight / (markHeight ^ 2);
var johnBMI = johnWeight / (johnHeight ^ 2);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

/***************************************************
 * Boolean Logic
 */
// && operator, both conditions must be true
// || operator, one of the conditions must be true
// ! operator, changes true to false and false to true
var childOne = "Joshua";
var age = 29;

if (age < 19) {
  console.log(childOne + " is a teenager");
} else if (age >= 19 && age < 30) {
  console.log(childOne + " is becoming a man");
} else {
  console.log(childOne + " has reached manhood");
}

/*********************************************
 * The Ternary Operator aka Conditional Operator
 * and Switch Statements
 */

// Ternary Operator
var firstGuy = "John";
var age = 18;

age >= 18
  ? console.log(firstGuy + " drinks wine.")
  : console.log(firstGuy + " drinks juice");

var drink = age >= 18 ? " wine" : "juice";
console.log(drink);

// Switch Statements
var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstGuy + " teaches kids how to code");
    break;
  case "driver":
    console.log(firstGuy + " drives people around");
    break;
  case "designer":
    console.log(firstGuy + " designs beautiful websites");
    break;
  default:
    console.log(firstGuy + " does something else");
}

age = 29;
switch (true) {
  case age <= 12:
    console.log(childOne + " is the kid");
    break;
  case age <= 19 && age >= 13:
    console.log(childOne + " is a teen");
    break;
  case age >= 19 && age < 30:
    console.log(childOne + " is becoming a man");
    break;
  default:
    console.log(childOne + " is the man");
}
