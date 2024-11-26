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
// == VS ===
//EG.
// === is the strict equality opeartor. It does not do any type coersion 
const aged = 18;
if (aged === 18) console.log('You just became an adult');


// == [The Double Equal] is the loose equal. It performs type coersion. 
//EG. 
const ageInput = 18;
if (ageInput == '18') console.log('You just became an adult');




// CODEING CHALLENGE #3 
// Caclculate the average score for each team, using the test data below.
//Compare the team's average scores to deterine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// TEST DATA: 
//Dolphins score 96, 118 and 80. 
//Koalas score 88, 91 and 110.

let dolpScore = 96 + 118 + 80;
let KoaScore = 88 + 91 + 110;

const dolpAvg = dolpScore / 3;
const KoaAvg = KoaScore / 3;

if (dolpAvg > KoaAvg) {
    console.log(`Dophins are the winners with an avg score of ${dolpAvg} 💎`)
} else if (KoaAvg > dolpAvg) {
    console.log(`Koalas are the winners with an avg score of ${KoaAvg}`)
} else console.log("It was a tie :😊  ");



// ************** 💎💎 SWITCH STATEMENTS 💎💎 *******************
// Switch staements use Strict comparisions === 
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory vidoes');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    case 'friday':
        console.log('Record vides ');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}



// ************** 💎💎 STATEMENTS AND EXPRESSIONS 💎💎 ******************
// An expression is a piece of code that produces a value
// Eg. 3+4, true && true

// A statement is a bigger piece of code that does not neccearily produce a value
// Eg. if (23 > 10) { const str = '23 is bigger';




// ********** 💎💎 THE CONDITIONAL (TERNARY) OPERATOR  💎💎 *************
//It allows us to write a conditional statement in one line
// It is known as the ternary operator because it has 3 parts

const age = 23;
age >= 18 //Part 1. THe condition 
    ?
    console.log('I like to drink wine 🍷') : //the If part 
    console.log('I like to drink juice!') // Else part


const drink = age >= 18 ? 'wine🍷' : 'water🧂';
console.log(drink);

// Coding Challenge
// TEST DATA: Test for bill values: 275, 40 and 430
// Tips are calculated if the bill is between 50 and 300 = 15%. If it is more than that, tip is calculated at 20%

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? `The bill was ${bill} and the tip was ${bill * 0.15}, total value ${bill +(bill * 0.15)}` : `The bill was ${bill} and the tip was ${bill * 0.25}, total value ${bill +(bill * 0.15)}`;