'use strict';
/*
//Constructor functions - normal function. The  only diference is we call the constructor with the new Operator

//Arrow function will not work because of the this keyword
const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create a method inside a constructor function
  // this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  // }
};

const angela = new Person('Ângela', '1992');
console.log(angela);
//1. New {} is created
//2. Functions is called, this = {}
//3.{} linked to prototype
// function automatically return {}

const matilda = new Person('Matilda', '2017');
const jack = new Person('Jack', '2000');
console.log(matilda, jack);

console.log(angela instanceof Person);

//Prototypes
//All objects created in person can reuse the function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

angela.calcAge();
console.log(angela); //first name + birthyear

//The prototype is the same as the Person object
console.log(matilda.__proto__);
console.log(matilda.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(angela));

Person.prototype.species = 'Homo Sapiens';

console.log(angela, matilda);
console.log(angela.hasOwnProperty('firstName'));
console.log(angela.hasOwnProperty('species')); //This is only on the Person property

console.log(angela.__proto__);
console.log(angela.__proto__.__proto__);
console.log(angela.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 7, 8, 2, 3, 8]; //new Array === []
//We have all the array methods in there
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__); //the prototype is an object

//Don't do this cause the next version of JS can add a new method with the same name that works differently
//When you work on a team if other person creates other method with the same name it will have bugs
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

//Challenge 1
//1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}`);
};

const mercedes = new Car('Mercedes', 120);
console.log(mercedes);

const BMW = new Car('BMW', 95);

BMW.accelarate();
BMW.accelarate();
BMW.accelarate();
BMW.break();


/////ES6 CLASSES////

//Class expression - still functions
//const PersonCl = class {}

//Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //all of the methods written outside the constructor goes to the prototype and not the objects itself
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`The ${name} name is not a full name`);
  }

  get fullName(){
    return this._fullName;
  }

  //Static method - only acessable from constructor!
  static hey () {
        console.log('Hey there! :D'); 
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); //true

jessica.greet();

PersonCl.hey();
jessica.hey() //doesn't work!



//1. Classes are NOT hoisted - Cannt use them before they are declared in the code
//2. Classes are first class citizens - Can pass them into functions and retunr them from functions
//3. Classes are excuted in strict mode

//////Setter/Getter - functions that get and set a value; don't need to create methods
//const walter = new PersonCl('Walter wyat', 1965);

const account = {
  owner: 'jonas',
  movements: [200, 100, 500, 300],

  //usefull when you want to read something as a property but need to do math first
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


///////Object create/////
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__ === PersonProto); //true

const sara = Object.create(PersonProto);
sara.init('Sara', 1999);
sara.calcAge();


/////////Challenge 2////////

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelarate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}`);
  }
}

const ford = new CarCl('Ford', 120);


console.log(ford.speedUS);
ford.accelarate();
ford.accelarate();
ford.break();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);


//////Inheritance between Classes: Constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
//with this student inherits from person.prototype. Create before adding methods
//if it was after object.create would overwrite the method
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);



/////Clallenge 3 /////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}`);
};

const Ev = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

Ev.prototype.accelarate = function () {
    this.speed += 20;
    this.charge --;
    console.log(`${this.make} going at ${this.speed}, with a charge of ${this.charge}`);
}


const tesla = new Ev('Tesla', 120, 23);
console.log(tesla);

tesla.accelarate();
tesla.accelarate();
tesla.accelarate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);


///////Inheritance between classes/////
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`The ${name} name is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there! :D');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();


/////Inheritance between classes : Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


//////Encapsulation and data privacy //////////
//keep some methods and properties private

//Class fields
// 1 - Public fields - a property that will be on all instances (movements and locale)
//2 - Private fields - properties not acessible from the outside
//3 - Public methods
//4 - Private methods
//There's also the static version
class Account {
  //1 - Public fields (instances)
  locale = navigator.language;

  //2 - Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for oppening an account,${owner}`);
  }

  //3 - Public methods
  //Public Interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
  static helper() {
    console.log('Helper');
  }

  // 4 - Private methods - is not implememted in google chrome
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

//Chaining methods - never forget to return this! Or else it gets undefinned
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());


/////Clallenge 4 /////
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}`);
    return this;
  }
}

class EvCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelarate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}`
    );
    return this;
  }
}

const tesla = new EvCl('Tesla', 120, 23);
tesla.accelarate().accelarate().chargeBattery(90).accelarate().brake();
console.log(tesla);
*/
