// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // Method to be inherited should go in prototype
    // this.calculateAge = function() {
    //     console.log(2016 - this.yearOfBirth);
    // }
};

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

// Primitives vs objects

// Passing functions as arguments
// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for(var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(ele) {
//     return 2016 - ele;
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// Function returning function - Function chaining
// function interviewQuestion(job) {
//     if(job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if(job == 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');

// interviewQuestion('teacher')('Jane');

// Simple function
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// IIFE
// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// Closures
// function retirement(retirementAge) {
//     var a = ' years left until retirement';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     };
// }

// var retirementGermany = retirement(65);
// var retirementUS = retirement(66);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);

// interviewQuestion() using closure
// function interviewQuestion(job) {
//     return function(name) {
//         if(job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if(job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log(name + ', what do you do?');
//         }
//     }
// }

// var designerQuestion = interviewQuestion('designer');
// // var teacherQuestion = interviewQuestion('teacher');
// var driverQuestion = interviewQuestion('driver');
// designerQuestion('John');
// interviewQuestion('teacher')('Jenny');
// driverQuestion('Mike');

// Challenge 1
/*
(function(){
    function Question(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    Question.prototype.showQuestion = function() {
        // Show question on the console
        console.log(this.question);
        for(var j = 0; j < this.options.length; j++) {
            console.log(j + ': ' + this.options[j]);
        }
    };

    Question.prototype.checkAnswer = function() {
        if(this.answer === selectedOption) {
            console.log('Correct answer');
        } else {
            console.log('Wrong answer');
        }
    }

    var questionOne = new Question('What is your name?', ['John', 'Jane', 'Mike'], 2);
    var questionTwo = new Question('What is your country?', ['France', 'Japan', 'UK', 'USA'], 3);
    var questionThree = new Question('What is your favorite color?', ['Blue', 'Green', 'Red'], 0);
    var questionFour = new Question('What is your favorite fruit?', ['Banana', 'Guava','Kiwi', 'Mango', 'Watermelon'], 3);

    var arrQ = [questionOne, questionTwo, questionThree, questionFour];
    var randomQ = Math.floor(Math.random() * arrQ.length);

    arrQ[randomQ].showQuestion();

    // Ask for answer
    var selectedOption = parseInt(prompt('Please select the correct answer (just type the number)'));

    arrQ[randomQ].checkAnswer();
})();
*/

// Challenge 2
(function(){
    function Question(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    Question.prototype.showQuestion = function() {
        // Show question on the console
        console.log(this.question);
        for(var j = 0; j < this.options.length; j++) {
            console.log(j + ': ' + this.options[j]);
        }
    };

    Question.prototype.checkAnswer = function(selectedOption, callback) {
        var sc;
        if(this.answer === selectedOption) {
            console.log('Correct answer');
            sc = callback(true);
        } else {
            console.log('Wrong answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------');
    }

    var questionOne = new Question('What is your name?', ['John', 'Jane', 'Mike'], 2);
    var questionTwo = new Question('What is your country?', ['France', 'Japan', 'UK', 'USA'], 3);
    var questionThree = new Question('What is your favorite color?', ['Blue', 'Green', 'Red'], 0);
    var questionFour = new Question('What is your favorite fruit?', ['Banana', 'Guava','Kiwi', 'Mango', 'Watermelon'], 3);

    var arrQ = [questionOne, questionTwo, questionThree, questionFour];

    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var randomQ = Math.floor(Math.random() * arrQ.length);

        arrQ[randomQ].showQuestion();

        // Ask for answer
        var selectedOption = prompt('Please select the correct answer (just type the number)');

        if(selectedOption !== 'exit') {
            arrQ[randomQ].checkAnswer(parseInt(selectedOption), keepScore);   
            nextQuestion();         
        }
    }

    nextQuestion();
})();