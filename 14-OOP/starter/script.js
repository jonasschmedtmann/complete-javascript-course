'use strict';
///////////////////////////////////////
///////////////////////////////////////
// NEW SECTION
///////////////////////////////////////
///////////////////////////////////////
/*
(Principles of OOP):

1 Abstraction
    Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation
2 Encapsulation
    Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API: applicaiton programming interface)
3 Inhertiance
    Making all properties and methods of a certain class available to a child class, forminga hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships
4 Polymorphism
    A child class can overwrite a method it inherited from a parent class


(3 Ways of Implementing Prototypal Inheritance in JS):
1 Constructor functions
    - technique to create objects from a function
    - how built-in objects like Arrays, Maps or Sets are actually implemented
2 ES6 Classes
    - Modern alternative to constructor function syntax
    - "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions
    - ES6 classes do NOT behave like classes in "classical OOP"
3 Object.create()
    - Easiest most straightforward way of linking an object to a prototype object
*/



// // constructor functions do not work with arrow functions
// const Person = function (fName, birthYear) {
//     // Instance properties
//     this.fName = fName;
//     this.birthYear = birthYear;

//     // never do this, otherwise you're attaching this method to every instance of Person.
//     // this.calcAge = function () {
//     //     console.log(2023 - this.birthYear);
//     // };
// }

// // How keyword 'new' works to create new object using prototypes
// // 1. New {} is created
// // 2. function is called, this = Person {}
// // 3. {} linked to prototype
// // 4. function automatically returns {not empty}
// const kass = new Person('Kass', 1996);
// const matilda = new Person('Matilda', 2000);
// const jack = new Person('Jack', 1983);

// console.log({ kass, matilda, jack });

// // Prototypes

// // one copy of the method attached to the Person constructor is a better approach than attaching the method to every Person instance
// Person.prototype.calcAge = function () {
//     console.log(2023 - this.birthYear)
// };
// // using prototypal inheritance, we can attach the calcAge method to the Person prototype

// console.log(Person.prototype);

// kass.calcAge();

// Person.prototype.species = 'Homosapiens';
// console.log({ kass, matilda }); // under [[Prototype]]
// console.log(kass.species, matilda.species); //Homosapiens Homosapiens

// console.log(kass.hasOwnProperty('species')); // false


// jack.species = 'homosapien';
// console.log(jack)
// console.log(jack.hasOwnProperty('species')); // true

// // Object.prototype (top of prototype chain)
// console.log(kass.__proto__); // person constructor
// console.log(kass.__proto__.__proto__); // object constructor
// console.log(kass.__proto__.__proto__.__proto__); // null

// const arr = [2, 3, 4, 5, 6, 6, 6, 2, 3, 3]; // new Array === []
// console.log(arr.__proto__); // Array constructor, why arrays can inherit built-in methods
// console.log(arr.__proto__ === Array.prototype); // true


// // you can now call the unique method on any array
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }

// console.log(arr.unique());




///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

