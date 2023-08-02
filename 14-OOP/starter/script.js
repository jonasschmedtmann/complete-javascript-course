'use strict';
'use strict';
/*
(Principles of OOP):

1 Abstraction
    Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation
2 Encapsulation
    Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API: applicaiton programming interface)
3 Inhertiance
    Making all properties and methods of a certain class available to a child class, forminga hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships
4 Polymorphism
    A child class can overwrite a method it inherited from a parent class


(3 Ways of Implementing Prototypal Inheritance in JS):
1 Constructor functions
    - technique to create objects from a function
    - how built-in objects like Arrays, Maps or Sets are actually implemented
2 ES6 Classes
    - Modern alternative to constructor function syntax
    - "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions
    - ES6 classes do NOT behave like classes in "classical OOP"
3 Object.create()
    - Easiest most straightforward way of linking an object to a prototype object
*/



// // constructor functions do not work with arrow functions
// const Person = function (fName, birthYear) {
//     // Instance properties
//     this.fName = fName;
//     this.birthYear = birthYear;

//     // never do this, otherwise you're attaching this method to every instance of Person.
//     // this.calcAge = function () {
//     //     console.log(2023 - this.birthYear);
//     // };
// }

// // How keyword 'new' works to create new object using prototypes
// // 1. New {} is created
// // 2. function is called, this = Person {}
// // 3. {} linked to prototype
// // 4. function automatically returns {not empty}
// const kass = new Person('Kass', 1996);
// const matilda = new Person('Matilda', 2000);
// const jack = new Person('Jack', 1983);

// console.log({ kass, matilda, jack });

// // Prototypes

// // one copy of the method attached to the Person constructor is a better approach than attaching the method to every Person instance
// Person.prototype.calcAge = function () {
//     console.log(2023 - this.birthYear)
// };
// // using prototypal inheritance, we can attach the calcAge method to the Person prototype

// console.log(Person.prototype);

// kass.calcAge();

// Person.prototype.species = 'Homosapiens';
// console.log({ kass, matilda }); // under [[Prototype]]
// console.log(kass.species, matilda.species); //Homosapiens Homosapiens

// console.log(kass.hasOwnProperty('species')); // false


// jack.species = 'homosapien';
// console.log(jack)
// console.log(jack.hasOwnProperty('species')); // true

// // Object.prototype (top of prototype chain)
// console.log(kass.__proto__); // person constructor
// console.log(kass.__proto__.__proto__); // object constructor
// console.log(kass.__proto__.__proto__.__proto__); // null

// const arr = [2, 3, 4, 5, 6, 6, 6, 2, 3, 3]; // new Array === []
// console.log(arr.__proto__); // Array constructor, why arrays can inherit built-in methods
// console.log(arr.__proto__ === Array.prototype); // true


// // you can now call the unique method on any array
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }

// console.log(arr.unique());




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

// CONSTRUCTOR FUNCTION
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h`);
}

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);
bmw.accelerate();
merc.accelerate();

bmw.brake();
bmw.brake();
bmw.brake();
*/

/*

///////////////////   ((((( FUNCTION SYNTAX )))))
Function Declaration:
  function someName (){
    doSomething
  };

Function Expression:
  const someName = function(){
    doSomething
  };

Arrorw Function: 
  const someName = () => {
    doSomething
  };


///////////////////   ((((( CLASSES SYNTAX )))))
  1 Class Declaration:
  class ClassName {}; 

  2 Class Expression:
  const ClassName = class {};


///////////////////   (((( Key Notes ))))
1 Classes are NOT hoisted
    function declarations are hoisted so we can use them before they are declared. with classes, this doesn't work-- even if they are class declarations)
2 Classes are first-class citizens 
    (they are a special functions so they can be passed into functions and return them from functions)
3 Classes are executed in strict mode

///////////////////  (((( Constructor Functions vs Classes ))))
- Contructor functions are NOT old or deprecaded therefore it's more personal preference
- Classes are a bit more organized with methods and constructor in one place
- But mostly--- personal preference
*/

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  };

  // instance methods
  // Methods will be added to the .prototype property of the PersonCl class which is going to be the prototype of the objects created by that class
  ageBy2050() {
    console.log(2050 - this.birthYear);
  };

  // **** doing this 
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get currentAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  // setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name; //convension to use _ to avoid constructor issue
    } else {
      alert(`${name} is not a full name!`)
    }
  }

  // get so that when we call the property of .fullName, we get the correct property name of 'fullName'
  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there 👋🏼');
    console.log(this);
  }
};

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);

jessica.ageBy2050();
console.log(jessica.currentAge);
console.log(jessica._fullName); // created by setter
console.log(jessica.fullName); // re-created by getter

PersonCl.hey();

/*
// proof that 'class' is just hiding the true nature of prototypal inheritance 
// we can still add a method called 'greet' using the .prototype approach
// this is the same as doing **** (above example)

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

console.log(jessica.__proto__ === PersonCl.prototype); // true
*/
jessica.greet();

const walter = new PersonCl('Walter White', 1965);
console.log(walter); // notice that birthYear and _fullName have been assigned the correct values, property of currentAge and fullName (from getter)




const account = {
  owner: 'kass',
  movements: [200, 300, 540, 150],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // any setter neeeds to have exactly ONE parameter
  // it is not mandatory to create both a getter and setter for the same property, can do any or both
  set latest(mov) {
    this.movements.push(mov);
  }
};


// getters and setters act like properties rather than methods
console.log(account.latest)
// they can be set values like regular properties
account.latest = 50;
console.log(account.movements)
console.log(account.latest); // 50














///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

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

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/