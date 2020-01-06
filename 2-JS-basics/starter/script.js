// Variables and data types LESSON 1

// var firstName = 'Zachary';
// var lastName = 'Bumpous';
// var age = 22;
// var aspiringDev = true;
// var fullAge = true;
// var firstDevJob = false;
// var job;

// console.log(firstName)
// console.log(`Hello, if you did not know, it is ${aspiringDev} that ${firstName} ${lastName} is an aspiring developer. He is ${age} years young. Has he had a developer job? ${firstDevJob}. His current job is ${job} because he is unemployed.`)








// Variable mutation and type coercion LESSON 2

//2 diff data types, string and number. but if we print them to console, what happens?
var firstName = 'Zachary';
var age = 22;
console.log(firstName + ' ' + age)

// How does this work? It prints it all in the same format it appears...
        // age was logged as a string, thanks to type coercion

var job, isMarried;
job = 'student';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation (redefining variables)
job = 'developer';
age = 'twenty two';

// instead of console logging it, we are going to use alert
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// we can also ask a question using prompt

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)










// Basic Operators LESSON 3