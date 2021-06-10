let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Samuel";
console.log(firstName);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

// let is used to declar a variable that will change later. Variables that will be mutated are 'let' 
// const is used to declare values that will not change. 

// Eg. 
const birthYear = 1991;
birthYear2 = 1990;

// Taking Decisions: if/else Statements

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving')
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} years`);
}

// Coding Challenge #2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 85;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`"Mark's BMI ${BMIMark}is higher than John's"`)
} else {
    console.log(`John's BMI ${BMIJohn}is higher than Mark's!"`)
}


// *************************** TYPE CONVERSION & TYPE COERCION ***********
// Eg.
// TYPE conversion 
// 1. Converting Strings to Numbers 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// 2. Converting Numbers to Strings
console.log(String(23), 23);


// Type Coercion 
console.log('I am  ' + 23 + 'years old');
console.log('23' - '10' - 3);

// Eg. 2
let n = '1' + 1
n = n - 1;
console.log(n);


//Truthy Values Vrs Falsy Values 
// Falsy values are not necessarily false but will become false after being converted into a boolean
// Ther are only 5 Falsy values 
// 0,
//'',
//undefined, 
//null
//NaN

//Anything else is a truthy value
// Eg.
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Samuel'));
console.log(Boolean({}));
console.log(Boolean(''));


// ********************************** EQUALITY OPERATORS *****************