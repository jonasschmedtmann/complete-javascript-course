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
// Static Method
Person.hey = function () {
  console.log('Hey 👋');
};

// Instance of 'class' Person
const ryan = new Person('Ryan', 1995);
console.log(ryan instanceof Person);

console.log(ryan.calcAge());
console.log(ryan.hasOwnProperty('firstName'));
console.log(ryan.hasOwnProperty('species'));

console.log(ryan.__proto__.__proto__);
console.log(Person.prototype.constructor);

// Class inheritance
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi my name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('mike', 2000, 'javaScript');
mike.introduce();
console.log(`${mike.firstName}'s age is ${mike.calcAge()}`);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed 
property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' 
multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} braking to ${this.speed}`);
};
//
//const ryansCar = new Car('Toyota', 35);
//ryansCar.accelerate();
//ryansCar.brake();

// class expression
//const idClass = class {}

// class declaration
class idPerson {
  constructor(name, birthYear) {
    this.fullName = name;
    this.birthYear = birthYear;
  }
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  get fullName() {
    return this._fullName;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  static hey() {
    console.log('Hey too 👋');
  }
}

class idStudent extends idPerson {
  constructor(name, birthYear, course) {
    super(name, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`Hi my name is ${this.name} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `My name is ${this.fullName} and Im ${
        new Date().getFullYear() - this.birthYear
      }`
    );
  }
}
const jessica = new idPerson('Jessica Davis', 1981);
console.log(jessica.calcAge());
const martha = new idStudent('Martha Kent', 1965, 'Art Design');
martha.calcAge();
/*
 * 1. Classes are not hoisted
 * 2. Classes are first-class citizens
 * 3. Classes are executed in strict mode
 */

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

console.log(jessica.fullName);
Person.hey();
idPerson.hey();

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (name, birthYear, course) {
  PersonProto.init.call(this, name, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`Hi my name is ${this.name} and I study ${this.course}`);
};
const steven = Object.create(PersonProto);
const jay = Object.create(StudentProto);

jay.init('Jay', 1995, 'js');
jay.calcAge();
jay.introduce();

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h 
(divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and 
with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
//class idCar {
//  constructor(make, speed) {
//    this.make = make;
//    this.speed = speed;
//  }
//  accelerate() {
//    this.speed += 10;
//    console.log(`Accelerating to ${this.speed}km/h`);
//  }
//  brake() {
//    this.speed -= 5;
//    console.log(`Braking to ${this.speed}km/h`);
//  }
//  get speedUS() {
//    return this.speed / 1.6;
//  }
//  set speedUS(speed) {
//    this.speed = speed * 1.6;
//  }
//}
//
//const tesla = new idCar('Tesla', 45);
//tesla.accelerate();
//tesla.brake();
//console.log(tesla.speedUS);
//tesla.speedUS = 45;
//console.log(tesla.speed);
//console.log(tesla.speedUS);
//
///////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a 
  CHILD "class" of Car. Besides a make and current speed, the EV also has the 
  current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and 
  sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, 
  and decrease the charge by 1%. Then log a message like this: 'Tesla going at 
  140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 
  'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 
  'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
//const EV = function (make, speed, charge = 55) {
//  Car.call(this, make, speed);
//  this.charge = charge;
//};
//// Link prototypes
//EV.prototype = Object.create(Car.prototype);
//
//EV.prototype.chargeBattery = function (chargeTo) {
//  this.charge = chargeTo;
//};
//EV.prototype.accelerate = function () {
//  this.speed += 20;
//  this.charge -= 1;
//  console.log(
//    `${this.make} going at ${this.speed}km/h, whis a charge of ${this.charge}%`
//  );
//};
//
//const tesla = new EV('Tesla', 50, 65);
//tesla.accelerate();
//tesla.brake();
//
//document.addEventListener('keydown', function (e) {
//  e.preventDefault();
//  if (e.key == 'ArrowUp') tesla.accelerate();
//  if (e.key === 'ArrowDown') tesla.brake();
//});

class idAccount {
  // 1) Public Fields
  local = navigator.language;
  // 2) Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }
  // 3) Public Methods
  getMovements() {
    return this.#movements;
  }
  deposit(amount) {
    this.#movements.push(amount);
    return this;
  }
  withdraw(amount) {
    this.#movements.push(-amount);
    return this;
  }
  requestLoan(amount) {
    if (this._approveLoan(amount)) {
      this.deposit(amount);
      console.log(`Loan Approved...`);
    }
  }
  static helper() {
    console.log('This is a static function for the object.');
  }
  // 4) Private Methods
  _approveLoan(amount) {
    return true;
  }
}

const acc1 = new idAccount('Josh', 'USD', 4444);
acc1.deposit(100);
acc1.withdraw(50);
acc1.deposit(1).deposit(2).withdraw(3);
acc1.requestLoan(100);
console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' 
child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods 
of this class, and also update the 'brake' method in the 'CarCl' class. They 
experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class idCar {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Accelerating to ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`Braking to ${this.speed}km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class idEV extends idCar {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}km/h, whis a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
const rivian = new idEV('Rivian', 120, 23);
rivian.accelerate().brake().accelerate();
console.log(rivian.speedUS);
rivian.speedUS = 70;
console.log(rivian.speedUS);