// CONSTRUCTOR FUNCTION
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h`);
}

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);
bmw.accelerate();
merc.accelerate();

bmw.brake();
bmw.brake();
bmw.brake();

*/
///////////////////////////////////////
///////////////////////////////////////
// NEW SECTION
///////////////////////////////////////
///////////////////////////////////////
/*

///////////////////   ((((( FUNCTION SYNTAX )))))
Function Declaration:
  function someName (){
    doSomething
  };

Function Expression:
  const someName = function(){
    doSomething
  };

Arrorw Function:
  const someName = () => {
    doSomething
  };


///////////////////   ((((( CLASSES SYNTAX )))))
  1 Class Declaration:
  class ClassName {};

  2 Class Expression:
  const ClassName = class {};


///////////////////   (((( Key Notes ))))
1 Classes are NOT hoisted
    function declarations are hoisted so we can use them before they are declared. with classes, this doesn't work-- even if they are class declarations)
2 Classes are first-class citizens
    (they are a special functions so they can be passed into functions and return them from functions)
3 Classes are executed in strict mode

///////////////////  (((( Constructor Functions vs Classes ))))
- Contructor functions are NOT old or deprecaded therefore it's more personal preference
- Classes are a bit more organized with methods and constructor in one place
- But mostly--- personal preference
*/

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   };

//   // instance methods
//   // Methods will be added to the .prototype property of the PersonCl class which is going to be the prototype of the objects created by that class
//   ageBy2050() {
//     console.log(2050 - this.birthYear);
//   };

//   // **** doing this 
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get currentAge() {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.birthYear;
//   }

//   // setting a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name; //convension to use _ to avoid constructor issue
//     } else {
//       alert(`${name} is not a full name!`)
//     }
//   }

//   // get so that when we call the property of .fullName, we get the correct property name of 'fullName'
//   get fullName() {
//     return this._fullName;
//   }

//   // static method
//   static hey() {
//     console.log('Hey there 👋🏼');
//     console.log(this);
//   }
// };

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);

// jessica.ageBy2050();
// console.log(jessica.currentAge);
// console.log(jessica._fullName); // created by setter
// console.log(jessica.fullName); // re-created by getter

// PersonCl.hey();

// /*
// // proof that 'class' is just hiding the true nature of prototypal inheritance 
// // we can still add a method called 'greet' using the .prototype approach
// // this is the same as doing **** (above example)

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// console.log(jessica.__proto__ === PersonCl.prototype); // true
// */
// jessica.greet();

// const walter = new PersonCl('Walter White', 1965);
// console.log(walter); // notice that birthYear and _fullName have been assigned the correct values, property of currentAge and fullName (from getter)




// const account = {
//   owner: 'kass',
//   movements: [200, 300, 540, 150],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   // any setter neeeds to have exactly ONE parameter
//   // it is not mandatory to create both a getter and setter for the same property, can do any or both
//   set latest(mov) {
//     this.movements.push(mov);
//   }
// };


// // getters and setters act like properties rather than methods
// console.log(account.latest)
// // they can be set values like regular properties
// account.latest = 50;
// console.log(account.movements)
// console.log(account.latest); // 50


// const PersonProto = {
//   calcAge() {
//     const currYear = new Date().getFullYear();
//     console.log(currYear - this.birthyear)
//   },

//   init(firstName, birthyear) {
//     this.firstName = firstName;
//     this.birthyear = birthyear;
//   }
// };

// const steve = Object.create(PersonProto);
// console.log(steve);

// steve.name = 'Steve';
// steve.birthyear = 1976;
// steve.calcAge();

// const sara = Object.create(PersonProto);
// sara.init('Sara', 2002);
// sara.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating to ${this.speed} km/h`)
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking to ${this.speed} km/h`)
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
};

const ford = new Car('Ford', 120);
console.log(ford.speedUS) // using getter to 'get' property information
ford.accelerate();
ford.brake();

ford.speedUS = 50; // using setter to set 'speed' property to US Speed
console.log(ford)

*/
///////////////////////////////////////
///////////////////////////////////////
// NEW SECTION 
// INHERITANCE BETWEEN "CLASSES" USING CONSTRUCTOR FUNCTIONS
///////////////////////////////////////
///////////////////////////////////////

/*
// Inheritance Between 'Classes': Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};


const Student = function (firstName, birthYear, course) {
  // use .call to link the 'this' keyword to Student and inherit the Person constructor
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes ***
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hey, my name is ${this.firstName} and I'm studying ${this.course}.`)
}

const mike = new Student('Mike', 2000, 'Computer Science');
mike.introduce();

// *** because of linked prototype, we can access calcAge() method that exists on the Person prototype
mike.calcAge();
console.log(mike instanceof Student); // true bc 'const mike = new Student()'
console.log(mike instanceof Person); // *** true bc of the linked prototype to Person
*/

///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*

