'use strict';

/*
    208: Constructor functions and the new operator
*/

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // // Never do this as it creates multiple copies of the same function
//     // this.calcAge = function () {
//     //     return 2023 - birthYear;
//     // };
// }

// const vishu = new Person('Vishu', 1992);
// const vasudha = new Person('Vasudha', 1997);
// console.log(vishu);
// console.log(vasudha);

/*
    1: New {} is created
    2: function is called, this = {}
    3: {} is linked to prototype, sets __proto__ property to that of constructor's prototype
    4: function returns the object
*/

/*
    209: Prototypes
*/

// console.log(
//     Person.prototype
// );
// Person.prototype.calcAge = function () {
//     return 2023 - this.birthYear;
// };

// console.log(vishu.calcAge());
// console.log(vishu.__proto__);
// console.log(vishu.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(vishu));

// Person.prototype.species = 'Homo Sapiens';
// console.log(vishu.species);
// console.log(vasudha.species);

/*
    211: Prototypal inheritance on built in objects
*/

// console.log(vishu.__proto__);
// console.log(vishu.__proto__.__proto__);
// console.log(vishu.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 3, 4, 5, 5, 6, 3, 2, 1];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// // add new method to array prototype -- not a good practice, but just for fun
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1)

/*
    212: Coding Challenge #1
*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelarate = function () {
    this.speed += 10;
    console.log(`${this.make} speed is ${this.speed} km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} speed is ${this.speed} km/h`);
}

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1);
// console.log(car2);
// car1.accelarate();
// car1.brake();
// car2.accelarate();
// car2.brake();
// car1.brake();
// car1.brake();

/*
    213: ES6 Classes
*/

