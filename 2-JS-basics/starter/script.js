/***********************************
 * VARIABLES AND DATA TYPES
 ***********************************/

// console.log("hello from source!");

// var firstName = "John";
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// 5 differnet primitive data types in javascript
// number(all are floating point numbers even if they look like integers), string, boolean, undefined(no value, non existent, example empty var), null

// javascript is dynamic typing, no need to specify the type of the data like java

// var fullAge = true; //boolean
// console.log(fullAge);

// var job; //undefined
// console.log(job);

// job = 'Teacher' //String
// console.log(job);

//variables cannot start with numbers, if you want to use numbers you need to start it with an underscore or a dollar sign; stick to using text with cammel case
// var 3years = 3;
// console.log(3years);

//cannot use reserved keywords as variable names, examples: return, if , function....


/***********************************
 * VARIABLE MUTATION AND TYPE COERCION
 ***********************************/
//javascript will automatically turn data types to what is needed, for example when you concatenate a string with a number it will turn the number into a string in order to print it
//  var firstName = 'John';
//  var age = 28;
//  console.log(firstName + ' ' + age);

//  var job, isMarried; //you can declare multiple variables 
//  job = 'teacher';
//  isMarried = false;

//  console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//  //VARIABLE MUTATION

//  age = 'twenty-eight';
//  console.log(age);

//  job = 'driver';

//  //alert is a popup window
//  alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastNmae = prompt('What is his last name?');
// console.log(firstName + ' ' + lastNmae);


/***********************************
 * BASIC OPERATORS
 ***********************************/
// var now = 2020;
// var ageJohn = 28;
// var ageMark = 33;
// var yearJohn = now - ageJohn;
// var yearMark = now - ageMark;

// //Math operators
// console.log(yearJohn + ' ' + yearMark);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator; returns the type of a variable
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);


/***********************************
 * BASIC PRECEDENCE
 ***********************************/
//which operator is exectued first; info at codingheroes.io/resources/
//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  //multiple operators
//  var isFullAge = now - yearJohn >= fullAge;
//  console.log(isFullAge);

//  //grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

//  // mutiple assignments, assignment works from right to left (associativity); in the code below y is assigned first and then y is assigned to x
//  var x, y;
//  x = y = (3+5) * 4-5;
//  //you can log two vars at the same time
//  console.log(x,y);

//  //more operators
//  x = x * 2;
//  //is the same as 
//  x *= 2;
//  console.log(x);


 /**************
  * CODING CHALLENGE
  ******************/

  /*
  Mark and john are tyring to compare their BMI (body mass index), which is calculated using the formula: BMI = mass /height^2 = mass/ (height * height). (mass in kg and height in meter).

  1. store Mark's and John's mass and height in a variable
  2. calculate both their BMI's
  3. Create a boolean variable containing information about whether Mark and has a higher BMI than John.
  4. print a string to the console containing a the variable from step 3. (something like "is marks bmi higher than john's? true").

*/

// var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI;
// markMass = 50;
// markHeight = 1.7;
// johnMass = 42;
// johnHeight = 1.5;

// johnBMI = johnMass / (johnHeight * johnHeight);
// markBMI = markMass / (markHeight * markHeight);

// whoIsFatter = johnBMI < markBMI;

// if (markBMI > johnBMI) {
//     console.log('Mark\'s BMI is higher');
// } else {
//     console.log('john\'s BMI is higher');
// }

// console.log('Is Mark\'s bmi higher than john\'s?' + ' ' + whoIsFatter);


/***********************************
 * If / else statementes
 ***********************************/

// var firstName = 'Leo';
// var civilStatus = 'single';

// if (civilStatus === 'married'){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single');
// }

// var isMarried = true;

// if (isMarried){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single');
// }


/***********************************
 * BOOLEAN LOGIC
 ***********************************/
// not => !
// and => &&
// // or => ||
//  var firstName = 'John';
//  var age = 20;

//  if (age < 13){
//      console.log(firstName + ' is a boy');
//  } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teen');
//  } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man')
//  } else {
//      console.log(firstName + ' is a man');
//  }

/***********************************
 * Ternary operator and Switch Statements
 ***********************************/

 //ternary operator is an if else statement all in one ex.
 //if true ? execute this : else execute this; live example on line 203

