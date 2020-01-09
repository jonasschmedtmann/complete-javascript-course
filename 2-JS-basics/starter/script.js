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
// var names = ['Zack', 'Brandon', 'Mom', 'Dad'];
// var years = new Array(1997, 1998, 1970, 1973);

// // how to access elements in an array
// console.log(names[0, 1, 2, 3]); // arrays are 0 based, so Zack is element 0 in names array
// console.log(names.length); // length of array using .length method

// console.log(years[3]);
// console.log(years.length);

// //mutate the data in the array
// names[2] = 'Debbi';
// console.log(names);

// // we can add data to array, even accessing a position that is not there
// // names[5] = 'Mary';
// // console.log(names);
// names[names.length] = 'Mary';
// console.log(names);
// console.log(names.length)


// // Different data types
// var zack = ['Zack', 'Bumpous', (1997 + 1 - 1) * 0 + 1997, 'student', false];
// console.log(zack);

// zack.push('blue'); // push method puts the string blue into the end of the zack array
// console.log(zack);

// zack.unshift('Mr.'); // unshift method puts the string Mr. into the beginning of the zack array
// console.log(zack);

// zack.pop(); // pop method removes the data at the end of the zack array

// zack.shift(); // shift method removes the data at the beginning of the zack array
// console.log(zack);

// console.log(zack.indexOf('student')); // tells me the index of what i am searching for inside the zack array (should return 3 in console, and it does)


// //lets use ternary operator we learned about before
// // if we have student, it returns the index, if not it will return -1
// //we are searching for 'student' and if we don't have it, it will return -1 and will return zack is not a student, otherwise will return zack is a student. (should return he is a student and does)
// var isStudent = zack.indexOf('student') === -1 ? 'Zack is not a student' : 'Zack is a student';
// console.log(isStudent);









/*
Coding Challenge 3!

John and his family went on a holiday and went to 3 diff. restaurants. The bills were $124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
    1) Containing all three tips (one for each bill)
    2) Containing all three final paid amounts (bill + tip)

    (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

// function tipCalculator(bill){
//     if (bill < 50) {
//         bill + (bill * .20);
//     } else if (bill >= 50 && bill <= 200) {
//         bill + (bill * .15);
//     } else if (bill > 200) {
//         bill + (bill * .1);
//     } else {
//         return 'are you sure you went out to eat?'
//     }
// }

// var totals = console.log(tipCalculator(124));


// function tipCalculator(bill){
//     var percentage;
//     // if else statement for bill percentage
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     } 
//     return percentage * bill;
// }

// console.log(tipCalculator(124));
// console.log(tipCalculator(48));
// console.log(tipCalculator(268));

// var bills = [124, 48, 268];

// // below is an array that uses our tipCalculator function and the values from our bills array and calculates the tip by how much the bill costs
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];
// console.log(tips);

// var finalAmounts = [bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2]];

// console.log (tips, finalAmounts);










// Objects and Properties Lesson 12

// Object literal
// var zack = {
//     firstName: 'Zack', // firstName is the key, 'Zack' is the value, together they are a key value pair. Also firstName is a property of the zack object
//     lastName: 'Bumpous',
//     birthYear: 1997,
//     // we can put all sorts of data types in an object. We can even put an array!! Even another object inside of the object. An array can also have an object or another array or really whatever inside it
//     family: ['Brandon', 'Debbi', 'Jeff'],
//     job: 'student',
//     isMarried: false
// };

// //retrieving/seeing diff data in the object below!! until line 610
// //log the object to see the different properties
// console.log(zack);
// console.log(zack.firstName); // to get a specific property, use the dot notation .firstName or .lastName
// console.log(zack['lastName']);
// var x = 'birthYear';
// console.log(zack[x]);

// //mutate the data, two diff ways
// zack.job = 'full stack dev'; // dot notation
// zack['isMarried'] = true; // brackets notation
// console.log(zack);

// // two ways to initialize/create an array, some w object

// //new Object Syntax
// var debbi = new Object();
// debbi.name = 'Debbi';
// debbi.birthYear = 1970;
// debbi['lastName'] = 'Bumpous';
// console.log(debbi);











// Objects and Methods LESSON 13

// 1. we want to add a method in order to calculate the age of Zack, we dont want it hard coded because it changes every year, but birthYear is constant
// var zack = {
//     firstName: 'Zack', 
//     lastName: 'Bumpous',
//     birthYear: 1997,
//     family: ['Brandon', 'Debbi', 'Jeff'],
//     job: 'student',
//     isMarried: false,
// // 2. We need to define another key. We are going to give the key a value of a function expression
//     calcAge: function(){
//         this.age = 2020 - this.birthYear - 1; // instead of passing in birthYear as argument, this.birthYear means zack object's birthYear key's value
//         // this.age = 2020 is defining a key and a value inside this object, zack and then using it inside the function
//     }
// };

// // 3. call this, and lets store it right into the zack object
// zack.calcAge();
// console.log(zack);












/*
Coding Challenge 4!

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods
    1. For each of them, create an object with properties for their full name, mass, and height
    2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
    3. In the end, log to the console who has the highest bMI, together with the full name and the respective BMI. Don't forget they might have the same bMI.

    BMI = mass / height ^2 = mass / (height * height)
*/

