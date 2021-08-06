'use strict';

/////////////////////////////////////////////////
// 205. Using the New Keyword and Constructor Functions

// Constructor Function
function Person(firstName, birthYear) {
  // Instance Properties
  this.firstname = firstName;
  this.birthYear = birthYear;

  // Don't create a method inside of a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
}

// Create instance of Person with the New keyword
const jonas = new Person('Jonas', 1991); // Instance of Person
console.log(jonas instanceof Person);

// Constructors BTS
// 1. New {} created
// 2. Function is called where this = the new {}
// 3. {} linked to Prototype
// 4. fn returns {populated}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas, matilda, jack);
