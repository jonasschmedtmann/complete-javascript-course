'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear
}
//prototypal inheritance
const jon = new Person('Joe', 1111);
console.log(jon)
Person.prototype.calcAge = function() {
    console.log("hi" + this.firstName)
}
console.log(Person.prototype);
console.log(jon.calcAge());