// var mark = {
//     fullName: 'Mark Doe',
//     mass: 91.6,
//     height: 1.75,
//     calcBmi: function(){
//        this.bmi = this.mass / (this.height * this.height);
//        return this.bmi;
//     }
// }

// var john = {
//     fullName: 'John Doe',
//     mass: 99.7,
//     height: 1.85,
//     calcBmi: function(){
//        this.bmi = this.mass / (this.height * this.height);
//        return this.bmi;
//     }
// }


// console.log(mark, john);

// if (john.calcBmi() > mark.calcBmi()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('they have same bmi')
// }











// Loops and Iteration LESSON 14

// console.log(1); // 1. to do this from 1 thru 10 would suck

// 2. lets use a for loop
// 3. a for loop has three parts.. initial value
// 4. ex: for ([initialization (usually a counter)]; [condition]; [final-expression])              
//                statement
/* 
for (var i = 0; i < 10; i++) {
    //what should happen in each of the loops.. statement
    console.log(i);
}

// i = 0, then we say i must be < 10 for the loop to run or be true, i++ (i + 1), log i to console


// 5. lets say we have an app where we want to display the five values below contained in the array to the console
var zack = ['Zack', 'Bumpous', (1997 + 1 - 1) * 0 + 1997, 'student', false];
*/

// 6. okay well we could console.log(john[0]); all the way until the last index
// 7. the solution is to use a loop (for loop)
// 8. we need the var i = 0 counter variable in order to be able to count through the array to console log all of the i's (indexes) of the array, starting from beginning (0) until the end of the loop we declare
// 9. We want the loop to run to specifications, so we said i++ (i + 1) so it will go over every index in the array without skipping any. of course we could put diff. logic in here to get a diff pattern
// 10. We run the loop as long as the counter variable is less than our condition we had stated, which is i < zack.length; or basically what it means is that i (the index value) is less not going to be larger than the highest index number in the array. So it won't be searching for the 6th index if there are only 5 indexes. It is also nice bc if we add something to the array we don't have to change the condition
/*
for (var i = 0; i < zack.length; i++) {
    console.log(zack[i]) // log to the console zack at position i
}

// 11. While loop - in the while-loop, all we have to pass into it is the condition
// 12. while loop below is basically saying:
//          
//          defined var, if a counter usually set to 0
//          while (this condition true){
//              execute this code
//          }

// 13. while loop example that does the same thing as example above
var i = 0;
while(i < zack.length) {
    console.log(zack[i]); // this console log prints everything in the array line by line
    i++; // this makes sure the loop doesn't run endlessly
}

console.log(i); // this console log tells me number of items in the array
*/

