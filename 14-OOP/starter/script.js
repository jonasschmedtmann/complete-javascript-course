'use strict';

/* 
    208: Constructor functions and the new operator
*/

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // // Never do this as it creates multiple copies of the same function
    // this.calcAge = function () {
    //     return 2023 - birthYear;
    // };
}

const vishu = new Person('Vishu', 1992);
const vasudha = new Person('Vasudha', 1997);
console.log(vishu);
console.log(vasudha);

/* 
    1: New {} is created
    2: function is called, this = {}
    3: {} is linked to prototype, sets __proto__ property to that of constructor's prototype
    4: function returns the object
*/

/* 
    209: Prototypes
*/

console.log(
    Person.prototype
);
Person.prototype.calcAge = function () {
    return 2023 - this.birthYear;
};

console.log(vishu.calcAge());
console.log(vishu.__proto__);
console.log(vishu.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(vishu));

Person.prototype.species = 'Homo Sapiens';
console.log(vishu.species);
console.log(vasudha.species);

/* 
    211: Prototypal inheritance on built in objects
*/

console.log(vishu.__proto__);
console.log(vishu.__proto__.__proto__);
console.log(vishu.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 5, 6, 3, 2, 1];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

// add new method to array prototype -- not a good practice, but just for fun
Array.prototype.unique = function () {
    return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1)