// Lecture: let and const
/*
// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";

// ES6
// const variables are immutable and let is
const name6 = "Jane Smith";
let age = 23;

// ES5

// var is function scoped
function driverLicense(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;
  }
  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive."
  );
}

driverLicense(true);

// ES6

// let and const are block scoped
// how to make it work using block scope
function driverLicense6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = "John";
  }
  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive."
  );
}

driverLicense6(true);

// example of why block scope works well if you used var the
// console.log(i) would be 5

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
*/
//////////////////////////////////////////////
// Lecture: Blocks and IIFEs
/*
// creates closure with brackets in ES6
{
  const a = 1;
  let b = 2;
}
*/
//////////////////////////////////////////////
// Lecture: Strings
/*
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6
// template literals
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
// capitalization matters
console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(n.includes("oh"));

console.log(`${firstName} `.repeat(3));
*/

////////////////////////////////////////
// Lecture: Arrow Functions

const years = [1990, 1989, 1992, 1938];

//ES5
var ages5 = years.map(function(el) {
  return 2020 - el;
});
console.log(ages5);

//ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

// with 2 or more arguments you need parentheses
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);
