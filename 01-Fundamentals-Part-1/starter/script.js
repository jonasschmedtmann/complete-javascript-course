/* // ---------------- Lesson 9 --------------------

let js = "amazing";
// console.log(40 + 8 + 23);
// Value is basically the smallest unit of information that we have in JS

let firstName = "Bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3; //Syntax Error for JS engine couldn't understand this...
// let +years =5;
// let jonas&halil = "JH"; // Don't use illegal variable name
// let new = 288; // new is reserved keyword..
// let function = 288; // new is reserved keyword..
let $year = 29;
let _year = "Selam";
let _year3 = "Hey";
let _Year3 = "Hey";
// console.log($year);
// console.log(_year);
// console.log(_year3);
// console.log(_Yaar3);// Reference error because value is not reachable...

// Unexpected token, JS engine doesn't wait the character or symbol what not suitable...
// JS token is smallest unit of code.
// Auth token and  Unexpected token 'new' expression different each other...

//  -- name is actually reserved keyword but legal to use. For your goodness don't use this, and use with prefix

let Person = "jonas"; // This is not suitable for convention. Not illegal... But OOP uses this.
console.log(Person);

let PI = 3.1415; // Real constant... Different color.

// Descriptive names is so important...

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

// Assignment 1
let country = "Turkey";
let continent = "Europe";
let population = "81.000.000";
console.log(country, continent, population);

// ------------ 11- Data Types -----------------

// Number
// String --> Sequence of characters
// Boolean
// Undefined
// Null --> empty value
// Symbol(ES2015) --> Value that is unique and cannot be changed.
// BigInt(ES2020) --> Larger integers than the Number type can hold.

// Dynamic Typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

// VALUE HAS TYPE, not variable...

let jsIsFun = true;
console.log(jsIsFun); // pink is boolean
jsIsFun = "true";
console.log(jsIsFun); // white is string
console.log(typeof true); // white boolean means that type is boolean but returns string type... Dont remember to this because later you use this information decide sth...

console.log(typeof 23); // number

jsIsFun = "YES";
console.log(typeof jsIsFun);
jsIsFun = null;
console.log(typeof jsIsFun); // This is a bug but  for legacy reasons not corrected.
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year); */

// ------------ 12- LET,CONST,VAR -----------------

let age = 39;
age = 40; // when we need to mutate a variable we use LET keyword...

// const birthYear = 1991;
birthYear = 1990; // TypeError: Assignment to constant variable // Immutable...
let year; // let because first value undefined. And initial value changed..
// const job ; // Missing initializer in const declaration , not legal

// Mutate variable values is dangerous that's why default we use CONST

var job = "programmer";
job = "teacher";
// console.log(job); // let is block scoped and var is function scoped.

// Never use var keyword... Prior ES6 default keyword but not now...

lastName = "Ozdemir";
// console.log(lastName); // We didn't use var,let,const etc... Still worked Is there any problem...

// Pretty terrible idea... Global scope is not intended.....
// The problem is the more variables you have the more chance to have some semantical issues which are really hard and time consuming to debug.

// Limiting the scope of variables is a very good practice.

// ------------- 13- BASIC OPERATORS ----------------

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x* 4
x++; // x = x + 1
x--; // x = x-1
x--; // x = x-1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 10);
console.log(ageSarah <= 10);

const isFullAge = ageSarah >= 18;
console.log(isFullAge); */

// ------------- 14- OPERATOR PRECEDENCE ----------------

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5); // LTR(Left to right)
let x, y;
// x = y = 25 - 10 - 5; // If assignment operator process Left to Right x = y --> y undefined
// console.log(x, y);

const averageAge = ageJonas + ageSarah / 2; // use parenthesis ...
const averageAgeWithParenthesisForPrecedence = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge, averageAgeWithParenthesisForPrecedence);
