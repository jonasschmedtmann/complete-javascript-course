'use strict';

////////////////////////////////////////////////////////
// 205. Using the New Keyword and Constructor Functions

// Constructor Function
function Person(firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
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

////////////////////////////////////////////////////////
// 206. Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
// We use this process to have every object delegate methods to the Person prototype
// I.e. every instance tells the Prototype what to do (instead of attaching a method to every instance)
// I.e. one method called by every instance vs. every instsance having 1 method

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda, jack);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

////////////////////////////////////////////////////////
// 206. Prototypal Inheritance on Built In Objects
