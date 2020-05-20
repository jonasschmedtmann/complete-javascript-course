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


/*// Lecture: Bind, call and apply

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
console.log(fullJapan);*/


// Coding Challenge 7
/*
--- Let's build a fun quiz game in the console! ---
Regular
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

Expert
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

/*
//Regular
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(`${i}: ${this.answers[i]}`)
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct Answer!')
        } else {
            console.log('Wrong Answer...try again....')
        }
    }

    var question1 = new Question('What color is my house?', ['white', 'brown', 'green'], 1);
    var question2 = new Question('Am I the best?', ['yes', 'no'], 0);
    var question3 = new Question('Where\'s the best place to vacation?', ['Jamaica', 'Staycation', 'Hawaii'], 0);

    var questions = [question1, question2, question3];
    var random = Math.floor(Math.random() * questions.length);

    questions[random].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer...'));
    questions[random].checkAnswer(answer);
})();*/

//Expert
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(`${i}: ${this.answers[i]}`)
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct Answer!');
            sc = callback(true);
        } else {
            console.log('Wrong Answer...try again....');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log(`Your current score is ${score}`);
        console.log('------------------------------');
    }

    var question1 = new Question('What color is my house?', ['white', 'brown', 'green'], 1);
    var question2 = new Question('Am I the best?', ['yes', 'no'], 0);
    var question3 = new Question('Where\'s the best place to vacation?', ['Jamaica', 'Staycation', 'Hawaii'], 0);

    var questions = [question1, question2, question3];

    function score() {
        var sc = 0;
        return function (correct) {
            if(correct) {
                sc ++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {

        var random = Math.floor(Math.random() * questions.length);

        questions[random].displayQuestion();

        var answer = prompt('Please select the correct answer...');

        if (answer !== 'exit') {
            questions[random].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();















