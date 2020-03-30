// IN JAVASCRIPT ALMOST EVERYTHING IS AN OBJECT

/* 
//////PRIMITIVES/////// 
- Numbers
- Strings
- Booleans
- Undefined
- Null

///////EVERYTHING ELSE ARE OBJECTS///////
- Arrays
- Functions
- Objects
- Dates
- Wrappers for Numbers, Strings, Booleans

Almost everything is an object except primitives

Object Oriented Programming 
- Objects interact with each other through methods and properties.
- Used to store data, structure applications into modules and keeping code clean

In Javascript we have a constructor or prototype which is very similar to a java class(which has a constructor)

- With the constructor you can create as many instances (objects of this type) of an object as you'd like


////////INHERITANCE IN JAVASCRIPT////////
- When an object is based on antoher object
- An object can have access to a main object's methods
- With inheritance an object can have not only it's own methods but it's parent (prototype) methods


///////////PROTOTYPES//////////
- In javascript inheritance works by using prototypes
- This means each object has a prototype property

How does inheritance works
- Write the methods that you want the instances to inherit in the prototype object (paretn object)
- All objects are instances of object constructor and have access to the object contructor methods


//////PROTOTYPE CHAIN///
- javasctipt will try and look for the method in the current object's prototype and goes through all the contructors(parent objects) to look for it until it hits null, the prototype of the Object object. Null is the last object in the protoype chain


- Every JavaScript object has a prototype property, which makes inheritance possible in javascript
- The prototype propery of an object is where you put methods and properties that you want other objects to inherit
-The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instnaces that are created through it;
-When a certain method(or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.

*/


/*//////////FUNCTION CONSTRUCTORS/////////// */

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'Teacher'
// };

// //Function contructors start with capital letter (common convention)
// //this is how you create a parent object
// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function(){
//     //     console.log(2020 - this.yearOfBirth);
//     // };
// };

// //if the method is not in the constructor you can add it to the prototype and it will still work, this was commented out of the contructor on lines 70-72 and added to the Person contstructor's prototype
// Person.prototype.calculateAge = function(){
//     console.log(2020 - this.yearOfBirth);};

// // you can also add properties to the prototype
// Person.prototype.lastName = 'Smith';

// //this is how you instantiate an instance of the peroson object, this is called instantiation
// //When we use the "new" operator an EMPTY object is created and then the person function is called
// //the this keyword in the parent object is used on the empty object called by 'new'
// var john = new Person('John', 1990, 
// 'teacher');

// //each of these objects inherit the methods from the constructor's prototype
// john.calculateAge();
// var jane = new Person('Jane',1990,'designer');
// jane.calculateAge();
// var mark = new Person('Mark',1988,'retired');
// mark.calculateAge();


/* ////PROTOTYPE AND THE CONSOLE/////

THE CONSOLE CAN BE USED TO INSPECT AN OBJECT SIMPLY BY TYPING THE NAME OF THE OBJECT

- Once you do this you will see somthing called _proto_ clicking this will give you the protoype of this object

- Writing this in the console john.__proto__ === Person.prototype will give you true or false if they match because _proto_ would be a property of any object

-to check where a property lives you can check an object using john.hasOwnProperty('job'), if it has it, it will be true if not it will say false. If it is false but you can use the method or property then it means it belongs to it's parent object (contructor prototype)

-check if an object is an instance of a constructor use john instanceOf Person

-You can see all the methods of an object by inspecting it in the console and checking __proto__


////////CREATING OBJECTS WITH Object.create Method

Object.create

*/
//becuase this is not a function constructor we do not use the capital p
// var personProto = {
//     calculateAge: function(){
//         console.log(2020-this.yearOfBirth);
//     }
// };

// //after creating the prototype above you can use the Object.create method and pass in the object prototyp as the parameter
// var john = Object.create(personProto);
// //using this method you can then add all the properties to your new object instance like below
// john.name = 'john';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// //this is a different way of creating an object using the Object.create method; it takes a second parameter where you can list all the properties and their values
// var jane = Object.create(personProto, 
// {
//     name: { value: 'jane' },
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer' }
// });

/*
The difference between creating an object with the Object.create method and the object constructor method above is that the Object.create inherits methods directly from the object passed in the first argumet, 'personProto' in this case. and the constructor way inherits from the prototype of the constructor.

MOST POPULAR WAY IS THE FUNCTION CONSTRUCTOR
*/ 



/* //////////////PRIMITIVES VS OBJECTS ///////////*/

//A variable containing an object does not actually contain the object itself. It only points to the place in memory where the object is stored. So it stores the place where the object lives in memory.

//A variable containing a primitive does store and contain the primitive (number, string, null, undefined, boolean). The variable will hold it's own copy of the data

// var a = 23; 
// var b = a;
// a = 46;

// console.log(a);
// console.log(b);

// var obj1 = {
//     name: 'john',
//     age: 23
// };
// //Unlike primitives, objects do not hold information so when you point an object to another object you're pointing both object variables to the same object, so chaning one thing in one variable it will change it to the other object as well
// var obj2 = obj1;
// obj1.age = 40;
// console.log(obj1.age);
// console.log(obj2.age);

