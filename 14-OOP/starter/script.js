'use strict';

////////////////////////////////////////////////////////
// 205. Using the New Keyword and Constructor Functions

// Constructor Function
// function Person(firstName, birthYear) {
// Instance Properties
// this.firstName = firstName;
// this.birthYear = birthYear;

// Don't create a method inside of a constructor function
// this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
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
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

// This declares methods on the prototype, not the instance itself
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   // Static Method Declaration in Classes
//   static hey() {
//     console.log('Hey there! 😀');
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Setting a Property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
//
//// Things to Remember:
//
// 1. Classes are not hoisted
// 2. Classes are first-class citizens (can be passed into functions and returned from functions)
// 3. Classes are executed in strict mode

// Using a Constructor Fn vs Classes is up to personal preference (as long as you understand Prototypal Inheritance)

////////////////////////////////////////////////////////
// 211. Getters and Setters

// const walter = new PersonCl('walter white', 1965);

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

////////////////////////////////////////////////////////
// 212. Static Methods

// Static Methods are methods that are only available on prototypes/constructors

// Declaring Static Methods
// Person.hey = function () {
//   console.log('Hey there! 😀');
// };
// Person.hey();
// PersonCl.hey(); // built with `static` keyword
// jonas.hey();

////////////////////////////////////////////////////////
// 213. Object.create()

// This method makes *any* object an Object Prototype
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = `Steven`;
// steven.birthYear = 2002;
// console.log(steven);
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1979);
// console.log(sarah);
// sarah.calcAge();

////////////////////////////////////////////////////////
// 215. Inheritance between "Classes"

// function Person(firstName, birthYear) {
//   // Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype); // this must come before special methods

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

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

///////////////////////////////////////
// Coding Challenge #2
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `This ${this.make} is now going ${this.speed}km/h (or ${
//         this.speed / 1.6
//       }mph)`
//     );
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(
//       `This ${this.make} is now going ${this.speed}km/h (or ${
//         this.speed / 1.6
//       }mph)`
//     );
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new Car('Ford', 120);

// console.log(ford.speed);
// console.log(ford.speedUS);

// ford.accelerate();
// console.log(ford.speedUS);
// ford.accelerate();
// console.log(ford.speedUS);
// console.log(`I just set the speed to 50mph`);
// ford.speedUS = 50;
// console.log(ford.speed);
// console.log(ford.speedUS);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function (hardBrake = false) {
  hardBrake && this.speed > 0
    ? (this.speed -= 20) &&
      console.log(`${this.make} is going at ${this.speed} km/h`)
    : this.speed > 0
    ? (this.speed -= 5) &&
      console.log(`${this.make} is going at ${this.speed} km/h`)
    : console.log('The car is stopped.');
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge / 100;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo / 100;
  console.log(
    `${this.make}'s battery has been charged to ${this.charge * 100}%.`
  );
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 0.01;
  console.log(
    `${this.make} is going ${this.speed} km/h with a charge of ${
      this.charge * 100
    }%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(
  `Initial State: ${tesla.make} is going ${tesla.speed} km/h with a charge of ${
    tesla.charge * 100
  }%`
);
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake(true);
tesla.brake(true);
tesla.brake(true);
tesla.brake(true);
tesla.brake(true);
tesla.brake(true);
tesla.brake(true);
tesla.brake(true);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
