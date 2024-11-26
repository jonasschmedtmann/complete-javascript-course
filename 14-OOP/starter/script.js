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

//coding challenge 1

const Car = function(make, speed) {
    this.make = make,
    this.speed = speed
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(this.make, this.speed);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.make, this.speed);
}

const bmw = new Car('bmw', 120);
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