// var age = 27;
// var obj = {
//     name: 'leo',
//     city: 'buckeye'
// };

// function change(a,b){
//     a = 30;
//     b.city = 'phoenix';
// };
// //passing variable 'age' into the function will NOT change the value of the variable because it is a primitive. All that will happen in the function above is that it will create it's own variable and assign the value you give it; it will however change the variable for objects because we do not pass the actual object only the reference to that function (the location in memory)
// change(age,obj);

// console.log(obj,age);


/********FUNCTIONS ARE ALSO OBJECTS IN JAVASCRIPT******** */

/**
 * - A function is an instance of the Ojbect type;
 * - A function behaves like any other object;
 * - We can store functions in a variable;
 * - We can pass a function as an argument to another function;
 * - we can return a function from a function;
 *  JAVASCRIPT HAS FIRST CLASS FUNCTIONS
 */

//  var years = [1990,1965,1937,2005,1998];
// //you can pass in a function as an argument to a function see below, fn is the function we pass in and call it later in the code as fn(argument)
//  function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         //callbakc function used here (fn(arr[i]))
//         arrRes.push(fn(arr[i]));
//     };
//     return arrRes;
//  };
// //this is the function passed into the arrayCalc function
//  function calculateAge(el){
//      return 2020 - el;
//  };

// //we can then use the function, name only, as the argument (this is called a callback function it will be called later in the code of the function named arrayCalc)
// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// //
// function isFullAge(el){
//     //comparison operator will return true or false depending on condition
//     return el >= 18;
// };

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// function maxHeartRate(el){
//     if(el >= 18 && el <= 81){
//     //round will round to closest int
//         return Math.round(206.9 - (0.67*el));
//     } else {
//         return -1;
//     };
// };
// //Another example of using a function as an argument for a function
// var rates = arrayCalc(ages,maxHeartRate);
// console.log(rates);

/**FUNCTIONS RETURNING FUNCTIONS */

// function interviewQuestions(job){
//     if (job === 'designer'){
//         //returning a function makes use of anonymous functions like below
//         return function(name){
//             console.log(name + ' Can you please explain what UX design is?');
//         };
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?');
//         };
//     } else {
//         return function(name){
//             console.log('Hello ' + name + ' what do you do?');
//         };
//     };
// };

// //store the function in a variable; this effectively a function expression
// var teacherQuestion = interviewQuestions('teacher');
// var designerQeustion = interviewQuestions('designer');
// //you can then use the function by calling the variable and passing in any needed arguments
// teacherQuestion('Leo');
// designerQeustion('John');
// //Another way of using functions that return fucntions
// //the reason this works is because it is read left to right
// interviewQuestions('teacher')('Mark');


/** IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)******/
//IIFE allows you to run a fucntion without the need to call it, simply writing it will create the function

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// };

// game();

//IIFE
// (function (){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// //WHY DOES THIS WORK; in javascript what's inside of parenthesis cannot be a statement, so wrapping inside the parenthesis works after that you just call the function using parens; This allows for data privacy; the code of an IIFE will not be reusable but does allow for privacy

// //another example of an IIFE with an argument this time
// (function (goodluck){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })(5);


/** /\\/\\///\/\/\/\/\ CLOSURES //\/\\/\/\\/\\/\/\\*/

/**An inner function always has access to the variables and parameters of its outer functoin, even after the outer function has returned and it's execution context removed from the stack; the variable the you assing the function to, will retain all the variables (enclose them), this is closures*/

// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth){
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     };
// };

// var usaRetirementAge = retirement(66);
// //retirement(66)(1988);

// var retirementAgeGermany = retirement(65);
// var retirementAgeIceland = retirement(67);

// usaRetirementAge(1988);
// retirementAgeGermany(1988);
// retirementAgeIceland(1988);


/**CODING CHALLENGE */
/**RE-write the function below using the power of closures */
// function interviewQuestions(job){
//     if (job === 'designer'){
//         //returning a function makes use of anonymous functions like below
//         return function(name){
//             console.log(name + ' Can you please explain what UX design is?');
//         };
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?');
//         };
//     } else {
//         return function(name){
//             console.log('Hello ' + name + ' what do you do?');
//         };
//     };
// };


// function interviewQuestions(job){
//     return function(name){
//         //used switch statement just to remember how to do it, can be replaced with if statements
//         switch(job){
//             case 'designer':
//             question =  ', Can you please explain what UX design is?';
//             break;
//             case 'teacher':
//             question = ', What subject do you teach?';
//             break;
//             default:
//             question = ', Hello what do you do?';
//         };
//         console.log(name + question);
//     };
// };

// var question = interviewQuestions('designer');
// question('Leo');
// interviewQuestions('teacher')('Fred');
// interviewQuestions('Dog Whisperer')('Steve');

//check the final version provided on 5-Advanced-JS for the instructor's solution