//  var firstName = 'john';
//  var age = 22;

//  age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
 
//  //can also use the ternary operator to set variables
//  var drink = age >= 18 ? 'beer' : 'juice';
//  console.log(drink);

//  //********SWITCH STATMENT*********\\
//  //this is another form to write an if else statement
// var job = 'actor';
// switch (job) {
//     case 'teacher':
//     //adding a second case under the first case acts as an or statement
//     case 'instructor':
//         console.log(firstName + ' teaches kids to code');
//         //break is added after each case to stope from going forward and evaluating next cases
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' desings webpages.');
//         break;
//     //default is used in case all prior cases were false
//     default:
//         console.log(firstName + ' does something else.')
// } 

//replace the following if statement with a switch statement
//  var firstName = 'John';
//  var age = 20;

//  if (age < 13){
//      console.log(firstName + ' is a boy');
//  } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teen');
//  } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man')
//  } else {
//      console.log(firstName + ' is a man');
//  }

// using switch while evaluating which statment is true should use true in switch argument not a variable. basically the argument passed to the sitch needs to match one of the cases if not the default is exectued.
// age = 31;
// switch(true) {
//     case age < 13:
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teen');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man');
// }

/***********************************
 * Truth and Falsy values and Equality operatoers
 ***********************************/

 // a falsy value is a value that is considered false when evauluated in an if else statement condition. 
 
 //fasley values: undefined, null, 0, '' (empty strings) and NaN(not a number)
 //truthy values: not falsey values

//  var height;

// height = 23;
// //statment below will be false unless you check if the variable is equal 0
// //height = 0;
//  if (height || height === 0){
//      console.log('variable is defined');
//  } else {
//      console.log('varialbe not defined');
//  }

//  //********Equality operators*********\\
//  if (height == '23'){
//      //== converts string to number and they match
//      //=== compares and makes sure both elements are the same type and match
//      console.log('The == operator does type coercion!')
//  }

 /*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var johnTeamAvg = (117 + 120 + 123) / 3;
// var mikeTeamAvg = (117 + 120 + 123) / 3;
// var maryTeamAvg = (117 + 120 + 123) / 3;

// if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
//     console.log('Johns team is the winner with ' + johnTeamAvg + ' points');
// } else if (johnTeamAvg < mikeTeamAvg && johnTeamAvg < maryTeamAvg) {
//     console.log('Mikes team is the winner with ' + mikeTeamAvg + ' points');
// } else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg){
//     console.log('Mary team is the winner with ' + mikeTeamAvg + ' points');
// } else {
//     console.log('teams tied');
// }


/***********************************
 * FUNCTIONS
 ***********************************/

//DRY: Don't Repeat Yourself, this is what functions are for. keep your code DRY!

/*functions are written by writing function nameOfFunction(any arguments needed {
    body of function
}*/

//  function calculateAge(birthYear) {
//      return 2020 - birthYear;
//  }

//  var ageLeo = calculateAge(1988);
//  var ageNancy = calculateAge(1990);
//  var ageAndres = calculateAge(2012);
//  var ageCristian = calculateAge(2018);

// console.log(ageLeo, ageAndres, ageNancy, ageCristian);

// function yearsToRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years');
//     } else {
//         console.log(firstName + ' is already retired');
//     }
// }

// yearsToRetirement(1988,'Leo');
// yearsToRetirement(1990,'Nancy');
// yearsToRetirement(2012,'Andres');
// yearsToRetirement(1988-33,'John');

/***********************************
 * FUNCTION STATEMENTS AND EXPRESSIONS
 ***********************************/

 //both function differently under the hood

 // Statements do not produce immediate results, they do things but do not produce a value


 //fucntion declaration
//  function whatDoYouDo(job, firstName){ code block }

//javascript expressions are pieces of code that always produce a value or result example 2+3 returns 5

//function expression
//  var whatDoYouDo = function(job, firstName){
//      switch(job){
//          case 'teacher':
//             return firstName + ' teaches kids to code';
//             //break not needed because we are using return!
//          case 'driver':
//             return firstName + ' drives an uber in buckeye.'
//          case 'designer':
//             return firstName + ' designs websites';
//          default:
//              return firstName + ' does something else.'
//      }
//  }

