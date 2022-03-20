///////////////

let js = 'amazing';
if (js === 'amazing') alert('JavaScript is fun!');

///////////////

const heightMark = { testData1: 1.69, testData2: 1.88 };
const heightJohn = { testData1: 1.95, testData2: 1.76 };
const massMark = { testData1: 78, testData2: 95 };
const massJohn = { testData1: 92, testData2: 85 };

function calulateBMI(height, mass) {
    let bmi = mass / height ** 2;
    return bmi;
}

const bmiMark = calulateBMI(heightMark.testData1, massMark.testData1);
const bmiJohn = calulateBMI(heightJohn.testData1, massJohn.testData1);

let markHigherBMI = (bmiMark > bmiJohn);

///////////////

if (bmiJohn > bmiMark) {
    console.log(`Mark's BMI (${bmiMark}) is lower than John's BMI (${bmiJohn}).`);
} else {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn}).`);
}

/////////////// type conversion and coercion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);

//////////////

function average(numA1, numA2, numA3) {
    const avg = (numA1 + numA2 + numA3) / 3;
    return avg;
}

const testDataDolphins = average(97, 112, 101);
const testDataKoalas = average(109, 95, 106);

if (testDataDolphins === testDataKoalas && testDataDolphins >= 100 && testDataKoalas >= 100) {
    console.log("Draw");
} else if(testDataDolphins >= 100 && testDataDolphins > testDataKoalas) {
    console.log("Dolphins win!");
} else if(testDataKoalas >= 100 && testDataDolphins < testDataKoalas) {
    console.log("Koalas win!")
} else {
    console.log("No one wins")
}

//////////////

const day = 'friday';

switch(day) {
    case 'monday' : // strict comparison : '==='
        console.log('Sport');
        console.log('Code');
        console.log('Live your life');
        break; // needed otherwise "work" would be printed as well
    case 'tuesday' :
        console.log('Work');
        break;
    case 'wednesday' :
        console.log('Work as well');
        break;
    case 'thursday':
    case 'friday':
        console.log('You guessed it: Work')
        break;
    case 'saturday':
    case 'sunday' :
        console.log('Weekend!');
        break;
    default :
        console.log('Not a valid day')
}

////////////////

if(day === 'monday'){
    console.log('.Sport');
    console.log('.Code');
    console.log('.Live your life');
} else if (day === 'tuesday') {
    console.log('.Work');
} else if (day === 'wednesday') {
    console.log('.Work as well');
} else if (day === 'thursday' || day === "friday") {
    console.log('.You guessed it: Work')
} else if (day === 'saturday' || day === 'sunday') {
    console.lof('.Weekend!')
} else {
    console.log('.Not a valid day')
}

////////////////

// Expression = produces a value
// Statement = declarations, formulas

////////////////

const age = 33;

age >= 18 ? console.log("I want to drink wine 🍇") :  console.log("Sorry no wine for you 🙅🏻‍♂️");
const drink = age >= 18 ? 'wine 🍇' : 'sorry 🙅🏻‍♂️'; // produces an output and hence is 

console.log(`I like to drink ${age >= 18 ? 'wine 🍇' : 'sorry 🙅🏻‍♂️'}`)

///////////////

let bill = 430;
const tip = 50 <= bill <= 300 ? 15 : 20;

console.log(`The bill was ${bill}, the tip was ${tip/100*bill}, and the total value is  ${bill + (tip/100*bill)}`);

//////////////


