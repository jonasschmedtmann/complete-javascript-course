'use strict';

// Contructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// Prototypes of Objects (ryan), not Person
Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};
Person.prototype.species = 'Homo Sapiens';
// Instance of 'class' Person
const ryan = new Person('Ryan', 1995);
console.log(ryan instanceof Person);

console.log(ryan.calcAge());
console.log(ryan.hasOwnProperty('firstName'));
console.log(ryan.hasOwnProperty('species'));

console.log(ryan.__proto__.__proto__);
console.log(Person.prototype.constructor);
