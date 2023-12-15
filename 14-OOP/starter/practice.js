'use strict';

// ---------------- Code Challenge #1 ------------- //

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
  console.log(this.speed);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();

// ------------------- Code Challenge #3 ---------------------- //
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  if (typeof chargeTo !== 'number') return;
  if (chargeTo >= 0 && chargeTo <= 100) {
    this.charge = chargeTo;
  }
  if (this.charge === 100) {
    console.log(`${this.make} 100% fully charged`);
  } else console.log(`${this.make} is ${this.charge}% charged`);
};

//Polymorphism example: Child class overriding method from parent class
EV.prototype.accelerate = function () {
  if (this.charge > 0) {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going ${this.speed} is charged ${this.charge}%`);
  } else if (this.charge <= 0) {
    console.log(`${this.make} needs to be charged`);
  }
};

const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(100);
// tesla.chargeBattery(80);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// console.log(tesla);
// ------------------ Code Challenge #2 ----------------------- //

//1.

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  brake() {
    this.speed -= 5;
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedInMiles) {
    this.speed = speedInMiles * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
// ford.accelerate();
// console.log(ford);
ford.speedUS = 160;
// console.log(160 * 1.6);
// console.log(ford.speedUS);

// ------------------ Code Challenge #4 ----------------------- //

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    if (typeof chargeTo !== 'number') return;
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
// console.log(
//   rivian.accelerate().accelerate().brake().chargeBattery(80).accelerate()
// );

// console.log(rivian.speedUS);
