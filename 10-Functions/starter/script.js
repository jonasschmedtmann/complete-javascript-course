// IIFE ****************************
/* 

const runOnce = function () {
  console.log('we can call this function as many times as we want');
};

runOnce();
runOnce();
runOnce();

// Immediately Invoked Function Expression IIFE ( () => {} )( callThatFunction );
(function () {
  console.log('this will run once and never again');
  const isPrivate = 23;
})();

// console.log(isPrivate); // ERROR bc data that is encapsulated within its scope is reffered to as "private"

(() => console.log('This will also only run once'))();

{
  const isPrivateBcConst = 12;
  var notPrivate = 46;
}
console.log(isPrivateBcConst); // uncaught referenceError bc const and let are block scoped variables -- more secure
console.log(notPrivate); // 46, var can be hoisted to the global scope-- not as secure

*/

// CLOSURES *******************

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
};

const booker = secureBooking();

// booker();
// booker();
// booker();

// DEFINITIONS OF WHAT A CLOSURE IS 
// a function has access to the variable environment (VE) of the execution context (EC) in which it was created
// Closure: VE attaches to the function, exactly as it was at the time and place the function was created
//  scope chain is preserved in a closure
// A closure is the closed over VE  of the EC in which a function was created. even after that EC is gone; 
// A closure gives a function access to all the variables of its parent function, even after that parent funciton has retured. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// A closure makes sure that a function doesn't lose connectino to variables that existed at the function's place of creation
// A closure is like a *backpack* that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created. 

// **** We do NOT have to manually create closures, this is a JS feature that happens automatically. We cannot access closed-over variables explicitly. A closure is NOT a tangible JS object. 

// console.dir(booker);
// [[Scopes]] >> 0: Closure (secureBooking) >> passengerCount: 3
// [[ means that it is an internal property that we cannot access on browser from our code ]] double square brackets


// more closure examples

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2)
  }
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2)
  }
}


// g();
// f();
// console.dir(f);

// // re-assigning f function
// h();
// f();
// console.dir(f)


// example 2
const boardPassengers = function (numOfPassengers, waitTime) {
  const perGroup = numOfPassengers / 3;
  setTimeout(() => {
    console.log(`we are now boarding all ${numOfPassengers} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000);
  console.log(`Will start boarding in ${waitTime} seconds`);
}


boardPassengers(180, 3);

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  })
})();