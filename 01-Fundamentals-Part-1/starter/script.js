/*
///////////////////////////////////////////
// Values and Variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Value is a piece of data

console.log('Jacob');
console.log(23);

// Declaring a variable firstName, Work like a box which we put the value of Jacob in. If want to access the value we need to use the var name.
let firstName = "Jacob";
// Calling the variable firstName
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Conventions and rules to naming variables - camelCase.
// If its a constant write it in uppercase (it wont change)
// Be descriptive when naming variables
let PI = 3.14;
let myFirstJob = 'Programmer';
console.log(myFirstJob);

///////////////////////////////////////////
// Data Types

// We decalre a new variable using the let key word
let jsIsFun = true;
console.log(jsIsFun);

// typeof shows the type of value
console.log(typeof jsIsFun); // boolean
// console.log(typeof 12); // number
// console.log(typeof 'test'); // string

// When re assigning a variable we don't use let
jsIsFun = 'YES!';
console.log(typeof jsIsFun); // string

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// let, const and var lecture

// let can be mutated, changed at a later date. (block scoped)
let age = 30;
age = 31

// consts creates a variable that cannot be mutated
const birthyear = 1991;
// birthyear = 1990;

// Var and let are pretty different, this is the old way of declaring a variable. (function scoped)
var job = 'programmer';
job = 'teacher';

// We dont need to declare the variable (pretty terrible idea JS creates a property on the global object)
lastName = 'Cornwell';
console.log(lastName);


///////////////////////////////////////////
// Basic operators

// Math operators
const now = 2037;
const ageJacob = now - 1996; // 42
const ageSarah = now - 2020; // 17
console.log(ageJacob, ageSarah);

// 2 ** 3 means 2^3 or 2x2x2
console.log(ageJacob * 2, ageJacob / 10, 2 ** 3);

// we can use the + operator to concatenate two strings or more
const firstName = 'Jacob';
const lastName = 'Cornwell';
console.log(firstName + ' ' + lastName);

// assignment opperators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x - x - 1 = 99
console.log(x);

// Comparision operators
console.log(ageJacob > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJacob = now - 1996;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// left to right
// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

// user () parenthesis to be computed first
const averageAge = (ageJacob + ageSarah) / 2;
console.log(ageJacob, ageSarah, averageAge);

*/