//  console.log(whatDoYouDo('teacher', 'john'));


/***********************************
 * ARRAYS
 ***********************************/
 // initialize new array
//  var names = ['John', 'Mark','Jane'];
//  var years = new Array(1990,1969,1948);

//  console.log(names[2]);
//  console.log(names.length);
// //switch data 
//  names[1] = 'Ben';
// //add elements to end of array using .lenght
// names[names.length] = 'Mary'
//  //you can add elements to an array even after non existent positions
//  names[5] = 'Leo';
//  console.log(names);
 
//  //arrays can have different data types
//  var john = ['John', 'Smith', 1990, 'designer', false];
 
//  //push method adds element to end of array
//  john.push('blue');
//  console.log(john);
//  //unshift meythod adds element to begining of arra
//  john.unshift('Mr')
//  console.log(john);
//  //pop method removes last element from array
//  john.pop();
//  console.log(john);
//  //shift removes first element of array
//  john.shift();
//  console.log(john);
// //indexOf method returns positon of element in array, -1 is return if it does not exist
// console.log(john.indexOf('Mr'));

// //ternary operator example follows
// var isDesgner = john.indexOf('designer') === -1 ? 'John is not a designer': 'John is a designer';
// console.log(isDesgner);


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// function calculateTip(bill){
//     if (bill < 50) {
//         return bill * .2;
//     } else if (bill >= 50 && bill < 200){
//         return bill * .15;
//     } else return bill * .1;
// }

// var tip1 = calculateTip(124);
// var tip2 = calculateTip(48);
// var tip3 = calculateTip(268);

// var tips = [tip1,tip2,tip3];
// var totalBills = [124 + tips[0], 48 + tips[1], 268 + tips[2]]

// console.log(tips, totalBills);


/***********************************
 * OBJECTS and properties
 ***********************************/

 //objects are similar to arrays in that they house information together, the difference is that in obects the order does not matter where in arrays the order is very important
//objects use curly braces with key:value pairs separated by commas, see below object example; keys are properties of objects they belong to

//initializig object literal
//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1988,
//      family: ['Jane','Mark','Bob','Emily'],
//      job: 'teacher',
//      isMarried: false
//  };

//  console.log(john);

//  //ways to access info in object with . notations using object keys
//  console.log(john.firstName);
//  console.log(john['lastName']);
//  var x = 'birthYear';
//  console.log(john[x]);

//  //mutate data in objects
//  john.job = 'designer';
//  john['isMarried'] = true;
//  console.log(john);

//  //initializing objects with new object syntax
//  var jane = new Object();
//  jane.name = 'Jane';
//  jane.birthYear = 1969;
//  jane['lastName'] = 'Smith';
//  console.log(jane);


/***********************************
 * OBJECTS and methods
 ***********************************/

 //methods with in objects are usefull when you want to keep track of data that does not stay constant

 //ONLY OBJECTS HAVE METHODS; arrays are objects as well

//  var john = {
//          firstName: 'John',
//          lastName: 'Smith',
//          birthYear: 1988,
//          family: ['Jane','Mark','Bob','Emily'],
//          job: 'teacher',
//          isMarried: false,
//          //below is a method that belongs to object john; it creates a variable calcAge and assigns the outcome of the function to it
//          //the method below relies on passing an argument to it
//          calcAge: function(birthYear){
//                     return 2020 - birthYear;
//          }
// };

// console.log(john.calcAge(1998));

// //using keyword this in object method
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1988,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'teacher',
//     isMarried: false,
//     //since birth year is already part of this object you can use keyword this and not have to pass in an argument
//     calcAge: function(){
//                 //this means john, the present (current) object
//                return 2020 - this.birthYear;
//     }
// };
// //no argument needed to access age
// console.log(john.calcAge());
// // you could then set a new object property and add the calculated result
// john.age = john.calcAge();
// console.log(john);

// //we can also create the new property as part of the method in the object see below
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1978,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//                 //no need to return a value just set it to new property
//                this.age = 2020 - this.birthYear;
//     }
// };
// //you hvae to call the function in order for it to run and appear in object
// john.calcAge();
// console.log(john);



