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

// var now = 2020;
// var yearZack = 1997;
// var fullAge = 18;

// var isFullAge = now - yearZack >= fullAge; // true
// console.log(isFullAge);

// var ageZack = now - yearZack;
// var ageMark = 35;
// var average = (ageZack + ageMark) / 2;
// console.log(average);


// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 26
// console.log(x, y);

// // More operators
// // x = x * 2; is the same thing as x *= 2;

// x *=2; // 26 * 2 = 52
// console.log(x);
// x +=10; // 52 + 10
// console.log(x);

// //all 3 below examples are same
// // x = x + 1;
// // x += 1;
// // x++
// x++; // 62 + 1
// console.log(x);
// x--; // 63 - 1
// console.log(x);









// CODING CHALLENGE 1

/*
Mark and John are trying to compare their BMU which is calculated using the formula: BMI = mass / height^2 or the same as BMI = mass / (height * height)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has as higher BMI than John
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true")
*/

// var markHeight, markWeight, johnHeight, johnWeight;

// //heights
// markHeight = 6;
// johnHeight = 5.7;

// //weights
// markWeight = 203;
// johnWeight = 192;

// var markBMI, johnBMI;

// //BMIs
// markBMI = 203 / (6*6);
// johnBMI = 192 / (5.7*5.7);
// console.log(johnBMI, markBMI);

// var johnLowerBMI = johnBMI < markBMI;
// console.log('Is John\'s BMI lower than Mark\'s? ' + johnLowerBMI);






// If / else Statements LESSON 5

// var firstName = 'Zack';
// var civilStatus = 'single';

// if (civilStatus === 'married'){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single!');    
// }

// var isMarried = true;
// if (isMarried){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon!');
// }




// var markHeight, markWeight, johnHeight, johnWeight;

// //heights
// markHeight = 6;
// johnHeight = 5.7;

// //weights
// markWeight = 203;
// johnWeight = 192;

// var markBMI, johnBMI;

// //BMIs
// markBMI = 203 / (6*6);
// johnBMI = 192 / (5.7*5.7);
// console.log(johnBMI, markBMI);

// var johnLowerBMI = johnBMI < markBMI;
// console.log('Is John\'s BMI lower than Mark\'s? ' + johnLowerBMI);



// if (markBMI > johnBMI) {
//     console.log('Mark\'s BMI is higher than John\'s');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s');
// }








// Boolean Logic LESSON 6

