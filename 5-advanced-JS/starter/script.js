// Creating Objects using the Function Constructor
/*
var zack = {
    name: 'Zack',
    yearOfBirth: 1997,
    job: 'software engineer'
};

// Lets use a blueprint to recreate this object! We will do this with a function constructor. its a pattern, or like writing a blueprint

var PersonConstructor = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // add a method to our object. might as well do it to the function constructor
    
}

// add prototype to personConstructor so we can use it more efficiently on diff people
// this is adding a method
PersonConstructor.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth - 1);
};

// adding a property
PersonConstructor.prototype.lastName = 'BumpNasty';


// when we use the new operator/keyword, a brand new empty object is created! Then, the PersonConstructor function is called, and passed in arguments we specify
var zack = new PersonConstructor('Zachary', 1997, 'software engineer bruh');

//grab that zack object and run the calculateAge method on it
zack.calculateAge();

var bran = new PersonConstructor('Brandon', 1998, '3m production operator');
var mama = new PersonConstructor('mama', 1970, 'head hauncho');

bran.calculateAge();
mama.calculateAge();

// calling the new property lastName
console.log(zack.lastName);
console.log(bran.lastName);
console.log(mama.lastName);
*/










// 62. The Prototype Chain in the Console
// 63. Creating Objects: Object.create
    // first define an object that will act as a prototype, then create a new object based on that very prototype

/*
var personPrototype = {
    calculateAge: function(){
        console.log(2020 -
            this.yearOfBirth - 1);
    }
};

var zack = Object.create(personPrototype);
zack.name = 'Zack';
zack.yearOfBirth = 1997;
zack.job = 'engineer';

var dad = Object.create(personPrototype,
    {
        name: { value: 'Jeff' },
        yearOfBirth: { value: 1973 },
        job: { value: 'BNSF' }
    });
    */






// 64. Primitives vs Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); // should be 46
console.log(b); // should be 23 since we mutated a on a later line than we defined b




// Objects
var object1 = {
    name: 'Zack',
    age: 22
};

var object2 = object1;
object1.age = 23;

console.log(object1.age); // should be 23 since we mutated
console.log(object1.age); // should be 23 since our object2 only has a reference to the object1 in storage. So basically whatever object1 is, regardless of placement, it can come before/after
*/



// Lastly, lets see what happens when we pass a primitive and an object into a function
// Functions
/*
var age = 27;
var obj = {
    name: 'Bran',
    city: 'Aberdeen'
};

function dataMutater(a, b){
    a = 30; 
    b.city = 'San Francisco';
}

dataMutater(age, obj);

console.log(age); // primitive should remain unchanged. When we created the original primitive, a simple copy was made, we can change a as much as we want it will never change on the outside
console.log(obj.city); // should change to San Fran because we changed the reference that points to the object
*/



// 65. First Class Functions: Passing Functions as Arguments
    // functions accepting functions as other arguments... we actually did this with our event listeners

/*
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
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


// Callback function! aka argument in the function is a function
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeart = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxHeart);
*/



// 66. First Class Functions: Functions Returning Functions
/*
function interviewQuestion(job) { 
    if (job === 'designer'){
        return function(name) { // anonymous function bc no name
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    } else  {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Zack');
teacherQuestion('Debbi');
designerQuestion('Brandon');


interviewQuestion('teacher')('Mr. Northrup');
interviewQuestion('designer')('Kanye West');
*/




// 67. Immediately Invoked Function Expressions (IIFE)
// Basically creating a new scope that is hidden from the outside scope. Data privacy, and dont interfere with other variables in our execution context
// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);



(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// console.log(score);
*/