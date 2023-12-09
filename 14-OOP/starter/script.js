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
//3. This newly created object is linked to a prototype
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

//This is the prototype property of the constructor function ---->
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

demi.calcAge();
jonas.calcAge();
