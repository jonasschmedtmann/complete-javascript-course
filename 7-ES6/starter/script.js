// Lecture: let and const
/*
// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";

// ES6
// const variables are immutable and let is
const name6 = "Jane Smith";
let age = 23;

// ES5

// var is function scoped
function driverLicense(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;
  }
  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive."
  );
}

driverLicense(true);

// ES6

// let and const are block scoped
// how to make it work using block scope
function driverLicense6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = "John";
  }
  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive."
  );
}

driverLicense6(true);

// example of why block scope works well if you used var the
// console.log(i) would be 5

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
*/
//////////////////////////////////////////////
// Lecture: Blocks and IIFEs
/*
// creates closure with brackets in ES6
{
  const a = 1;
  let b = 2;
}
*/
//////////////////////////////////////////////
// Lecture: Strings
/*
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6
// template literals
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
// capitalization matters
console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(n.includes("oh"));

console.log(`${firstName} `.repeat(3));
*/

////////////////////////////////////////
// Lecture: Arrow Functions
/*
const years = [1990, 1989, 1992, 1938];

//ES5
var ages5 = years.map(function(el) {
  return 2020 - el;
});
console.log(ages5);

//ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

// with 2 or more arguments you need parentheses
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);
*/

/////////////////////////////////////////////
// Lecture: Arrow Functions 2
/*
//ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    // hack to be able to use the 'this' keyword throughout the func
    var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};
//box5.clickMe();

//ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};
box6.clickMe();

class Person {
  constructor(name) {
    this.name = name;
  }
}

//ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
      // the bind method locks in the this keyword to this func
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["Bob", "John", "Rick"];
new Person("Miguel").myFriends5(friends);

//ES6
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr);
};

new Person("Manuel").myFriends5(friends);
*/

//////////////////////////////////////////
// Lecture: Destructuring
/*
//ES6
const [name, age] = ["Mike", 26];
console.log(name);
console.log(age);

const obj = {
  firstName: "Hector",
  lastName: "Martinez"
};

// object syntax
const { firstName, lastName } = obj;
console.log(firstName, lastName);

const { firstName: a, lastName: b } = obj;
console.log(a, b);

// function syntax
function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2, retirement);
*/

///////////////////////////////////////////////
// Lecture: Arrays
/*
// querySelector and querySelectorAll return nodeList
const boxes = document.querySelectorAll(".box");

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.background = "dodgerblue"));

for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

var ages = [12, 18, 16, 12, 11, 9];

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

////////////////////////////////////////////
// Lecture: Spread operator
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 38, 12, 21);
console.log(sum1);

var ages = [18, 38, 12, 21];

const sum2 = addFourAges(...ages);
console.log(sum2);

const familySmith = ["Joe", "Roe", "Zoe"];
const familyMeek = ["Millz", "Snupe", "Nicki"];
const bigFamily = [...familyMeek, "Jay", ...familySmith];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];
Array.from(all).forEach(cur => (cur.style.color = "yellow"));
*/

/////////////////////////////////////////////
// Lecture: Rest parameters
/*
//ES5
function isFullAge5() {
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log(2020 - cur >= 18);
  });
}

isFullAge5(1990, 1999, 1987, 2010);

//ES6
// made the age limit dynamic
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2020 - cur >= limit));
}

isFullAge6(29, 1990, 1999, 1987, 2010);
*/

//////////////////////////////////////////////
// Lecture: Default parameters
/*
class SmithPerson {
  constructor(
    firstName,
    yearOfBirth,
    lastName = "Smith",
    nationality = "American"
  ) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
  }
}

var james = new SmithPerson("James", 1999);
console.log(james);
var emily = new SmithPerson("Emma", 1997, "Diego", "Spanish");
console.log(emily);
*/

///////////////////////////////////////////
// Lecture: Maps
/*
const question = new Map();
question.set("question", "What is the name of the latest JS version?");
question.set(1, "ES9");
question.set(2, "ES5");
question.set(3, "ES7");
question.set("correct", 1);
question.set(true, "Correct");
question.set(false, "Incorrect");

console.log(question);
console.log(question.get("question"));
// console.log(question.size);
// console.log(question.delete(2));

if (question.has(3)) {
  // console.log("Answer 3 exist");
}
// clears your Map
// question.clear();

// question.forEach((value, key) =>
//   console.log(`The key is ${key} and the value is ${value}.`)
// );

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Write the correct answer"));
console.log(question.get(ans === question.get("correct")));
*/

///////////////////////////////////////////
// Lecture: Classes and subclasses
/*
// can only add methods to classes not properties
class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

// how to connect classes, allows Profile to inherit Person's
// properties and function
class Profile extends Person {
  constructor(name, yearOfBirth, job, age, email, sport) {
    super(name, yearOfBirth, job);
    this.age = age;
    this.email = email;
    this.sport = sport;
  }
}
*/

////////////////////////////////////////
// Code Challenge 8

class Park {
  constructor(name, buildYear, area, trees) {
    this.name = name;
    this.buildYear = buildYear;
    this.area = area; // square mile
    this.trees = trees;
  }

  treeDensity() {
    const density = this.trees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square mile`
    );
  }
}

class Street extends Park {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  streetSize() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Andrews Park", 1988, 2.4, 47),
  new Park("Alamo Park", 1975, 1.7, 57),
  new Park("Skate Park", 1996, 1.3, 33)
];

const allStreets = [
  new Street("Alamo", 1970, 4, 5),
  new Street("Nut Tree", 1970, 2, 4),
  new Street("Leisure Town", 1978, 1, 2),
  new Street("Merchant", 1982, 3)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("-----------Parks Report--------------");
  // density
  p.forEach(el => el.treeDensity());
  // average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average age of ${avgAge} years.`);
  // which park had more than 50 trees
  const i = p.map(el => el.trees).findIndex(el => el >= 50);
  console.log(`${p[1].name} has more than 50 trees`);
}

function reportStreets(s) {
  console.log("-----------Streets Report--------------");
  // total and average length of town's street
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${s.length} have a total length of ${totalLength}mi, with an average of ${avgLength},mi.`
  );

  // classify streets
  s.forEach(el => el.streetSize());
}

reportParks(allParks);
reportStreets(allStreets);
