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

// //2 diff data types, string and number. but if we print them to console, what happens?
// var firstName = 'Zachary';
// var age = 22;
// console.log(firstName + ' ' + age)

// // How does this work? It prints it all in the same format it appears...
//         // age was logged as a string, thanks to type coercion

// var job, isMarried;
// job = 'student';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation (redefining variables)
// job = 'developer';
// age = 'twenty two';

// // instead of console logging it, we are going to use alert
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // we can also ask a question using prompt

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName)










// // Basic Operators LESSON 3

// var year = 2020
// var ageZack = 22;
// var ageBran = 21;

// yearZack = year - ageZack - 1;
// yearBran = year - ageBran - 1;

// console.log(yearZack, yearBran);
// console.log(year + 11);
// console.log(year / 3);
// console.log(year * 1.5);

// // Logical Operators
// var branOlder = ageZack < ageBran;
// console.log('is brandon older? ' + branOlder);

// // typeOf operator (will tell us data type of variable)
// console.log(typeof branOlder);








// Operator Precedence LESSON 4

var now = 2020;
var yearZack = 1997;
var fullAge = 18;

var isFullAge = now - yearZack >= fullAge; // true
console.log(isFullAge);

var ageZack = now - yearZack;
var ageMark = 35;
var average = (ageZack + ageMark) / 2;
console.log(average);


// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 26
console.log(x, y);

// More operators
// x = x * 2; is the same thing as x *= 2;

x *=2; // 26 * 2 = 52
console.log(x);
x +=10; // 52 + 10
console.log(x);

//all 3 below examples are same
// x = x + 1;
// x += 1;
// x++
x++; // 62 + 1
console.log(x);
x--; // 63 - 1
console.log(x);