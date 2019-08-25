
////////////////////////////////

////////////////////////////////

/*
var Person = function(name, year, job){
    this.name = name;
    this.year = year;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2019 - this.year;
}

var steve = new Person("steve", 1992, "engineer");
console.log(steve.calculateAge());
Person.prototype.lastName = 'Sampson';
console.log(steve.lastName);
console.log(steve);
*/

// Object.create()

/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John'
john.yearOfBirth = 1992;
john.job = 'teacher';

console.log(john);

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value : 1969},
    job: {value: 'designer'}
})

console.log(jane);
*/

////////////////////////////////
// Primitives vs Objects
////////////////////////////////

/*
var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);

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
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

////////////////////////////////
// Passing Functions as Arguments
////////////////////////////////

/*
var years = [1992, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2019 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var age  = arrayCalc(years, calculateAge);
console.log(age);

var fullAges = arrayCalc(age, isFullAge);
console.log(fullAges);

var maxRates = arrayCalc(age, maxHeartRate);
console.log(maxRates);
*/

////////////////////////////////
// Functions Returning Functions
////////////////////////////////

/*
function interviewQuestion(job){
    switch(job){
        case 'designer':
            return function(name){
                console.log(name + ', can you please explain what UX design is?');
            }

        case 'teacher':
            return function(name){
                console.log('What subject do you teach, ' + name + '?');
            }

        default:
        return function(name){
            console.log ('Hello ' + name + ' what do you do?');
        }

    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
*/

////////////////////////////////
// Closures
////////////////////////////////

function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementCanada = retirement(66);
retirementCanada(1990);

retirement(66)(1990);