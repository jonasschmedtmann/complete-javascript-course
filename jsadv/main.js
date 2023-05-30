console.log("Hello form main!");

// use const unless the value needs to change
/*
 Data Types - 2 types
 Primitive
 1. String
 2. Number
 3. Boolean
 4. undefined
 5. null
 6. BigInt
 7. Symbol
 
 Non -Primitive
 1. Object
 */
/*
const name = "John";
const language = "Javascript";
const channel = `Coding`;

const total = 0;
const PI = 3.14;

const isPrimitive = true;

let result;
console.log(result);

const res = undefined;
const data = null;

// Object
const person = {
  firstName: "Bruce",
  lastName: "Wayne",
  age: 30,
};

console.log(person.firstName); // firstName
console.log(person); // array print

const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers[4]); // array access
console.log(oddNumbers); // array print

// Dynamic assigmnent
let a = 10;
a = "Jhon";
a = true;
console.log(a); // true, last assignment
*/
/*
// Operators
Assignment op
Arithmetic op
Comparison op
Logical op
String op
Other op
*/
// Assignment op
let x = 10;
let y = 5;
// Arithmetic op
console.log(x + y);
console.log(x % y);
console.log(++x);
console.log(--x);

// Comparison op
console.log(x > y);
console.log(x == y);
console.log(x === y); // false - compares value and data type
console.log(x !== y); // true - strictly not equal to

// Logical op
const isValidNumer = x > 8 && y > 8; // false - true only if both true
const isValidNumer2 = x > 8 || y > 8; // true - true if only one true

console.log(isValidNumer);
console.log(isValidNumer2);

const isValid = false;
console.log(!isValid); // true - negating false

// String op
console.log("Bruce" + "Wayne");

// Ternery op
const isEven = 10 % 2 === 0 ? true : false;
console.log(isEven);

const isEven2 = 10 % 2 === 0 ? "Number is even" : "Number is odd";
console.log(isEven2);

const ofAge = 17 >= 18 ? "Of age" : "Of not age";
console.log(ofAge);

const year = 2023;
const birthYear = 1991;
const ofAge2 = year - birthYear >= 18 ? "Of age" : "Of not age";
console.log(ofAge2);

// Type conversion
