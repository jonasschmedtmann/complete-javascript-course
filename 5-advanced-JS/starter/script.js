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
