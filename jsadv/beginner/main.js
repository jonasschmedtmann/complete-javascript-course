console.log("Hello from main!");

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
// let x = 10;
// let y = 5;
// // Arithmetic op
// console.log(x + y);
// console.log(x % y);
// console.log(++x);
// console.log(--x);

// // Comparison op
// console.log(x > y);
// console.log(x == y);
// console.log(x === y); // false - compares value and data type
// console.log(x !== y); // true - strictly not equal to

// // Logical op
// const isValidNumer = x > 8 && y > 8; // false - true only if both true
// const isValidNumer2 = x > 8 || y > 8; // true - true if only one true

// console.log(isValidNumer);
// console.log(isValidNumer2);

// const isValid = false;
// console.log(!isValid); // true - negating false

// // String op
// console.log("Bruce" + "Wayne");

// // Ternery op
// const isEven = 10 % 2 === 0 ? true : false;
// console.log(isEven);

// const isEven2 = 10 % 2 === 0 ? "Number is even" : "Number is odd";
// console.log(isEven2);

// const ofAge = 17 >= 18 ? "Of age" : "Of not age";
// console.log(ofAge);

// const year = 2023;
// const birthYear = 1991;
// const ofAge2 = year - birthYear >= 18 ? "Of age" : "Of not age";
// console.log(ofAge2);

// // Type conversion
// // Implicit conversion - automatically done
// // Expicit conversion - manuall y done

// console.log(11 + "3"); // 113 - string
// console.log(true + "3"); // true3
// console.log("4" - "2"); // 2
// console.log("8" * "2"); // 16
// console.log("8" / "2"); // 4
// console.log(8 / "2"); // 4
// console.log(8 * "2"); // 16
// console.log("Bruce" - "Wayne"); // NaN
// console.log("5" - true); // 4 => true = 1
// console.log("5" - false); // 5 => true = 0
// console.log("5" + true); // 5true => string
// console.log("5" + false); // 5false => string
// console.log("5" - null); // 5 => null = 0
// console.log(5 + undefined); // NaN
/*
// Expicit conversion
console.log(Number("5")); // 5
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(parseInt("5")); // 5
console.log(parseFloat("3.14")); // 5

console.log(String(500)); // 500 string
console.log(String(null)); // null string
console.log(String(undefined)); // undefined string
console.log((500).toString()); // 500 string

console.log(Boolean(10)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // null
console.log(Boolean(0)); // fasle
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
*/
// Equality

// ==(Allows coercion)
// ===(Does not allow coercion)

// const var1 = "test";
// const var2 = "test";
// console.log(var1 == var2); // true
// console.log(var1 === var2); // true

// const var1 = 10;
// const var2 = "10";
// console.log(var1 == var2); // true
// console.log(var1 === var2); // false - because different type

// const var1 = "10";
// const var2 = "5";
// console.log(var1 == var2); // false
// console.log(var1 === var2); // false - because different value

// const var1 = 0;
// const var2 = "";
// console.log(var1 == var2); // true => be careful
// console.log(var1 === var2); // false - because different types

// const var1 = false;
// const var2 = "";
// console.log(var1 == var2); // true => be careful
// console.log(var1 === var2); // false - because different types

// const var1 = null;
// const var2 = undefined;
// console.log(var1 == var2); // true => be careful
// console.log(var1 === var2); // false - because different types

// conditional Staements if else, switch
// const num = 0;

// if (num > 0) {
//   console.log("number is positiove");
// } else if (num < 0) {
//   console.log("Number is negative");
// } else {
//   console.log("Number is zero");
// }

// const color = "10";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   case "green":
//     console.log("Color is green");
//     break;
//   default:
//     console.log("Not a valid color");
// }

// // Looping code
// // For loop
// // for (initializer; condition; final-expression){
// //     // code run
// // }

// for (let i = 1; i <= 5; i++) {
//   console.log("Iteration number " + i);
// }

// While loop
// initializer
// while (condition) {
//    // code run

//    final-expression
// }

// let i = 1;
// while (i <= 5) {
//   console.log("Iteration number " + i);
//   i++;
// }

// Do While loop
// initializer
// do {
//     // code run

//     final-expression
// } while (condition)

// let i = 1; // if we give 6 we see 6 once, prints before checking condition
// do {
//   console.log("Iterator number " + i);
//   i++;
// } while (i <= 5);

// For of loop - loop for Array
// for(const item of array) {
//     // code run
// }

// const numArray = [1, 4, 55, 0, 5]; // 1,4,55,0,5
// for (const num of numArray) {
//   console.log("Iterator number " + num);
// }

// Functions
// function greet(userName) {
//   console.log("Good morning " + userName);
// }
// greet("Bruce");
// greet("Diana");
// greet("Clark");

// function add(a, b) {
//   return a + b;
// }
// const sum = add(5, 10);
// console.log(sum);

// const arrowSum = (a, b) => a + b;
// const sum = arrowSum(25, 25);
// console.log(sum);

// const addFive = (num) => num + 5;
// console.log(addFive); // (num) => num + 5 ==> TODO

// Scope - Block scope, Function scope, Global scope
//Block scope
// if (true) {
//   const myName = "John";
//   console.log(myName);
// }

// // Function scope
// function testFN() {
//   const myName = "Batman";
//   console.log(myName);
// }
// testFN();

// Global scope
// Globally declare variable does not override local or function variable
const myNum = 100;
if (true) {
  const myName = "John";
  console.log(myName);
  console.log(myNum);
}

// Function scope
function testFN() {
  const myName = "Batman";
  console.log(myName);
  console.log(myNum);
}
testFN();
