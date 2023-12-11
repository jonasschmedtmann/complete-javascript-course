'use strict';

// What is OOP - Programming paradigm (how we write and organize code) based on the concept of objects. In OOP, objects are self-contained pieces/blocks of code,like small little applications of their own. In OOP, we use objects as building blocks of application and make objects interact with each other

//These interactions happen through a public interface, usually an API which is conprised of methods that the code outside of the object can access and use to communicate with the object

//Use objects to describe real world or abstract features
//With objects, we pack all of the data(properties) and corresponding behavior(methods) into one block

// OOP was designed with the goal of organizing code and maintaining. It has become the largest and most popular programming paradigm

// CLASS - This is a like a blueprint that can used to create new objects programatically based on the rules describes in the class

//Instance - All objects created from a Class blueprint is considered an instance of that class

// 4 Fundamental Principles of OOP: They can also be used outside of OOP but they are espcially important in OOP --------------------------------->

//1. Abstraction: Hiding the details that don't matter from a higher level overview perspective of the thing we're implementing. Hiding away details that are not necessary for the normal interaction with something

//2. Encapsulation: To keep some properties and methods private inside the class so they are not accessible from outside the class. Prevents external code from accidently manipulating our internal state.  As opposed to this, some methods can be exposed as a public interface(API).

//3. Inheritance: Parent child class relationship where the child inherits from the parent class and then extends the functionality (properties/methods) of the parent class

//4. Polymorphism: A child class can overwrite a method it inherited from a parent class

// ------------------------- OOP in JavaScript -----------------------//

//Classic OOP classes:
//Instances - objects that are created from a class blueprint. We say objects are instantiated from a class. Here, objects copy the methods from the class

//In JavaScript OOP:
// Prototype - all objects come from a prototype. And that prototype provides properties and methods that all objects can use. This inherantace behavior is called Prototypal Inheritance. Here objects DELEGATE their methods to the prototype

//Three ways of implementing Prototypal inheritance in JavaScript
//1. Constructor Functions: programmatically creating objects from a function, which will also set the object's prototype. This is how built-in-objects like Arrays, Maps, and Sets are actually implemented. Oldest tool.

// 2. ES6 Classes - more modern alternative to constructor function syntax. Behind the scenes, they work exactly like constructor functions, and are actually created behind the scenes with constructor functions. ES6 classes do NOT behave like classes in "classical OOP".

// Object.create(): eaiest and most straight forward way of linking an object to a prototypal object but least used method

// --------------- Constructor Functions and the new Operator ----------- //

// Constructor function: It is just like a regular function except we call the constructor function with the new keyword. The convention is the start the function with a capital letter. I can use a function declaration or expression but NOT arrow function because the arrow function does not have its own this keyword

const Person = function (firstName, birthYear) {
  //INSTANCE Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //INSTANCE Methods
  //Never create this inside the constructor function itself. Instead we are going to use prototypes and prototypal inheritance
};

// new - The new keyword/operator calls the constructor function. Behind the scenes there are 4 steps that occur when we call the a function with the new operator.

//STEPS:
//1. A new empty object {} is created
//2. The function is called and the this keyword will be set to this newly created object. this = {}
//3. This newly created object is linked to a prototype (The  __proto__ property is added to the object and sets it's value to the prototype property of the constructor function. This is how JavaScript knows interally that the object is connect to a specific prototype)
//4. Function automatically returns the newly created object, with whatever we add to the object

const jonas = new Person('Jonas', 1991);
const demi = new Person('Demi', 1988);
// console.log(jonas, demi);

// instanceof - this will return true or false as to if an object is an instance of a certain prototype
const jay = 'Jay';
// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// --------------------------- Prototypes ----------------------------- //
//Each and every function in JavaScript has a property called prototype, and that includes of course constructor functions

//Every object created by a certain constructor function will get access to all of the methods and properties that we define on the constructor's prototype property

//This is the prototype property of the constructor function ----> And it is on this prototype that I can defined methods. There will be only ONE function, NO copies are made to the instances, they simply re-use/inherit the function that lives on the prototype on themselves

//This works because any object has access to the methods and properties of it's prototype
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

// demi.calcAge();
// jonas.calcAge();
// console.log(jonas);

//.__proto__ - this property will return the actual Prototype.

// *** The prototype of the object IS the prototype property of the constructor function ***

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); // true

// constructorFunction.prototype.isPrototypeOf(obj) - this will return true if that constructor functions prototype property is the prototype of the passed in object

// console.log(Person.prototype.isPrototypeOf(jonas)); //true

//Setting properties on the prototype itself. These will appear NOT on the instance but on the prototype and are therefore inherited

