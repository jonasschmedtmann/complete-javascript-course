'use strict';

//Exercise 1 - Use Promise.resolve(value) to create a promise that will resolve with the value 3.

console.log(Promise.resolve(3))



//Exercise 2 - Use Promise.reject(error) to create a promise that will reject with the string "Boo!"

//Exercise 3 - You have the outline of a function makePromiseWithConstructor(itShouldResolve)
//Use the Promise constructor to create a promise that will:
//resolve if itShouldResolve is truthy
//reject if itShouldResolve is falsy

//Exercise 4 - This is a common use of the Promise constructor. If you want to simulate waiting for a value, a common technique is to create a function like the following. It simply accepts a value, and a delayInMs, then returns a promise that will resolve with that value after that delay.