/** /\\/\\///\/\/\/\/\ BIND, CALL AND APPLY //\/\\/\/\\/\\/\/\\*/

//CALL METHOD allows an object to effectively borrow a method from another object, below object john has a method that the emily object does not have but emily will be able to borrow the method and use it for itself. The call method sets the this variable to another object, see line 381

//APPLY METHOD works very simlar to the call method with the difference being that you use and array to pass in the arguments the function being called requires

//BIND METHOD is also very smilar to the call method, it allows us to set the this variable, however it differs in that it will not run the function immediately it will create a copy of the function so you can use later, you need to store the function in a variable

// var john = {
//     name: 'john',
//     age: 28,
//     job: 'teacher',
//     presentation: function(style,timeOfDay){
//         if (style === 'formal'){
//             console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly'){
//             console.log('Hey what\'s up I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
//         }
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal','morning');

// //CALL METHOD to borrow methods from other objects, even if they don't exist in the current object, using the call method you set the this keyword to the object you want to use the method in along with any required arguments the function will need see below
// john.presentation.call(emily,'friendly','afternoon');

// //APPLY METHOD works the same as the call method the diffrence is you pass it an array with the needed arguments
// john.presentation.apply(emily,['formal','morning']);

// //BIND METHOD allows to preset some of the arguments as well as make a copy of the function. The copy of the function will have a preset argument if you give it one, you can also set the this variable to any object you want. remember to store in a variable since it returns a function. This is a way of currying.

// var johnFriendly = john.presentation.bind(john,'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// //Currying is a technique used when creating a function based on another function but with some pre-set arguments

//  var years = [1990,1965,1937,2005,1998];

//  function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     };
//     return arrRes;
//  };

//  function calculateAge(el){
//      return 2020 - el;
//  };

// //This function needs to arguments but on line 406 we only pass in one argument. This can be solved by pre-setting one of the arguments(currying), using the BIND method, in this case presetting limit
// function isFullAge(limit, el){
//     return el >= limit;
// };

// //calculate ages, using callback function
// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// //using bind on a function to set a preset argument where we don't need to set the this variable; notice we just use 'this' and we set the preset argument to 20
// var fullJapan = arrayCalc(ages,isFullAge.bind(this, 20));
// console.log(fullJapan);



/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

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
*/

// (function(){
//     var Question = function(question,choices,answer){
//     this.question = question;
//     this.choices = choices;
//     this.answer = answer;
//     this.askQuestoin = function (){
//         console.log(this.question);
//         //log answes on their own line
//         for (var i = 0; i < this.choices.length; i++){
//             console.log(this.choices[i]);
//         };
//         //ask for user answer
//         this.userAnswer = prompt('Enter number of correct answer:');
//     };
//     this.checkAnswer = function (){
//         if (this.userAnswer == this.answer){
//             console.log('Correct!');
//         } else {
//             console.log('Incorrect')
//         };
//     };
// };

// var q1 = new Question('Who is the best NFL team?',['1. Cowboys','2. Patriots','3. Packers'], 1);
// var q2 = new Question('How many superbowls have the Cowboys won?',[1, 0, 5], 5);
// var q3 = new Question('Who won the most Super Bowls for the Cowboys?',['1. Roger Staubach','2. Tony Romo','3. Troy Aikman'], 3);

// var questions = [q1,q2,q3];

// var random = Math.floor(Math.random()*questions.length);
// var q = questions[random];

// q.askQuestoin();
// q.checkAnswer();
// })();0

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this. */

(function(){
    var userScore = 0;
    var Question = function(question,choices,answer){
        this.question = question;
        this.choices = choices;
        this.answer = answer;
        this.askQuestion = function (){
            console.log(this.question);
            //log answes on their own line
            for (var i = 0; i < this.choices.length; i++){
                console.log(this.choices[i]);
            };
            //ask for user answer
            this.userAnswer = prompt('Enter number of correct answer:');
        };
        this.checkAnswer = function (fn,arr){
            if (this.userAnswer == this.answer){
                userScore += 1;
                console.log('Correct!\nYour current score is ' + userScore + '\n------------------------------------');
                fn(arr);
            } else if (this.userAnswer === 'exit'){
                //exit game
            }else {
                console.log('Incorrect Try Again');
                this.askQuestion();
                this.checkAnswer(fn,arr);
            };
        };
    };

var q1 = new Question('Who is the best NFL team?',['1. Cowboys','2. Patriots','3. Packers'], 1);
var q2 = new Question('How many superbowls have the Cowboys won?',[1, 0, 5], 5);
var q3 = new Question('Who won the most Super Bowls for the Cowboys?',['1. Roger Staubach','2. Tony Romo','3. Troy Aikman'], 3);

var questions = [q1,q2,q3];

function random(quesArr){
    return Math.floor(Math.random()*quesArr.length);
};

function nextQuestion(queArr){
    var q = queArr[random(queArr)];
    q.askQuestion();
    q.checkAnswer(nextQuestion,questions);
};

nextQuestion(questions);

})();0
