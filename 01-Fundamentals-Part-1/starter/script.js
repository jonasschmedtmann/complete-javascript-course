let js = "amazing";
console.log(40 + 5);

// Values and variables
//Camel case are the recommanded way of naming variables
// let firstName = "Steven";
// when using keywords, use a dollar sign $
let $function = 27;
let person = "Melvina";

//When naming variables, make sure to use name that people can easily understand
let myFirstJob = "Programmer";
let mySecondJob = "Professor";

console.log(myFirstJob);

// Data types
/* 7 primitive data types: Number, String, Boolean, Undefined
    Undefined: Value taken by a variable that is not yet defined ('empty value')
    Null: Also means empty value
    Symbol: Value that is unique and cannot be changed
    BigInt: Larger integers than the number type can hold
*/

console.log(typeof "string");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// Concatenate
const firstName = "Jonas";
const lastName = "Loue";
console.log(firstName + lastName); //JonasLoue
console.log(firstName + " " + lastName); //Jonas Loue

// Assignment operators
let x = 10 + 5;
x += 10;
x++;
console.log(x);

// Comparison operators
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18); //true. In real life environment we would store these in variables
