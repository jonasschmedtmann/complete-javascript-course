"use strict";
// Lecture: Function constructor, Prototypes, Objects
function repeatProtoypes() {
    let Person = function (name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    };
    Person.prototype.calculateAge = function () {
        console.log(2019 - this.yearOfBirth);
    };
    Person.prototype.job = 'developer';

    // Inherits from constructor prototype property
    let jakub = new Person('Jakub', 1993);
    let martin = new Person('Martin', 1992);

    jakub.calculateAge();                               // 23
    martin.calculateAge();                              // 24
    console.log(jakub.job);                             // developer
    console.log(jakub.__proto__ === Person.prototype);  // true
    console.log(jakub.hasOwnProperty('job'));           // false
    console.log(jakub instanceof Person);               // true
    console.info([1, 2, 3]);                            // (3) [1, 2, 3]
    console.dir([1, 2, 3]);                             // Array(3)
};

// Lecture: Object.create
function repeatObjectCreate() {
    let personProto = {
        calculateAge: () => {
            console.log(2019 - this.yearOfBirth);
        }
    }
    // Inherits directly from first argument
    let john = Object.create(personProto);
    john.name = 'john';
    john.yearOfBirth = 1990;

    let jane = Object.create(personProto, {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1980 }
    });

    console.log(john, jane)
}
/**
 * Result: Object.create has better performance results for
 * creating big data structures that function constructor pattern.
 */

// Lecture: Object reference - do not confuse with inheritence
function objectReference() {
    let jakub = {
        name: 'Jakub',
        age: 26
    }
    // works as assignment for primitives not objects
    let martin = jakub;
    martin.name = 'Martin';
    console.log(jakub, martin);                         // same name

    let age = 26;
    function change(a, b) {
        a = 30;
        b.age = 30;
    }
    change(age, jakub);                                 // primitive not changed, object changed
    console.log(age, martin);
}