class PersonCl {
    constructor (fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge () {
        console.log(2023 - this.birthYear);
    }

    static hey () {
        console.log(`Hey there!!`);
        console.log(this);
    }

    get age () {
        return 2023 - this.birthYear;
    }

    set fullName (name) {
        name.includes(' ') ? this._fullName = name : alert(`${name} is not a full name`);
    }

    get fullName () {
        return this._fullName;
    }
};

// const sneha = new PersonCl('Sneha Bharathi', 2006);
// console.log(sneha);
// console.log(sneha.__proto__ === PersonCl.prototype);
// sneha.calcAge();

// // Taking to next level 😎
// PersonCl.prototype.greet = function () {
//     console.log(`Hello ${this.firstName}`);
// };

// sneha.greet();
// console.log(sneha.__proto__ === PersonCl.prototype);
// console.log(sneha.age);
// console.log(sneha.fullName);

// /* 
//     214: Getters and setters
// */

// const account = {
//     ownner: 'Vishu',
//     movements: [100, 200, 300, 400, 500],

//     get latest () {
//         return this.movements.slice(-1).pop();
//     },

//     set latest (mov) {
//         this.movements.push(mov);
//     }
// };

// account.latest = 50;
// console.log(account.latest);
// console.log(account.movements);

/*
    215: Static Methods
*/

// PersonCl.hey();


/*
    216: Object.create
*/

const PersonProto = {
    calcAge () {
        console.log(2023 - this.birthYear);
    },

    init (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

// const savitha = Object.create(PersonProto);
// savitha.name = 'Savitha';
// savitha.birthYear = 1968;
// console.log(savitha);
// savitha.calcAge();

// console.log(savitha.__proto__ === PersonProto);

// const kishan = Object.create(PersonProto);
// kishan.init('Kishan', 1959);
// console.log(kishan);

/*
    217: Coding Challenge #2
*/

class CarCl {
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS () {
        return this.speed / 1.6;
    }

    set speedUS (speed) {
        this.speed = speed * 1.6;
    }

    accelarate () {
        this.speed += 10;
        console.log(`${this.make} speed is ${this.speed} km/h`);
    }

    brake () {
        this.speed -= 5;
        console.log(`${this.make} speed is ${this.speed} km/h`);
        return this;
    }
}

// const ford = new CarCl('ford', 120);
// console.log(ford);
// ford.accelarate();
// console.log(ford.speedUS);
// ford.speedUS = 100;
// console.log(ford);

/*
    218: Inheritance between 'classes': Constructor functions
*/

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     return 2023 - this.birthYear;
// };

// const Student = function (firstName, birthYear, course) {
//     // Person(firstName, birthYear);   // will fail as 'this' is undefined
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };
// // Set the prototype chain to inherit
// // Object.create does the prototype linking job
// Student.prototype = Object.create(Person.prototype);
// // Student.prototype = {...Person.prototype}; -- doesn't work

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const sneha = new Student('Sneha', 2006, 'CS');
// console.log(sneha);
// sneha.introduce();

// console.log(sneha.__proto__);
// console.log(sneha.__proto__.__proto__);
// // Student.prototype.constructor --> returns Person(as we used object.create) but should be Student. So, setting it here
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// console.log(sneha);

// console.log(sneha instanceof Student);
// console.log(sneha instanceof Person);
// console.log(sneha instanceof Object);


/* 
    219: Coding Challenge #3

    1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
    2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
    3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
    4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

    DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelarate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`);
};

EV.prototype.constructor = EV;

// console.dir(EV);
const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.accelarate();
// tesla.brake();
// console.log(tesla);

/* 
    220: Inheritance between "classes": ES6 Classes
*/

class StudentCL extends PersonCl {
    constructor (fullName, birthYear, course) {
        super(fullName, birthYear);     // This takes care of setting up the prototype chain
        this.course = course;
    }

    introduce () {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge () {
        console.log(`I'm ${2023 - this.birthYear} years old`);
    }
};

// To just extend without new properties, we can call like below.
// No need to define constructor call super() in the class
// const sneha = new StudentCL('Sneha Bharathi', 2006);
const sneha = new StudentCL('Sneha Bharathi', 2006, 'Computer Science');
// console.log(sneha);
// sneha.introduce();
// sneha.calcAge();

/* 
    221: Inheritance between "classes": Object.create
*/

// console.log(PersonProto);
const savitha = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
// Methods
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};
StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
// console.log(StudentProto);
const snehaProto = Object.create(StudentProto);
// snehaProto.init('Sneha', 2006, 'Computers');
// console.log(snehaProto);
// snehaProto.introduce();

/* 
    222: Another Class example
*/

class Account {

    /* 
        224: Encapsulation: Private class fields and methods
    */

    locale = navigator.language;    // public field
    // private fields
    #movements = [];
    #pin;

    constructor (owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // // As a convention for private properties, use _
        // this._pin = pin;
        // this._movements = [];
        // // this.locale = navigator.language;
    }

    deposit (amount) {
        this.#movements.push(amount);
        return this;        // Chain methods
    }

    withdraw (amount) {
        this.deposit(-amount);
        return this;        // Chain methods
    }

    _approveLoan () {
        return true;
    }

    requestLoan (amount) {
        if (this._approveLoan()) {
            this.deposit(amount);
            console.log(`Your loan of ${amount} is approved and deposited`);
        }
        return this;        // Chain methods
    }

    getMovements () {
        return this.#movements;
    }

    // // Private methods -- not supported atm.
    // #approveLoan () {
    //     return true;
    // }
};

const vishuAcc = new Account('Vishu', 'INR', 1212);
// vishuAcc.deposit(200);
// vishuAcc.deposit(500);
// vishuAcc.withdraw(50);
// console.log(vishuAcc);
// vishuAcc.requestLoan(3000);
// console.log(vishuAcc.getMovements());
// // console.log(vishuAcc.#movements);   // Throws error
// // console.log(vishuAcc.#approveLoan());

// vishuAcc.deposit(2000).withdraw(3000).requestLoan(4000).withdraw(2000);
// console.log(vishuAcc.getMovements());

/* 
    227: Coding Challenge #4
*/

class EVCl extends CarCl {

    #charge;

    constructor (make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery (val) {
        this.#charge = val;
        return this;
    }

    accelarate () {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.#charge}%`);
        return this;
    };

}

const nexon = new EVCl('Tata Nexon', 120, 23);
nexon.chargeBattery(90).accelarate().brake().brake().accelarate();
console.log(nexon);








