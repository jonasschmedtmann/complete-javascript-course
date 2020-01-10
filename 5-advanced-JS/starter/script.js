// // // Function constructor - way/pattern to create an object


// // //Always write function constructors with a capital
// // var Person = function(name, yearOfBirth, job) {
// //     this.name = name;
// //     this.yearOfBirth = yearOfBirth;
// //     this.job = job;
// // } //the this variable points to the new empty object of Person instead of globally

// // var john = new Person('John', 1990, 'teacher'); //instantiation because objects are instances of Person object 

// // console.log(john);

// // //Inheritance
// // var Person = function(name, yearOfBirth, job) {
// //     this.name = name;
// //     this.yearOfBirth = yearOfBirth;
// //     this.job = job;
// //     this.calculateAge = function() {
// //         console.log(2016 - this.yearOfBirth);
// //     }
// // } //the this variable points to the new empty object of Person instead of globally

// // var john = new Person('John', 1990, 'teacher'); //instantiation because objects are instances of Person object 

// // john.calculateAge();

// // var jane = new Person('Jane', 1969, 'designer');
// // var mark = new Person('Mark', 1948, 'retired');

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// } 

// Person.prototype.calculateAge = function() {
//     console.log(2016-this.yearOfBirth);
// }//This is part of inheritance

// Person.prototype.lastName = 'Smith';


// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
// //Inheritance in practice

// console.log(john.lastName);
// console.log(john.lastName);
// console.log(john.lastName);
// //They all inherit the property


// //PROTOTYPE CHAIN
// //Person constructor is a instance of the Object object (object function constructor). Can see in the console log. 
// //can do john.hasOwnProperty('job') gets true
// //if john.hasOwnProperty('lastName') gets false
// //john instanceof Person gets true because it is an instance 

// //when put below in the console directly get these results
// var x = [2,4,6];
// x //[2,4,6]

// console.info(x) //0:2, 1:4, 2:6, length:3, __proto__:Array[0]
// x.length //3

// OBJECT.
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth)
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
});

//object.create lets us more easily create. the function constructor is still the most popular
*/

/*
//PRIMATIVES VS OBJECTS

//Primatives
var a = 23;
var b = a;
a = 46;
console.log(a);//46
console.log(b);//23
//each variable carries it's own data. 

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 20;
console.log(obj1.age); //both have same information
console.log(obj2.age);
//creates new references that points to the same information

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); //primative
console.log(obj.city); //pass a refernce that points to object then change
*/

// //FUNCTIONS
// //can use functions just like variables
// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(element) {
//     return 2016 - element;
// }

// function isFullAge(element){
//     return element >= 18;
// }

// function maxHeartRate(element) {
//     if (element >= 18 && element <= 81) {
//         return Math.round(206.9 - (0.67 * element));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// //FUNCTIONS RETURNING FUNCTIONS

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can use please explain what UX design is?');
//         } 
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' +name+ ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mark');

// // ​Quote #9 To conquer frustration, one must remain intensely focused on the outcome, not the obstacles. [T.F. Hodge] [29/11/2019]

// interviewQuestion('teacher'); //returns a function
// interviewQuestion('teacher')('Mark'); //returns function with name

///////////////////////////////////////
// //IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// //variables inside function cannot be accessed from the outside scope. The scoping chain works the other way around. 
// function game() {
//     var score = Math.random() * 10;
//     console.log(score>=5);
// }

// game();

// //Use IIFE to hide the result

// //Example of IIFE
// (function () {
//     var score = Math.random() * 10;
//     console.log(score>=5);
// }) (); //when wrap in parantheses then cannot be a statement. Parantheses means it's an expression, not a declaration. Because of this cannot access the score data. Created data privacy. 

// //console.log(score);//can't access
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score>=5 - goodLuck);
// }) (5); //IIFEs are one time use. 

// //data privacy and don't interfere with other variables in our global execution context


/////////////////////////////////
// //CLOSURES

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a)
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);

// retirement(66)(1990);//call retiment function, pass 66, function executes...
// //closures summary: an inner function has always access to the variables and parameters of its outer function, even after the outer function has returned. 
// //preserves value inside the function. Function with preserved data 

// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);


//Question from last lecture
function interviewQuestion(job){
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can use please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' +name+ ', what do you do?');
        }
    }
}//No need to have the returns like in the previous example due to the power of closures. 
//only return at the beginning that requires name because we will be able to use the job argument even after the interview function has returned 

console.log(interviewQuestion('teacher')('John'));


///////////////////////////////////
//BIND, CALL, AND APPLY

var john = {
    name: 'John',
    age: 26,
    job: 'teacher', 
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m '+ this.name +', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name +', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.'); 
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');//Method borrowing. "Call" let's us use John's presentation method for Emily. This is the Call Method. The Apply method is similar. 

//john.presentation.apply(emily, ['friendly', 'afternoon']);//won't work bc function isn't expecting to receive an array but apply uses arrays 


//bind doesn't immediately call function, but creates a copy that can be stored 
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(element) {
    return 2016 - element;
}

function isFullAge(limit, element){
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan =  arrayCalc(ages, isFullAge.bind(this, 20));//bind always needs this keyword first.
console.log(ages);
console.log(fullJapan);