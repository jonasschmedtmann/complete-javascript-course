// Function Constructor
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculageAge = function() {
    console.log(2020 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'

var shawn = new Person('Shawn', 1980, 'consultant')
var jane = new Person('Jane', 1969, 'designer')
var mark = new Person('Mark', 1948, 'retired')

shawn.calculageAge();
jane.calculageAge();
mark.calculageAge();

console.log(shawn.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Object.create
var personProto = {
    calculageAge: function() {j
        console.log(2020 - this.yearOfBirth)
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1980;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });


// Primatives vs objects

// Primatives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonus',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

// change(age, obj);
// console.log(age);
// console.log(obj.city);
*/

/*// Lecture: Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.8 - (0.67 * el));
    }
    return -1;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);*/

/*// Lecture: Functions returning functions
function interviewQuestions(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(`${name} can you please explain what UX design is?`)
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(`What subject do you teach ${name}?`)
        }
    } else {
        return function(name) {
            console.log(`Hello ${name}, what do you do?`)
        }
     }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');
var consultantQuestion = interviewQuestions('consultant')
teacherQuestion('Shawn');
designerQuestion('Michelle');
consultantQuestion('Frank');
//calling inline
interviewQuestions('bum')('Joe')
*/


/*
// Lecture: IIFE (Immediate Invoked Function Expression)
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/


/*// Lecture: Closures

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1980);
//retirement(66)(1980);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1980);
retirementIceland(1980);

/!*function interviewQuestions(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(`${name} can you please explain what UX design is?`)
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(`What subject do you teach ${name}?`)
        }
    } else {
        return function(name) {
            console.log(`Hello ${name}, what do you do?`)
        }
    }
}*!/

function interviewQuestion(job) {
    return function (name) {
        switch (job) {
            case 'designer':
                console.log(`${name} can you please explain what UX design is?`)
                break;
            case 'teacher':
                console.log(`What subject do you teach ${name}?`);
                break;
            default:
                console.log(`Hello ${name}, what do you do?`);
        }
    }
}

interviewQuestion('teacher')('Kelly');
interviewQuestion('designer')('Mark');
interviewQuestion('bum')('Joe');*/


// Lecture: Bind, call and apply

var shawn = {
    name: 'Shawn',
    age: 40,
    job: 'consultant',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay} Ladies and Gentlemen! I\'m a ${this.name}, I\'m a(n) ${this.job} and I\'m ${this.age} years old`);
        } else if (style === 'friendly') {
            console.log(`Hey!! What\'s up? I\'m a ${this.name}, I\'m a(n) ${this.job} and I\'m ${this.age} years old.  Have a nice ${timeOfDay}.`);
        }
    }
}

var michelle = {
    name: 'Michelle',
    age: 41,
    job: 'stylist'
}

shawn.presentation('formal', 'morning');

// .call method allows user to set the this variable in first param
shawn.presentation.call(michelle, 'friendly', 'afternoon');
// similar to call but takes [] as second param
//shawn.presentation.apply(michelle, ['friendly', 'evening'])

// bind (aka curoring)
var shawnFriendly = shawn.presentation.bind(shawn, 'friendly');

shawnFriendly('morning');
shawnFriendly('night');

var michelleFormal = shawn.presentation.bind(michelle, 'formal');
michelleFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);





















