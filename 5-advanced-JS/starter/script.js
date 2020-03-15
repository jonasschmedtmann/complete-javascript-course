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
/*
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
      console.log("Hello " + name + " what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");

var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");

// looks weird but works because its evaluated from left to right
interviewQuestion("teacher")("Mark");

function saleahSayings(word) {
  if (word === "hey") {
    return function(name) {
      console.log("Hey I'm hungry, please feed me " + name);
    };
  } else if (word === "jaja") {
    return function(name) {
      console.log("Jaja " + name + " may I have something to drink?");
    };
  } else {
    return function() {
      console.log("My name is Saleah!");
    };
  }
}

var jaja = saleahSayings("jaja");
var hey = saleahSayings("hey");

jaja("Fred");
jaja("Margaret");
hey("Auntie Grace");
hey("Uncle Jonathan");
*/

///////////////////////////////////////
// Lecture: IIFE(Immediately Invoked Function Expressions)
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// mainly used for data privacy
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
*/

///////////////////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge) {
  return function(yearOfBirth) {
    var a = " years left until retirement.";
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}
var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
retirementGermany(1990);

var retirementIceland = retirement(67);
retirementIceland(1990);

retirement(50)(1990);

// reformatted a function that returned many functions into a closure
function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + " what do you do?");
    }
  };
}

interviewQuestion("designer")("John");
*/

////////////////////////////////////////
// Lecture: Bind, Call and Apply
/*
var john = {
  name: "John",
  age: 29,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey what's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "!"
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

john.presentation("formal", "morning");

// the "call" method allows us to set the this keyword/variable to the emily object, replacing
// the 'this' with 'emily', then input the necessary arguments 
john.presentation.call(emily, "friendly", "afternoon");

// "apply" does the same thing but accepts an array for its arguments
// ex: john.presentation.apply(emily, ['friendly', 'afternoon'])

// the 'bind' allows you to create preset arguments
var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("afternoon");
johnFriendly("evening");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("morning");

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

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calcAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/

///////////////////////////////////////////////
// Coding Challenge

// used IIFE(Immediately Invoked Function Expression) so that if another
// programmer uses this code it won't interfere with their code or ours
(function() {
  class Question {
    constructor(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
    }
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  var q1 = new Question(
    "Is JavaScript a highly popular programming language",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "Who is the instructor of this course",
    ["Mike", "Joe", "Jonas"],
    2
  );

  var q3 = new Question(
    "What is the latest version of JavaScript",
    ["ES5", "ES6", "ES9"],
    2
  );

  var q4 = new Question(
    "What is the name of the main character on Altered Carbon",
    ["Tak", "Dom", "Quell"],
    0
  );

  var q5 = new Question("What is the square root of 144", ["8", "12", "9"], 1);

  var q6 = new Question(
    "What is the capital of California",
    ["LA", "San Francisco", "Sacramento"],
    2
  );

  var questions = [q1, q2, q3, q4, q5, q6];
  var counter = 0;

  function gameLoop() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    answer = prompt(
      "Select your answer by choosing the number associated with it. To leave the game type in 'exit' as your answer."
    );
    console.log("Your answer was: " + answer);
    if (answer !== "exit") {
      if (answer == questions[n].correct) {
        console.log("Correct!");
        counter++;
        console.log("Correct answers: " + counter);
        console.log("-------------------------------");
      } else {
        console.log("Incorrect");
        console.log("-------------------------------");
      }
      gameLoop();
    }
  }
  gameLoop();
})();
