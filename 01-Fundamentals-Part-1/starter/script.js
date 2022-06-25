/*let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI); 

 const firstName = 'Vali';
const job = 'coach';
const birthYear = 1988;
const year = 2022;

const vali = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job;
console.log(vali);

const valiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(valiNew); 

const age = 15;

if (age >= 18) {
    console.log(`You can apply for a driving  license 👍`);
} else {
    console.log(`You cannot apply for a driving license 👎, wait another ${18 - age} years`);
}

const birthYear = 1988;
let century;
if (birthYear <= 2000) {
    century = 20;
    console.log(`Person is born in the ${century}th century`);
} else {
    century = 21;
    console.log(`Person is born in the ${century}st century`);
}


let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI})is higher than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}



// there are 5 flasy values in JS: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean('Vali'));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

let height;

if (height) {
    console.log(`Height is defined`);
} else {
    console.log(`Height is not defined`);
}



const favourite = String(prompt("Guess my number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 13) {
    console.log(`Are you a mind reader?`);
} else {
    console.log(`This is a ${typeof (favourite)}`)
}

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive`);
} 



var firstMatchDolphins = 100;
var secondMatchDolphins = 100;
var thirdMatchDolphins = 100;

var firstMatchKoalas = 100;
var secondMatchKoalas = 100;
var thirdMatchKoalas = 100;

var avgDolphins = (firstMatchDolphins + secondMatchDolphins + thirdMatchDolphins) / 3;
var avgKoalas = (firstMatchKoalas + secondMatchKoalas + thirdMatchDolphins) / 3;

console.log(`Average score for Dolphins is ${avgDolphins}`);
console.log(`Average score for Koalas is ${avgKoalas}`);
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(`Dolphins win with an average score of ${avgDolphins}`);
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log(`Koalas win with an average score of ${avgKoalas}`);
} else if (avgDolphins === avgKoalas && (avgDolphins || avgKoalas >= 100)) {
    console.log(`Koalas and Dolphins tied with a score of ${avgDolphins}`);
} else if (avgDolphins || avgKoalas < 100) {
    console.log(`Neither team has scored more than 100 points`);
}

const day = 'friday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare thoery videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record video');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend 😎');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare thoery videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record video');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend 😎');
} else {
    console.log('Not a valid day!');
}
const age = 24;
age >= 18 ? console.log(`I can drink wine 🍷`) : console.log(`I can't drink alchool`);
const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

*/
var bill = 40;
var tip;

console.log(`The bill is ${bill}, the tip is ${bill >= 50 && bill <= 300 ? tip = bill * 15 / 100 : tip = bill * 20 / 100}, so the total amount you need to tip ${bill >= 50 && bill <= 300 ? tip = bill + (bill * 15 / 100) : tip = bill + (bill * 20 / 100)}`);

//TEMA - verifica daca un string este palindrom

//var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;