// var firstName = 'zack';
// var age = '22';

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20){ // between 13 and 20
//     console.log(firstName + ' is a teenager.');
// } else if (age > 20 && age < 30){ // between 13 and 20
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a grown ass man.')
// }








// // The Ternary Operator (Conditional Operator) and Switch Statements LESSON 7 

// var firstName = 'Zack';
// var age = 22;

// //this ? : sequence is the ternary operator
// age >= 21 ? console.log(firstName + ' drinks beer')
// : console.log(firstName + ' drinks juice')

// // another ternary
// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);


// // lets do this with an if else statement to see the difference

// if (age >= 21) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// // THE TERNARY OPERATOR LOOKS WAY BETTER in this situation


// // Switch Statement below

// var job = 'student';
// switch(job){
//     case 'student':
//     case 'pupil':
//         console.log(firstName + ' learns how to be a fullstack dev');
//         break;
//     case 'driver':
//         console.log(firstName + ' drive a lyft in south dakota');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs amazing websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

// // change this to a switch statement

// // var firstName = 'zack';
// // var age = '22';

// // if (age < 13) {
// //     console.log(firstName + ' is a boy.');
// // } else if (age >= 13 && age < 20){ // between 13 and 20
// //     console.log(firstName + ' is a teenager.');
// // } else if (age > 20 && age < 30){ // between 13 and 20
// //     console.log(firstName + ' is a young man.');
// // } else {
// //     console.log(firstName + ' is a grown ass man.')
// // }

// switch (!false){
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//     break;

//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//     break;

//     case age > 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//     break;

//     default:
//         console.log(firstName + ' is a grown ass man.')

// }






// Truthy and Falsy Values and Equality Operators LESSON 8
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;
// height = 23;

// if (height || height === 0){
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined')
// }

// // equality operators
// // === strict equals, no type coercion
// // == type coercion, so data types dont have to match
// if (height == '23'){
//     console.log('The == operator does type coercion!');
// }








// CODING CHALLENGE 2
/*
John and Mike both play basketball in different teams. In the latest 3 games, Johns team scored 89, 120, and 103 points, while Mikes team scored 116, 94, and 123 points.

1. Calculate the average score for each team
2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (same avg score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 point. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one just watch the solution.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

//1.
// johnAvg = (100 + 100 + 100) / 3;
// mikeAvg = (300 + 0 + 0) / 3;
// maryAvg = (110 + 90 + 100) / 3;
// console.log(johnAvg, mikeAvg, maryAvg)

// //2.
// if (johnAvg > mikeAvg && johnAvg > maryAvg){
//     console.log('John has a highest average score')
// } else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
//     console.log('Mike has a highest average score')
// }else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
//     console.log('Mary has the highest average score')
// }else if (mikeAvg === johnAvg && johnAvg === maryAvg){
//     console.log('John and Mike and Mary, have equal averages, draw')
// } else {
//     console.log('Something is wrong, very wrong. This is a test essentially.')
// }

//3. I changed the scores. I made sure it did everything, I even broke it to go to the last console.log

//4. Data for Mary exists








// Functions LESSON 9

// function calculateAge(birthYear){
//     return 2020 - birthYear;
// }

// var ageZack = calculateAge(1997 + 1);
// var ageMom = calculateAge(1970 + 1);
// var ageDad = calculateAge(1973 + 1);
// var ageBran = calculateAge(1998 + 1);
// console.log(ageZack, ageMom, ageDad, ageBran);


// function yearsToRetire(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.')
//     }
// }

// yearsToRetire(1997 + 1, 'Zack')
// yearsToRetire(1970 + 1, 'Debbi')
// yearsToRetire(1973 + 1, 'Jeff')
// yearsToRetire(1998 + 1, 'Brandon')










// Function Statements and Expressions LESSON 10

//Function declaration
// function whatDoyouDo(job, firstName){

// }


//Function expression
// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a Lyft in South Dakota';
//         case 'student':
//             return firstName + ' learns how to code';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('student', 'Zack'));












// Arrays LESSON 11
//Initialize new array
var names = ['Zack', 'Brandon', 'Mom', 'Dad'];
var years = new Array(1997, 1998, 1970, 1973);

// how to access elements in an array
console.log(names[0, 1, 2, 3]); // arrays are 0 based, so Zack is element 0 in names array
console.log(names.length); // length of array using .length method

console.log(years[3]);
console.log(years.length);

//mutate the data in the array
names[2] = 'Debbi';
console.log(names);

// we can add data to array, even accessing a position that is not there
// names[5] = 'Mary';
// console.log(names);
names[names.length] = 'Mary';
console.log(names);
console.log(names.length)


// Different data types
var zack = ['Zack', 'Bumpous', (1997 + 1 - 1) * 0 + 1997, 'student', false];
console.log(zack);

zack.push('blue'); // push method puts the string blue into the end of the zack array
console.log(zack);

zack.unshift('Mr.'); // unshift method puts the string Mr. into the beginning of the zack array
console.log(zack);

zack.pop(); // pop method removes the data at the end of the zack array

zack.shift(); // shift method removes the data at the beginning of the zack array
console.log(zack);

console.log(zack.indexOf('student')); // tells me the index of what i am searching for inside the zack array (should return 3 in console, and it does)


//lets use ternary operator we learned about before
// if we have student, it returns the index, if not it will return -1
//we are searching for 'student' and if we don't have it, it will return -1 and will return zack is not a student, otherwise will return zack is a student. (should return he is a student and does)
var isStudent = zack.indexOf('student') === -1 ? 'Zack is not a student' : 'Zack is a student';
console.log(isStudent);