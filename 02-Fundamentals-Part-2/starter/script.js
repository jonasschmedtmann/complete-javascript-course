'use strict';  //activates strict mode or secure code to avoid accidental errors//
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!')

// const interface = "Audio"; //Uncaught SyntaxError: Unexpected strict mode reserved word//

// const private = 534; //reserved word


//LESSON: FUNCTIONS//

function logger() {
  console.log('My name is James')
}
//calling /  running / invoking function
logger();
logger();
logger();

function fruitprocessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitprocessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitprocessor(2, 4);
console.log(appleOrangeJuice)

const num = Number("23");



//LESSON: FUNCTION DECLARATION VS. EXPRESSIONS//

// //Function declaration eexample//
// const age1 = calcAge1(1991)//can call function first and define it later, but not for "expressions"-hoisting//

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991); //<= these are called arguments//

//Function expression example//
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;//can store a function as a variable, because it is a value//
}
const age2 = calcAge2(1991);
console.log(age1, age2)
*/

//LESSON: ARROW FUNCTIONS//

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

//LESSON: FUCNTIONS CALLING OTHER FUNCTIONS//