// Lecture: First Class Function
function repearFirstClassFunction() {
    let years = [1990, 1965, 1937, 2005, 1998];

    function arrCalc(arr, fn) {
        let arrResult = [];
        for (let i = 0; i < arr.length; i++)
            arrResult.push(fn(arr[i]));
        return arrResult;
    }

    function calculateAge(el) {
        return 2019 - el;
    }

    function isFullAge(el) {
        return el >= 18;
    }

    function maxHeartRate(el) {
        if (el >= 18 && el <= 81)
            return Math.round(206.9 - (0.67 * el));
        else
            return -1;
    }

    let ages = arrCalc(years, calculateAge);
    let fullAges = arrCalc(ages, isFullAge);
    let rates = arrCalc(ages, maxHeartRate);
    console.log(ages, fullAges, rates);

    function interviewQuestion(job) {
        if (job === 'designer') {
            return (name) => {
                console.log(name + ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            return (name) => {
                console.log('What subject do you teach, ' + name + '?');
            }
        } else {
            return (name) => {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }
    let teacherQuestion = interviewQuestion('teacher');
    let designerQuestion = interviewQuestion('designer');
    teacherQuestion('John');
    designerQuestion('John');
    interviewQuestion('developer')('Mark');
}

// Lecture: Immediately Invoked Function Expressions(IIFE)
function repeatIIFE() {
    function game() {
        let score = Math.random() * 10;
        console.log(score >= 5);
    }
    // Code in parentheses like this cannot be a statement.
    ((goodLuck) => {
        let score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
    })(5);
}

// Lecture: Closures
function repeatClosures() {
    function retirement(retirementAge) {
        let a = ' years left until retirement.';
        return (yearOfBirth) => {
            let age = 2016 - yearOfBirth;
            console.log((retirementAge - age) + a)
        }
    }
    let retirementUS = retirement(66);
    // Inner function has access to the vars and params
    // of outer function, even after the outher function
    // has returned.
    retirementUS(1990); // same as retirement(66)(1990);
    retirement(65)(1990);
    retirement(67)(1990);

    // Cleaner way than previous one.
    function interviewQuestion(job) {
        return (name) => {
            if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
            } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
            } else {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }
    interviewQuestion('developer')('Mark');
    interviewQuestion('teacher')('Tom');
}

// Lecture: Bind, call and appply
function repeatBindCallApply() {
    let john = {
        name: 'John',
        age: 26,
        job: 'teacher',
        presentation: function (style, timeOfDay) {
            if (style === 'formal') {
                console.log('Good ' + timeOfDay +
                    ', Ladies and gentlemen! I\'m ' +
                    this.name + ', I\'m a ' +
                    this.job + ' and I\'m ' +
                    this.age + ' years old.');
            } else if (style === 'friendly') {
                console.log('Hey! What\'s up? I\'m ' +
                    this.name + ', I\'m a ' +
                    this.job + ' and I\'m ' +
                    this.age + ' years old. Have a nice ' +
                    timeOfDay + '.');
            }
        }
    };

    let emily = {
        name: 'Emily',
        age: 35,
        job: 'designer'
    }

    john.presentation('formal', 'morning');
    // Copy johns function for emily and use arguments separately.
    john.presentation.call(emily, 'friendly', 'afternoon');

    // Same, but arguments as an array.
    // john.presentation.apply(emily, ['friendly', 'afternoon']);

    // Store function separatetely for chosen parameters.
    // Currying - Don't repeat same parameters while calling function.
    let johnFriendly = john.presentation.bind(john, 'friendly');
    johnFriendly('morning');

    let emilyFormal = john.presentation.bind(emily, 'formal');
    emilyFormal('afternoon');


    // Another bind example
    let years = [1990, 1965, 1937, 2005, 1998];

    function arrCalc(arr, fn) {
        let arrResult = [];
        for (let i = 0; i < arr.length; i++)
            arrResult.push(fn(arr[i]));
        return arrResult;
    }

    function calculateAge(el) {
        return 2019 - el;
    }

    function isFullAge(limit, el) {
        return el >= limit;
    }

    let ages = arrCalc(years, calculateAge);
    var fullJapan = arrCalc(ages, isFullAge.bind(this, 20));
    console.log(ages);
    console.log(fullJapan);
}
/**
 * Coding Challange
 */
(() => {

    // Data structure of objects

    let questions = [
        {
            content: 'What is a waste of time?',
            answers: [
                'Learning',
                'Watching TV',
                'Family'
            ],
            correct: 1
        },
        {
            content: 'What does the fox say?',
            answers: [
                'Woof',
                'Tweet',
                'Meow'
            ],
            correct: 2
        },
        {
            content: 'What does Sandor Clegane say?',
            answers: [
                'Bring me another one of those chickens.',
                'You will win game of thrones or you will die.',
                'You know nothing John Snow'
            ],
            correct: 0
        }
    ];

    function generateArrayIndex(array) {
        return Math.floor(Math.random() * (array.length - 1)) + 0;
    }

    function score() {
        let sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            console.log('Actual result:' + sc);
            return score;
        }
    }

    let keepScore = score();

    // Solution 1

    /*
    class Question {
        constructor({ content, answers, correct }) {
            this.content = content;
            this.answers = answers;
            this.correct = correct;
        }
        printAnswers() {
            let result = '';
            for (let i = 0; i < this.answers.length; i++) {
                result += '\n ' + i + ': ' + this.answers[i];
            };
            return result;
        }
        askQuestion() {
            let answer = window.prompt(this.content
                + this.printAnswers(this.answers), '');
            return Number(answer) === this.correct;
        }
    };
    */

    // Solution 2

    function Question(params) {
        this.content = params.content;
        this.answers = params.answers;
        this.correct = params.correct;
    }

    Question.prototype.printAnswers = function () {
        let result = '';
        for (let i = 0; i < this.answers.length; i++) {
            result += '\n ' + i + ': ' + this.answers[i];
        };
        return result;
    }

    Question.prototype.answerQuestion = function () {
        let answer = window.prompt(this.content
            + this.printAnswers(this.answers), '');
        return answer;
    }

    Question.prototype.checkAnswer = function (answer, callback) {
        let response = Number(answer) === this.correct;
        if (response) callback(true)
        else callback(false);
        console.log(response);
        return response;
    }

    Question.prototype.isExit = function (answer) {
        console.log('Answer: ' + answer)
        return answer === 'exit';
    }

    // Run a quiz for pre-set questions

    function askQuestion(array) {
        let i = generateArrayIndex(array);
        let question = new Question(array[i]);

        let answer = question.answerQuestion();
        question.checkAnswer(answer, keepScore);

        if (!question.isExit(answer)) askQuestion(array)
    }
    askQuestion(questions);
})()