/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 50,
//     height: 1.6,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         //returning the value as well as assinging is best so that you can use the fucntion to compare as well see fattest function
//         return this.BMI;
//     }
// };

// var mark = {
//     firstName: 'Mark',
//     lastName: 'Markson',
//     mass: 70,
//     height: 1.6,
//     //name of function is the property name
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         //returning the value as well as assinging is best so that you can use the fucntion to compare as well see fattest function
//         return this.BMI;
//     }
// };

// function fattest (person1, person2){
//     if (person1.calcBMI() > person2.calcBMI()){
//         return person1.firstName;
//     } else if (person1.calcBMI() < person2.calcBMI()){
//         return person2.firstName;
//     } else {
//         return 'They are equally fat';
//     }
// }
// console.log(mark, john);
// console.log(fattest(mark, john));


/***********************************
 * LOOPS AND ITERATIONS
 ***********************************/

 //loops run 1 time more than the conditions

//  for (var i = 0; i < 10; i++){
//      console.log(i);
//  }
//  //counter can increase by more than 1
//  for (var i = 0; i < 10; i+=2){
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer'];

// for (var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }

// var i = 0;
// while (i < john.length) {
//    console.log(john[i]);
//    i++;
// }

// // PRINT ONLY SPECIFIC TYPE OF DATA IN AN ARRAY
// var john = ['John', 'Smith', 1990, 'designer'];
// // continue keyword can be used to continue to next step in the loop if the condition is met; loop below will loop through the array but only print the types that are strings
// for (var i = 0; i < john.length; i++){
//    if (typeof john[i] != 'string') continue 
//         console.log(john[i]);
// }

// //the break keyword will break the entire loop and not move over to the next iteration in the loop
// for (var i = 0; i < john.length; i++){
//     if (typeof john[i] != 'string') break 
//          console.log(john[i]);
//  }
 
//  //loop in reverse
//  for (var i = john.length-1; i > -1; i--){
//      console.log(john[i]);
//  }


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// var john = {
//     fullName: 'John Smith',
//     bills: [124,48,268,180,42],
//     tips: [],
//     totalBills: [],
//     calcTip: function(){
//         var tipPercentage;
//         //the . or member access operator reads from left to right
//         for (var i = 0; i < this.bills.length; i++){
//             var amount = this.bills[i];
//             if (amount < 50) {
//                 tipPercentage = .20;
//             } else if (amount >= 50 && amount < 200){
//                 tipPercentage = .15;
//             } else {
//                 tipPercentage = .10;
//             }
//             var tip = amount * tipPercentage;
//             this.tips.push(tip);
//             this.totalBills.push(tip + amount);
//         }
//     }
// }

// john.calcTip();
// console.log(john);

// var Mark = {
//     fullName: 'Mark Johnson',
//     bills: [77,375,110,45],
//     tips: [],
//     totalBills: [],
//     calcTip: function(){
//         var tipPercentage;
//         for (var i = 0; i < this.bills.length; i++){
//             var amount = this.bills[i];
//             if (amount < 100) {
//                 tipPercentage = .20;
//             } else if (amount >= 100 && amount < 300){
//                 tipPercentage = .10;
//             } else {
//                 tipPercentage = .25;
//             }
//             var tip = amount * tipPercentage;
//             this.tips.push(tip);
//             this.totalBills.push(tip + amount);
//         }
//     }
// }

// Mark.calcTip();
// console.log(Mark.tips, Mark.totalBills);

// //adding the function outside of the objects that will use the same function is best to avoid duplicating code
// function avgBill (bills){
//     var currAmount = 0;
//     for (var i = 0; i < bills.length; i++){
//         currAmount += bills[i];
//     }
//     return currAmount/bills.length;
// }

// var johnAvgBill = avgBill(john.tips);
// var markAvgBill = avgBill(Mark.tips);

// console.log(john.fullName + ' ' + johnAvgBill, Mark.fullName + ' ' + markAvgBill);

// john.average = johnAvgBill;
// Mark.average = markAvgBill;

// console.log(john,Mark);

//ES 5 is fully supported in all browsers
//ES2015 and greater are not supported in older browsers as of 2018
//newer versions of ES like ES2015 and greater can be converted back to ES5 using transpiling and polyfilling check ES compatibality page 
//ES6 has abstractions that hide how javascript really works