/*
var firstName = 'John';
console.log(firstName);




console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = false;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


var firstName = 'John';
var age = 28;
console.log(firstName  +  '' +  age);


/****************
 * Basic Operators
 
 var year, yearJohn, yearMark;
 now = 2018; 
 ageJohn = 28;
 ageMark = 33;

 //Math Operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);


 // Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//  type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

/****************************
 * Operator precedence
 

 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge; // true
 console.log(isFullAge);

 // Grouping 
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark ) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x =  y = (3+5) * 4-6; //8 * 4 - 6// 32 -6 // 26
 console.log(x, y);

 //  More operators
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
 x--;
 console.log(x);

 /*********
  * Coding Challenge 1
  * 
  

  var massMark = 78; // kg
  var heightMark = 1.69; // meters

  var massJohn = 92;
  var heightJohn = 1.95;

  var BMIMark = massMark / (heightMark * heightMark);
  var BMIJohn = massJohn / (heightJohn * heightJohn);
  console.log(BMIMark, BMIJohn);

  var markHigherBMI = BMIMark > BMIJohn;
  console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


  /*************
   *  If / else statements
   

   var firstName = 'John';
   var civilStatus = 'single';

   if (civilStatus === 'married') {
       console.log(firstName + ' is married!');
   } else {
       console.log( firstName + ' will hopefully marry soon :)');
   }
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log( firstName + ' will hopefully marry soon :)');
}


var massMark = 78; // kg
  var heightMark = 1.69; // meters

  var massJohn = 92;
  var heightJohn = 1.95;

  var BMIMark = massMark / (heightMark * heightMark);
  var BMIJohn = massJohn / (heightJohn * heightJohn);
  if (BMIMark > BMIJohn) {
    console.log('Mark\'s  BMI is higher than John\'s.');
  } else {
    console.log('John\'s BMI is higher than Mark\'s.');       
} 


  /****
   * Boolean Logic
   

   var firstName = 'John';
   var age = 16;

   if (age < 13) {
       console.log(firstName + 'is a boy.');
   } else if (age >= 13 && age <20) { // Between 13 and 20
      console.log(firstName  +  ' is a teenager.')
   }
   else {
    console.log(firstName + 'is a man.');
   }

   /******
    * The Ternary Operator and Switch Statements
   
     
    // Ternary Operator
    var firstName = 'John'
    var age = 14;

    age>= 18 ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks juice.');

    var drink = age >= 18 ? 'beer' : 'juice';
    console.log(drink);

    // Switch Statement
    var job = 'cop';
    switch (job) {
        case 'teacher':
            console.log(firstName + ' teaches kids how to code.');
        break;
        case 'driver':
            console.log(firstName + ' drives an Uber in Lisbon.');
            break;
        case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
            default:
                console.log(firstName + ' does something else.');
    }

    switch (true) {
        case age <13:
            console.log(firstName + ' is a boy.');
            break;
        case age >13 && age <20:
            console.log(firstName + ' is a teenager.');
            break;
        case age >20 && age <30:
            console.log(firstName + ' is a young man.');
            break;
        default:
            console.log(firstName + ' is a man.');
    }

    /*****
     * Truthy and Falsy values and equality operators
     

// falsy values: undefined, null, o, '', NaN
// truthy values: NOT falsy values
var height; 
height = 0;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

/******
 * Functions
 * 
 */
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge( 1990);
var ageMike = calculateAge( 1948);
var ageJane = calculateAge( 1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
var age = calculateAge(year);
var retirement = 65 - age;

if (retirement > 0) {
    console.log(firstName + ' retires in ' +
    retirement + ' years.');
} else {
    console.log( firstName + ' is already retired.')
}

}


yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');