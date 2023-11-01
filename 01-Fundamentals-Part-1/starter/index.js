let js = "amazing";

// if (js === "amazing") alert("JS is fun!");

// ----------------- DATA TYPES -------------------- //

/*
Every value is either an object or a primitive value - A value is a primitive if it is not an object.7 Primitive data types: number, string, boolean, undefined = "value taken by a variable that is not yet defined or empty value", null = "empty value", symbol, BigInt = "larger ibtegers than the Number type can hold"
*/

/*
console.log(typeof null);
This will evaluate to object which is a bug in javascript */

let demiAge = 34;
const birthYear = 1988;

let currentYear = 2023;
// Operators transform values

const ageDemi = currentYear - birthYear;
// console.log(ageDemi);

// ------------------- Concatinate -----------------------  //
const firstName = "Jonas";
const lastName = "Schmedtmann";
// console.log(`${firstName} ${lastName}`);

//------------------- Assignment Operators ---------------- //
// let x = 5;
// +=
// x += 10;
// console.log(x);
// x -= 10;
// console.log(x);
// x *= 4;
// x++;
// x--;
// console.log(x);

//---------------- Comparison operators >, <, >=, <= --------- //

// Operator Precedence
let x, y;

// string literals
// console.log(`String
// with
// multiple lines`);
// let age = 16;
// const yearsLeft = 16 - age;
// if (age >= 16) {
//   console.log("Old enough to drive!");
// } else
//   console.log(
//     `Not quite ready to drive, only ${yearsLeft} year until able to drive`
//   );

//------------------ Type Conversion ------------------ //

//  NaN is of type number but is an invalid number
const inputYear = "1991";
// console.log(inputYear);
// console.log(Number("7e2"));
// console.log(JSON.stringify(700));

// ----------------- Type Coercion --------------------- //
// It happens when an operator is dealing with two values of different types. Javascript will convert one type of value to another so that it can perform the operation

// console.log("23" - "10" - "3");

// ----------------- FALSY VALUES -------------------- //
// Falsy values are values that will become false when we try to convert them to a boolean
// 0, "", undefined, null, NaN. All other values are truthy values

// ---------------- Equality Operators -------------------- //
// === is strict equality operator and does NOT do type conversion but the == DOES do type conversion. for example 18 == "18" = true

// const favoriteNumber = Number(prompt("What is your favorite number?"));

// -------------- Boolean logic & Logical Operators ------- //
//Not specific to javascript but in all programming languages
// && || and !

const hasDriversLicense = true;
const hasGoodVision = false;

// console.log(hasDriversLicense && !hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// ----------------- Switch Statement ---------------------- //
// It does strict comparison
const day = "tuesday";
// switch (day) {
//   case "monday":
//     console.log("It's Monday!");
//     console.log("I plan my protest on Monday!");
//     break;
//   case "tuesday":
//     console.log("It's midweek");
//   case "wednesday":
//     console.log("And I'm working till friday");
//     break;
//   default:
//     console.log("YAY!");
// }

// ---------- Statements vs Expressions ----------------- //
// An Expression is a piece of code that produces a VALUE
// examples: 1991, true, 3 + 2 all all expressions
// A template literal expects an expression - something the yields a value, not a statement

// A Statement is a bigger piece of code that does not produce a code on itself. It usually does some action.

// ----------------- Ternary / Conditional Operator ----------- //
// Has a conditon, an if and and else part
// An operator is an expression because it always produces a value!

const test = 5;
const example = test === 5 ? "Yay!" : "No!";
// console.log(`Wow ${example}`);

const sentence = `How I am feeling today: ${example}`;
// console.log(sentence);

// --------------------- JavScript Versions ------------------ //