// 13. continue and break statements
// 14. use the continue iteration to stop, and then continue again

// var zack = ['Zack', 'Bumpous', (1997 + 1 - 1) * 0 + 1997, 'student', false];
// for (var i = 0; i < zack.length; i++) {
//     // 15. lets say we only want to log stuff down from the array that data type is a string, so if it is not a string it will quit with the current iteration and then continue on next
//     // 16. if (datatype of array at where ever i is, !== (strictly different) from a string, then we want to continue)
//     if (typeof zack[i] !== 'string') continue;
//     console.log(zack[i]);
// }

// // 17. Break statement, it cancels the iteration, and does not continue
// // 18. notice the only real diff in the continue and break statements we made (above and below) are that we changed the keyword continue to the keyword break
// // 19. Once the break statement we created encounters a string, it will break, because we said if i !== which means i has to be === to a string in order for the loop to keep working
// for (var i = 0; i < zack.length; i++) {
    
//     if (typeof zack[i] !== 'string') break;
//     console.log(zack[i]);
// }

// // 20. Looping through an array from back to beginning!
// for (var i = zack.length -1; i >= 0; i--) {
//     console.log(zack[i]);
// }











/*
Coding Challenge 5!

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different resaurants. The bills were $124, $48, $268, $180, and $42.

John likes to tip 20% when bill is < $50, 15% when bill is >= 50 && bill is <= 200, and %10 if the bill is > 200

Implement a tip calculator using objects and loops:
    1. Create an object with an array for the bill values
    2. Add a method to calculate the tip
    3. This method should include a loop to iterate over all the paid bills and do the tip calculations
    4. As an output, create 1) a new array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop
*/

// 1. Create the johnData object, it has some info
// var johnData = {
//     fullName: 'John Smith',
//     // 1B. The object has an array storing bill values
//     bills: [
//         124,
//         48,
//         268,
//         180,
//         42
//     ],
//     // 2. Add a method to calculate the tip
//     calcTip: function(){
//         this.tips = [];
//         this.finalValues = [];

//     // 3. This method should include a loop to iterate over all the paid bills
//         for (var i = 0; i < this.bills.length; i++){
//             // Determine % based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
//     // 3B. And method should do tip calculations as array is being iterated over
//             if (bill[i] < 50) {
//                 percentage = .2;
//             } else if (bill[i] >= 50 && bill[i] < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }


//             // 4. Add the results to the corresponding arrays (empty ones)

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }  
// }
// johnData.calcTip();
// console.log(johnData);


// // Challenge 5 Part Two!!!
// // 1. Create the johnData object, it has some info
// var markData = {
//     fullName: 'Mark Malarky',
//     // 1B. The object has an array storing bill values
//     bills: [
//         189,
//         148,
//         368,
//         99,
//         65,
//         117
//     ],
//     // 2. Add a method to calculate the tip
//     calcTip: function(){
//         this.tips = [];
//         this.finalValues = [];

//     // 3. This method should include a loop to iterate over all the paid bills
//         for (var i = 0; i < this.bills.length; i++){
//             // Determine % based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
//     // 3B. And method should do tip calculations as array is being iterated over
//             if (bill[i] < 100) {
//                 percentage = .2;
//             } else if (bill[i] >= 100 && bill[i] <= 300) {
//                 percentage = .1;
//             } else {
//                 percentage = .25;
//             }


//             // 4. Add the results to the corresponding arrays (empty ones)

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }  
// }

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++){
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }

// // Do the calculations
// johnData.calcTip();
// markData.calcTip();


// johnData.average = calcAverage(johnData.tips);
// markData.average = calcAverage(markData.tips);
// console.log(johnData, markData)

// if (johnData.average > markData.average) {
//     console.log(johnData.fullName + '\'s family pays higher tips, with an average of $' + johnData.average);
// } else if (markData.average > johnData.average) {
//     console.log(markData.fullName + '\'s family pays higher tips, with an average of $' + markData.average);
// }










