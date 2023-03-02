'use strict';

/* 
    208: Constructor functions and the new operator
*/

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const vishu = new Person('Vishu', 1992);
const vasudha = new Person('Vasudha', 1997);
console.log(vishu);

/* 
    1: New {} is created
    2: function is called, this = {}
    3: {} is linked to prototype
    4: function returns the object
*/