// Lecture: let and const

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

//////////////////////////////////////////////
// Lecture: Blocks and IIFEs

{
  const a = 1;
  let b = 2;
}
