/*var Person, john, neo;

Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.movie = "Matrix";

john = new Person("Mr. Anderson", 1990, "Programmer");
neo = new Person("Neo", 1990, "The One");

john.calculateAge();
neo.calculateAge();

console.log(john.movie);
console.log(neo.movie);*/

//===============================
// Object.create ================
//===============================

/*var personProto, john;

personProto = {
  calculateAge: function() {
    console.log(2020 - this.yearOfBirth);
  }
};

john = Object.create(personProto);

john.name = "Mr. Anderson";
john.yearOfBirth = 1990;
john.job = "Programmer";

neo = Object.create(personProto, {
  name: { value: "Neo" },
  yearOfBirth: { value: 1990 },
  job: { value: "The One" }
});*/

//================================
//Passing functions as arguments =
//================================

/*var years, ages;

years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(element) {
  return 2020 - element;
}

function isFullAge(element) {
  return element >= 18;
}

function maxHeartRate(element) {
  if (element <= 81) {
    return Math.round(206.9 - 0.67 * element);
  } else {
    return -1;
  }
}

ages = arrayCalc(years, calculateAge);
heartRates = arrayCalc(ages, maxHeartRate)
console.log(heartRates);*/

//================================
//Closures =======================
//================================

/*function retirement(retirementAge) {
  var a = " years left until retirement";
  return function(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
} //an inner function always has access to the variables and parameters of its outer function, even after then outer function has returend.

var retirementCA = retirement(65);
retirementCA(1990);
retirement(65)(1990); //same as above

var retirementIcelend = retirement(67);

retirementIcelend(1990);

function interviewQuetstion(job) {
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
      console.log("Hello " + name + ", what exactly do you do?");
    };
  }
}

var neo = interviewQuetstion("programmer");
neo("Mr. Anderson");*/

//================================
//Bind, call, & apply - EXPLICIT BINDING
//================================

var neo = {
  name: "Neo",
  age: 26,
  job: "THE ONE",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Hello Agent Smith" +
          ". Good " +
          timeOfDay +
          ", I'm " +
          this.name +
          " and I'm " +
          this.job +
          "."
      );
    } else if (style === "casual") {
      console.log(
        "'Sup a-hole?" +
          " Imma kick your ass in this here fine " +
          timeOfDay +
          ". I'm " +
          this.name +
          " and I'm " +
          this.job +
          ", bitch."
      );
    }
  }
};

neo.presentation("formal", "afternoon");
neo.presentation("casual", "evening");

var trinity = {
  name: "Trinity",
  age: 35,
  job: "a Badass Bitch"
};

neo.presentation.call(trinity, "casual", "morning"); //CALL, first argument specifies the context, the arguemnts after that are the arguments of the function

//neo.presentation.apply(trinity, ["casual", "afternoon"]); //APPLY (for array values) - same as .call(), but passes in arrays.

var trinityCasual = neo.presentation.bind(trinity, "casual"); //BIND for one version of the function - creates a new function that binds to "trinityCasual"

trinityCasual("day");
