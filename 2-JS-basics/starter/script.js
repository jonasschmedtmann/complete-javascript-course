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

/**************************************************
 * Truthy and Falsy values & Equality Operators
 */

// Falsy Values: undefined, null, 0, '', NaN(Not a Number)
// Truthy values: NOT a falsy value

var height;
height = 23;
if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has not been defined");
}

// Equality operators
if (height == "23") {
  console.log("The == operator does type coercion Ex; 23 == '23' is true");
} else {
  console.log("The === is best practice");
}

/***********************************************
 * Code Challenge 2
 */

var avgJohn = (89 + 120 + 103) / 3;
var avgMike = (116 + 94 + 123) / 3;
var avgMary = (120 + 123 + 97) / 3;
console.log(avgJohn, avgMary, avgMike);

if (avgJohn > avgMike && avgJohn > avgMary) {
  console.log("John's team scored the most");
} else if (avgMike > avgJohn && avgMike > avgMary) {
  console.log("Mike's team scored the most");
} else if (avgMary > avgJohn && avgMary > avgMike) {
  console.log("Mary's team scored the most");
} else {
  console.log("There was a draw");
}

/*****************************************************
 * Functions
 */

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1991);
var ageMace = calculateAge(1989);
var ageJane = calculateAge(1995);
console.log(ageJohn, ageMace, ageJane);

function yearsToRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsToRetirement(1989, "John");
yearsToRetirement(1930, "Maury");
yearsToRetirement(1999, "James");

/**********************************************
 * Function Statements and Expressions
 */

// Function Declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
var whatDoYouDo = function(job, name) {
  switch (job) {
    case "teacher":
      return name + " teaches kids how to code";
    case "driver":
      return name + " drives a cab in Lisbon";
    case "designer":
      return name + " designs beautiful websites";
    default:
      return name + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));

/*********************************************
 * Arrays
 */

var names = ["John", "Mark", "Jane"]; // most often used
var years = new Array("1990", "1969", "1948"); // another way to create an array
console.log(names[0]);
console.log(names.length);

// How to add to change elements in an array
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "designer", false];
// push() adds an element to the end of the array
john.push("blue");
// unshift() adds to the beginning of the array
john.unshift("Mr.");
console.log(john);
// pop() deletes element from end of array
john.pop();
console.log(john);
// shift() deletes element from beginning of array
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "John is a designer";
console.log(isDesigner);

/************************************
 * Code Challenge 3
 */

function billTip(price) {
  var percentage;
  if (price < 50) {
    percentage = 0.2;
  } else if (price >= 50 && price <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * price;
}

var bill = [124, 48, 268];
var tips = [billTip(bill[0]), billTip(bill[1]), billTip(bill[2])];
var finalValue = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(tips, finalValue);

/*************************************************
 * Objects and Properties
 */

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};
// Can call and change properties using dot or bracket notation
console.log(john.firstName);
console.log(john["lastName"]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);
// or use a variable
var x = "birthYear";
console.log(john[x]);

var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1989;
jane["lastName"] = "Smith";
console.log(jane);

/********************************************
 * Objects and Methods
 */

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1991,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function(birthYear) {
    this.age = 2020 - this.birthYear;
  }
};

john.calcAge();
console.log(john);

/*************************************
 * Code Challenge 4
 */

var aaron = {
  firstName: "Aaron Khan",
  height: 75,
  weight: 220,
  calcBMI: function() {
    this.Bmi = this.weight / (this.height ^ 2);
    return this.Bmi;
  }
};

var hank = {
  fullName: "Hank Raoan",
  height: 75,
  weight: 210,
  calcBMI: function() {
    this.Bmi = this.weight / (this.height ^ 2);
    return this.Bmi;
  }
};

aaron.calcBMI();
hank.calcBMI();
console.log(aaron, hank);

if (aaron.Bmi > hank.Bmi) {
  console.log("John has the higher BMI");
} else {
  console.log("Mark has the higher BMI");
}