//OWNED properties are properties that are directly on the object itself. When adding properties to the prototype, the properties will be set on the prototype and not the object directly and so these properties are not owned by the object but rather inherited properties
//Inherited property
Person.prototype.species = 'Homo Sapien';
// console.log(jonas.species);
// console.log(jonas);

//Checking if avproperty is owned by the object

// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species')); // false

// --------------- Prototypal Inheritance and The Prototype Chain --------- //

//Because all objects have a prototype, and the prototype property on the constructor function is a regular object, the prototype of Constructor.prototype will be Object.prototype because this object would have been built with the built in object constructor function --> This is the SAME function that is called behind the scenes when I create an object with literal syntax {}. {} is a shortcut to writing new Object.

//This link between the object jonas, Person.prototype, and Object.prototype is what is considered the Prototype chain

// console.log(Person.prototype.__proto__);
// console.log(Object.prototype === Person.prototype.__proto__);

//Object.prototype is usually the top of the prototype chain and Object.prototype's prototype will be null, marking the end to the prototype chain.

//Like the scope chain, if JavaScript cannot find a property or method in a certain object, it looks up to the next prototype in the prototype chain to look for it there
// console.log(Object.prototype.__proto__); //null
// console.log(Object.prototype.isPrototypeOf(Person.prototype));

// ------------ Prototypal Inheritance on Build-In Objects ---------------- //

// console.log(jonas.__proto__.__proto__);

//Have to use console.dir() to see this
// console.dir(Person.prototype.constructor);

//Example with arrays
//Using [] is a shortcut for new Array
// const arr = [2, 5, 7, 2, 8, 9, 2, 1];

// console.log(arr.__proto__.__proto__);

//Just to show this can be done as a fun experiment but don't do this
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

//Example with HTML element
// console.dir() - It is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.

//HTML elements are objects too so all of this applies to them, from HTML Element to Element to Node
const h1 = document.querySelector('h1');

//functions are also objects so all of this applies to them too
// console.dir(x => x + 1);

//------------------------ ES6 Classes --------------------------- //

// Classes in JavaScript do NOT work the same as classic classes. They are really "syntatic sugar" and use prototypal inheritance behind the scenes.

// *** Behind the scenes, classes are still functions, implemented by the constructor function behind the scenes and that's why we have class expressions and class decalrations.

// class Expression
// const PersonEx = class {};
// class Declaration

class PersonCl {
  //This is the constructor function that gets called with the new keyword/operator when creating a new instance
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // All methods should be created outside of the constructor function and these functions will be on the prototype object, NOT the object itself.
  calcAge() {
    return 2024 - this.birthYear;
  }

  //Note there are no commas between methods

  greet() {
    console.log(`Hey ${this.fullName}! You are ${this.calcAge()} years old.`);
  }

  get age() {
    const today = new Date().getFullYear();
    return today - new Date(this.birthYear);
  }
  //This set/get pattern is very important for trying to set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert('Please enter both FIRST and LAST name');
    }
  }

  get fullName() {
    return this._fullName;
  }
  // Static method with the static keyword

  static hey() {
    console.dir(this);
    console.log('Hey there!');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.fullName);

const max = new PersonCl('Max Waters', 1988);

// console.log(max.fullName);
// console.log(jessica.calcAge());
// console.log(jessica.__proto__ === PersonCl.prototype);

//Even with this ES6 Classes, I can still add methods directly on the PersonCl.prototype object

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}! You are ${this.calcAge()} years old.`);
// };

// jessica.greet();

// Some facts to keep in mind about ES6 classes
//1. Classes are NOT hoisted even if class declarations
//2. Classes are first class functions, can pass them into functions and return them from functions
//The body of a class is ALWAYS executed in strict mode, even if not activated for the entire script

// --------------------- Setters and Getters --------------------- //

// Every object in JS can have setter and getter properties. These special properties are called "Accessor properties" while the more normal properties are called "Data properties"

//Getters and Setters are functions that get and set a value, but on the outside they look like regular properties

//object literal example:
//You can have just a getter or just a setter. You do not have to have both

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.at(-1);
  },

  //Setter function must have at least one parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

// We don't call the method, we just use it as a property
// console.log(account.latest);

//How to pass param into the setter
account.latest = 50;

// console.log(account.movements);

// Setter and Getters can be very useful for data validation

//----------------- Static Methods ---------------------------- //

// A static method is a method that lives on the constructor function, NOT constructorFunction.prototype, so these methods are NOT inherited by the instances an can only be called on the constructor function. The this keyword in the static method will point to the constructor funtion itself, because that is the object that is calling the method

//This is a static method created on a constructor function

Person.hey = function () {
  console.dir(this);
  console.log('Hey there!');
};

//Calling static methods

// Person.hey();
// PersonCl.hey();

//------------------- Object.create() --------------------------- //
