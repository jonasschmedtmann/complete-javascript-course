//console.log("Hello World!!!")
//var firstName = 'John';
//console.log(firstName);

//var year = 2018
//var yearJohn = year - 28;
//console.log(yearJohn);


// var year, yearJohn, yearMark;
// ageJohn = 28;
// ageMark = 33;
// year = 2018; 
// yearJohn = year - 28;
// yearMark = year - 33;

// console.log(yearJohn);

// console.log(year + 2);


// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/2;
console.log(average);


//Multiple assignments
var x, y; 
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);
//assignment operator works from right to left, so assigns 26 to y first and then y to x. That's why it works. 



//x = x * 2; 
x *= 2; 
console.log(x);

/***********
 * Coding Challenge 1 
 */
var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, isHigher;
markMass = 78;
markHeight = 1.69; 
johnMass = 92;
johnHeight = 1.95;
markBMI = markMass/(markHeight * markHeight);
johnBMI = johnMass/(johnHeight * johnHeight);
isHigher = markBMI > johnBMI;
if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.')
} else {
    console.log('Mark\'s BMI is lower than John\'s.')
}
// console.log(markBMI, johnBMI);
// console.log("Is Mark\'s BMI higher than John\'s?" + isHigher);


/**********************
 * Boolean Logic
 */

 var firstName = 'John';
 var age = 16;
 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
     console.log(firstName + ' is a teenager.');
 } else {
     console.log(firstName + ' is a man.');
 }

 /************************
  * The Ternary Operator and Switch Statements
  */

  var firstName = 'John';
  var age = '16';

  age >= 18 ? console.log(firstName + 'drinks beer.') : console.log(firstName + ' drinks juice.'); 
  //first part is the, then the true, then the else.
  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);
  
  //Switch statement 
  var job = 'teacher'; //change this value
  switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + 'drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + 'designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
  }


var firstName = 'John';
var age = 16;
switch (true){
    case age < 13: 
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    default: 
        console.log(firstName + ' is a man.');
        break;
}

/****************************
 * Truthy and Falsy values and equality operators 
 */
//falsy values: undefinited, null, 0, '', NaN
//truthy values: Not falsy values

//== does type coercion. === is exact.



var avgTeamJohn = (110 + 120 + 103)/3;
var avgTeamMike = (116 + 60 + 123)/3;
var avgTeamMary = (40 + 134 + 105)/3;
console.log(avgTeamJohn, avgTeamMike, avgTeamMary);

avgTeamJohn > avgTeamMike ? console.log("John won with " + avgTeamJohn + "points.") : avgTeamMike > avgTeamJohn ? console.log("Mike won with " + avgTeamMike + " points."): console.log("There is a draw.");



avgTeamMary > avgTeamJohn && avgTeamMary > avgTeamMike ? console.log("Mary won.") : avgTeamJohn > avgTeamMary && avgTeamJohn > avgTeamMike ? console.log("John won."): avgTeamMike > avgTeamMary && avgTeamMike > avgTeamJohn ? console.log ("Mike won."): console.log("There\'s a draw.");


/*****************************
 * funtion statements and expressions
 */

//function declaration 
//function whatDoYouDo(job, firstName){}

//function expresion
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.'; //when have the return then don't need to break bc finishes the function. 
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites.'
        default: 
            return firstName + ' does something else';
    
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('driver', 'Jane'));


//Expression vs Statement
//if expects a calculation then it's an expression. Expression is a piece of code that always produce a value.
//statements don't produce any immediate value/result.


/*********
 * Arrays
 */

//initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names);
console.log(names[0]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
console.log(names);
names[5] = 'Mary';
console.log(names);
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false]
john.push('blue');//adds elements at end of array
console.log(john);
john.unshift('Mr.');//adds to beginning
console.log(john);
john.pop(); //removes element from the end
console.log(john); 
john.shift();//removes first element
console.log(john);
console.log(john.indexOf(1990));//tests if element is in your array. If it is then it returns the index number. If not then it returns "-1".
var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John IS a designer';
console.log(isDesigner);

/**********************
 * Coding Challenge 2 
 *  */

function fairTip(bill) {
    var percentage; 
    if (bill < 50) {
        percentage = .20;
     } else if (bill >= 50 && bill < 200) {
        percentage = .15;
     } else {
        percentage = .10;
     }
     return percentage * bill;
}
//console.log(fairTip(700));

var bill = [124, 48, 268]
var tips = [fairTip(bill[0]),  
    fairTip(bill[1]), 
    fairTip(bill[2])];
var finalValues = [bill[0] + tips[0],
    bill[1] + tips[1],
    bill[2] + tips[2]]
console.log(tips, finalValues);


//Objects
//key is name of key value pairs. Order doesn't matter in objects 

//object literal
var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);


//new object syntax 
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/***********
 * objects and methods
 */

 //functions with objects are called methods

var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

//var age = console.log(john.calcAge());
john.calcAge();
console.log(john);


/************
 * Coding Challenge 4 
 */
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Chang',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}


if (john.calcBMI > mark.calcBMI) {
    console.log('Mark\'s BMI ' + mark.bmi + ' is higher than John\'s at ' + john.bmi + '.')
} else if (mark.bmi > john.bmi) {
    console.log('Mark\'s BMI ' + mark.bmi + ' is lower than John\'s at ' + john.bmi + '.')
} else {
    console.log('They have the same BMI.')
}


/******************
 * Loops and iteration 
 */

 for (var i = 0; i < 10; i++) {
     console.log(i);
 };

 // i = 0, 0 less than 10 so true, it iterates each time (i++), and then it logs i to console.


 var john = ['John', 'Smith', 1990, 'designer', false];
 for (var i = 0; i < john.length; i++ ) {
    console.log(john[i]);
 }

//while loop only needs the condition (the middle part)
/**
 * below is the same as the for loop above
 * var i =0;
 * while (i < john.length){
 *      console.log(john[i]);
 *      i++;
 * }
 */


/***
* Continue and Break
*/

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] !== 'string') continue; //bc just one if then can stay on one line.
    console.log(john[i]);
    //!== is the different opperator 
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] !== 'string') break; 
    console.log(john[i]);
}


//Looping backwards 
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
};

/*****************
 * Coding Challenge 5
 */

function fairTip(bill) {
    var percentage; 
    if (bill < 50) {
        percentage = .20;
     } else if (bill >= 50 && bill < 200) {
        percentage = .15;
     } else {
        percentage = .10;
     }
     return percentage * bill;
}
//console.log(fairTip(700));

var john = { 
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            //Determin percentage based on tipping
            var percentage; 
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            //Add result to corresponding arrays
            this.tips[i] = percentage * bill;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

john.calcTips();
console.log(john);


//***Coding challenge 5 par 2  */

var mark = { 
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            //Determin percentage based on tipping
            var percentage; 
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }
            //Add result to corresponding arrays
            this.tips[i] = percentage * bill;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum/tips.length;
}

john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}