// constructor function of Car
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Car methods of accelerate and brake
Car.prototype.accelerate = function () {
  this.speed += 10;
  return console.log(`${this.make} going ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  return console.log(`${this.make} braking, now ${this.speed}km/h`)
};

// EV constructor function
const EV = function (make, speed, charge) {
  // using .call to link 'this' keyword to EV and inherit Car constructor
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking EV prototype so it can inherit Car prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// bc of polymorphis: A child class can overwrite a method it inherited from a parent class
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 5;
  return console.log(`${this.make} going ${this.speed} km/h with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla); // notice charge set to 90 now

tesla.accelerate(); // increases by 20 per {{{{EV}}}} method of accelerate()
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake(); // uses parent, Car, constructor method of brake() that was inheritted
tesla.brake();
tesla.brake();


const toyota = new Car('Toyota', 80);

toyota.accelerate(); // increases by 10 per {{{{Car}}}} method of accelerate()
toyota.accelerate();
toyota.accelerate();
toyota.accelerate();
toyota.accelerate();
console.log(toyota instanceof Car); // true
console.log(toyota instanceof EV); // false
toyota.chargeBattery(50); // doesn't work because Car does NOT inherit child methods

*/

///////////////////////////////////////
///////////////////////////////////////
// NEW SECTION
// INHERITANCE BETWEEN "CLASSES" USING ES6 CLASSES
///////////////////////////////////////
///////////////////////////////////////
/*

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  };

  // instance methods
  // Methods will be added to the .prototype property of the PersonCl class which is going to be the prototype of the objects created by that class
  calcAge() {
    const age = new Date().getFullYear() - this.birthYear;
    console.log(age);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // getters and setters are accessed as if they were properties to the object
  get ageBy2050() {
    return 2050 - this.birthYear;
  }

  // setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name; //convension to use _ to avoid constructor issue
    } else {
      alert(`${name} is not a full name!`)
    }
  }

  // get so that when we call the property of .fullName, we get the correct property name of 'fullName'
  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there 👋🏼');
    console.log(this);
  }
};

// 'extends' links PersonCl prototype and StudentCl
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // In child class, super needs to happen first! Helps to bind 'this' keyword
    // super(arguments for parent class)
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${new Date().getFullYear() - this.birthYear} years old, but as a student feel more like I'm ${new Date().getFullYear() - this.birthYear + 10}! 😆`)
  }
};

const martha = new StudentCl('Martha Jones', 2001, 'Computer Science')
martha.introduce();
martha.calcAge();
console.log(martha.ageBy2050);


// class AnotherStudentExample extends PersonCl { }; // this alone will link PersonCl to Another...mple
// const marthaExample = new AnotherStudentExample(
//   `we don't need a constructor function in the child class to be able to inherit parent class`,
//   2002);
// console.log(marthaExample);
*/

///////////////////////////////////////
///////////////////////////////////////
// NEW SECTION
// INHERITANCE BETWEEN "CLASSES" USING Object.create()
///////////////////////////////////////
///////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);

// PersonProto is now the prototype of 'StudentProto'
// StudentProto inherits PersonProto
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

// StudentProto is now the prototype of 'jay'
// jay inherits StudentProto
const jay = Object.create(StudentProto);
jay.init('Jay', 1980, "Computer Science");
// jay.introduce();
// jay.calcAge();

/*
Person {
  Student {
    jay
  }
}

Person --> Student --> jay

^^ Person is the PARENT prototype of both Student AND jay

All methods and properties on the parent prototype are availble for its children

*/

// 1 Public fields (fields in other OOP === 'properties' in js)
// 2 Private fields
// 3 Public methods
// 4 Private methods

class Account {
  // 1 defining a public field (instance fields)
  locale = navigator.language;

  // 2 #Private fields using #
  #movements = [];


  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // _protected _property
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`)
  }

  // public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved for ${val}`)
    }
  }
};

const acc1 = new Account('Kass', 'US', 1234);
// console.log(acc1);

// acc1.movements.push(230); // don't do this
// acc1.movements.push(-100); // instead create a method in the Account class
acc1.deposit(230);
acc1.withdraw(100);
acc1.requestLoan(1000);
// console.log(acc1.getMovements());
console.log(acc1)



///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/