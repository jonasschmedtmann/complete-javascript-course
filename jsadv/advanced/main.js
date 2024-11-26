// ***Nested function - moves from most inner out to global scope
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// ***Closures -
// A closure is the combination of a function bundled together with references to its surrounding state. Closures are created every time a function is created, at function creation time

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer(); // 1
// outer(); // 1

// return function
// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner; // will return inner function and it's scope from outer function
// }
// const fn = outer();
// fn(); // 1
// fn(); // 2 ==> instead of just executing inner function within the outer function, we're returning it and then invoking it 2 times

// *** Function Currying - used for logs, info, error
// is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time
// function f(a, b, c) is transformed to f(a)(b)(c)
// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(2, 3, 5));

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }
// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

// // same as above
// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add4 = add3(5);
// console.log(add4);

// ***** this
// Order of precedence -> New binding, Explictit binding, Implicit binding, Default binding
//

// // Implicit binding
// person.sayMyName();

//  ***Explicit binding
// const person = {
//   name: "John",
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };

// sayMyName.call(person);

// ***New binding
// function Person(name) {
//   this.name = name;
// }
// const person1 = new Person("Batman");
// const person2 = new Person("Superman");
// console.log(person1.name, person2.name);

// ***Default binding

// globalThis.name = "Booo";
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }

// sayMyName();
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }

// ***Prototype -
// 1. helps to share properties and methods across instances
// function person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// const person1 = new person("Bruce", "Wayne"); // constructor function
// const person2 = new person("Clark", "Kent");

// person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };
// console.log(person1.getFullName());
// console.log(person2.getFullName());

// 2. Inheritance - prototypal inheritance => method is inherited through the prototype chain
/*
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

function Superhero(firstName, lastName) {
  Person.call(this, firstName, lastName);
  this.isSuperhero = true;
}
Superhero.prototype.fightCrime = function () {
  console.log("Fighting crime");
};

Superhero.prototype = Object.create(Person.prototype);

const batman = new Superhero("Bruce", "Wayne");
Superhero.prototype.constructor = Superhero; // otherwise JS thinks batman is created from Person(), but it was created from Superhero(). Superhero() inherited properties from Person()
console.log(batman.getFullName());
*/

// ***Class
/*
class Person {
  // creating class
  constructor(firstName, lastName) {
    // initialzing properties
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayMyName() {
    // adding method
    return this.firstName + " " + this.lastName;
  }
}

const classP1 = new Person("Bruce", "Wayne"); // creating instance of class
console.log(classP1.sayMyName());

class Superhero extends Person {
  // inherit using "extends"
  constructor(firstName, lastName) {
    super(firstName, lastName); // inherit using "super"
    this.isSuperhero = true;
  }

  fightCrime() {
    console.log("Fighting crime");
  }
}
const batman = new Superhero("Bruce", "Wayne");
console.log(batman.sayMyName());
*/

// Iterables and Iterators

//For..of loop
// const str = "Wayne";
// for (const char of str) {
//   console.log(char);
// }

// const arr = ["R", "o", "b", "e", "r", "t", "s"];
// for (const item of arr) {
//   console.log(item);
// }

// Iterable
// const obj = {
//   [Symbol.iterator]: function () {
//     let step = 0;
//     const iterator = {
//       next: function () {
//         step++;
//         if (step === 1) {
//           return { value: "Hello", done: false };
//         } else if (step === 2) {
//           return { value: "World", done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//     return iterator;
//   },
// };
// for (const word of obj) {
//   console.log(word);
// }

// ***Generator
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};
// for (const word of obj) {
//   console.log(word);
// }

function normalFunction() {
  console.log("Hello");
  console.log("World");
}
normalFunction();

// ***Generator function
function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generatorObject = generatorFunction();
for (const word of generatorObject) {
  console.log(word);
}
