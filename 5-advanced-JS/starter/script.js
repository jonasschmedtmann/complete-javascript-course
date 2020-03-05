// function constructor
/*
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// adding a function to the Person object without writing it in the constructor
// function using the prototype
Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};

// adding a property to the Person object using the prototype
Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// created a class in JS
class Athlete {
  constructor(name, sport, number) {
    this.name = name;
    this.sport = sport;
    this.number = number;
  }

  fanCheer() {
    console.log("We love you", this.name);
  }
}

var mike = new Athlete("Mike", "Football", 5);
var brandon = new Athlete("Brandon", "Football", 4);
var gary = new Athlete("Gary", "Football", 3);

console.log(mike, brandon, gary);

mike.fanCheer();
brandon.fanCheer();
gary.fanCheer();

// add a property and method using the prototype
Athlete.prototype.year = "Senior";
Athlete.prototype.fanChant = function() {
  console.log("GOOOOOO", this.name);
};

mike.fanChant();
brandon.fanChant();
gary.fanChant();

console.log(mike.year, brandon.year, gary.year);
*/

// Create object with Object create
/*
var personProto = {
  calcAge: function() {
    console.log(2020 - this.yearOfBirth);
  }
};

// create an object with no properties except the calcAge method
var john = Object.create(personProto);

// added properties to the object
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

// created an object with the properties in the initial creation of the object
var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
*/

// Primitives vs Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
// I expected b to be 46 too but its 23 because its a copy of a
console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: "John",
  age: 28
};
var obj2 = obj1;
obj1.age = 30;
// objects are different because they are the exact same object or referencing the
// same object, same with functions
console.log(obj1);
console.log(obj2);

// Functions
var age = 22;
var obj = {
  name: "Joshua",
  city: "Vacaville"
};

function change(a, b) {
  a = 29;
  b.city = "San Francisco";
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/
/////////////////////////////////////////
// Lecture: Passing functions as arguments(callbacks)
/*
var years = [1990, 1991, 1992, 1993, 1994];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

/////////////////////////////////////////////
// Lecture: Functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name) + "what do you do?";
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");

teacherQuestion("John");
