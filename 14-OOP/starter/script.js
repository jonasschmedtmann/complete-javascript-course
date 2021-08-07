'use strict';

////////////////////////////////////////////////////////
// 205. Using the New Keyword and Constructor Functions

// Constructor Function
// function Person(firstName, birthYear) {
// Instance Properties
// this.firstName = firstName;
// this.birthYear = birthYear;

// Don't create a method inside of a constructor function
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

// Create instance of Person with the New keyword
// const jonas = new Person('Jonas', 1991); // Instance of Person
// console.log(jonas instanceof Person);

// Constructors BTS
// 1. New {} created
// 2. Function is called where this = the new {}
// 3. {} linked to Prototype
// 4. fn returns {populated}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas, matilda, jack);

////////////////////////////////////////////////////////
// 206. Prototypes

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// We use this process to have every object delegate methods to the Person prototype
// I.e. every instance tells the Prototype what to do (instead of attaching a method to every instance)
// I.e. one method called by every instance vs. every instsance having 1 method

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, matilda, jack);

// console.log(jonas.hasOwnProperty('firstName')); // true
// console.log(jonas.hasOwnProperty('species')); // false

////////////////////////////////////////////////////////
// 206. Prototypal Inheritance on Built In Objects

// Long story short, if it's not a primitive, it's an object
// Primitives being Strings, Booleans, Numbers, Symbols, Null & Undefined

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

////////////////////////////////////////////////////////
// 210. ES6 Classes

// Class Expression
// const PersonCl = class {}

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // This declares methods on the prototype, not the instance itself
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

//
//// Things to Remember:
//
// 1. Classes are not hoisted
// 2. Classes are first-class citizens (can be passed into functions and returned from functions)
// 3. Classes are executed in strict mode

// Using a Constructor Fn vs Classes is up to personal preference (as long as you understand Prototypal Inheritance)

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`This ${this.make} is now going ${this.speed}km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`This ${this.make} is now going ${this.speed}km/h`);
// };
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.brake();
// bmw.brake();
// bmw.brake();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
