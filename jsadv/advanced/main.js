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

//globalThis.name = "1234";
function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName();
function sayMyName() {
  console.log(`My name is ${this.name}`);
}

//checking if this branch was deleted
