/*
let JavaScript = 'fun';

console.log(2+3+4-5);

let firstName = "Hamdi";

console.log(firstName);

console.log(firstName);


// Math Operators //

const now = 2037;

const ageMaryam = now - 2014;
const ageMahir = now - 2018;

console.log(ageMaryam , ageMahir);

console.log(ageMaryam * 2, ageMaryam / 10, 2 ** 3);

// Assignment Operators //

let x = 10 + 5;

x += 10;

x*=4;

x++;

x--;

x--;
console.log(x);

// Comparison Operators //

console.log(ageMaryam > ageMahir);
console.log(ageMahir >= 18);

console.log(now - 1991 > now - 2018);



const now = 2037;

const ageMaryam = now - 2014;
const ageMahir = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 -10 -5;

const averageAge = (ageMaryam + ageMahir) / 2;

console.log(x, y, averageAge);

// Coding Challenge #1 //

// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall. 

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;



const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;



let MarkBMI = weightMark / ( heightMark ** 2);

let JohnBMI = weightJohn / (heightJohn * heightJohn);

console.log(MarkBMI, JohnBMI);

const markHigherBMI = MarkBMI > JohnBMI;

console.log(markHigherBMI);


// Strigns and template literal //

const firstName = 'Hamdi';
const job = 'Software Engineer';
const birthYear = 2000;
const year = 2027;

const Hamdi = "I'm "  + firstName + ', a ' +  (year - birthYear) + 
' years old ' + job + '!';

const newHamdi =  ` I am ${firstName} a ${year - birthYear} years old ${job} !`

console.log(Hamdi, newHamdi);



// If and Else statement //

const age = 16;
const yearsLeft = 18 - age;

if(age >= 18){
    console.log('Sarah can start driving license');
} else {
    console.log(`Sarah is too young and should wait ${yearsLeft} more years`);
}

const birthYear = 2014;
let censury;

if(birthYear <= 2000){
    censury = 20;
} else{
    censury = 21;
} console.log(censury);

// Chanllenge 2 //


// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;


const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;




let MarkBMI = weightMark / ( heightMark ** 2);

let JohnBMI = weightJohn / (heightJohn * heightJohn);


if(MarkBMI > JohnBMI){
    console.log(` Mark's BMI (${MarkBMI}) is higher than John's ${JohnBMI}`);
} else {
    console.log(`John's BMI (${JohnBMI}) is higher than Mark's BMI ${MarkBMI}`);
}


// Type conversion //

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Hamdi'));

console.log(String(23), 23);


// Type coercion //
console.log('I am ' + 23 + ' years old')
console.log('I am ' + '23' + ' years old')
console.log('23' + '15' + 3);
console.log('23' - '10' -3);
console.log('23' / '2');

let n = '1' + 1;
n = n -1;
console.log(n);


const money = 10;
if(money){
    console.log("Don't spend it all");
} else{
    console.log('You should get a job!');
}

let height = 0;
if(height){
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}
  

// Equality Operator //

const age = '18';

if (age === 18) console.log('You just became an adult (strict)');

if (age == 18 ) console.log('You just became an adul (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if(favourite === 23){
    console.log('Cool! 23 is an amazing number!')

} else if(favourite === 7){
    console.log('7 is also a cool number')
}else if (favourite === 9){
    console.log('9 is also a cool number')
} else{
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('why is not 23')
  

//  logic operator //

const hasDriversLicense = true; // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// }else{
//     console.log('Someone else should drive');
// }

const isTired = true;
console.log(isTired && hasDriversLicense && hasGoodVision);


if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
}else{
    console.log('Someone else should drive');
} 

    // Challenge 3 //
    
// Date 1

// const averageScoreDolphines = (96 + 108 + 89) / 3;
// console.log(averageScoreDolphines);
// const averageScoreKoalas = (88 + 91 + 110)/3;
// console.log(averageScoreKoalas);

// if(averageScoreDolphines > averageScoreKoalas){
//     console.log('Team Dolphines win the game');
// } else if(averageScoreKoalas > averageScoreDolphines){
//     console.log('Team Koals win the game');
// } else if (averageScoreDolphines = averageScoreKoalas){
//     console.log('The Game is draw');
// }

//Data 1//


// const averageScoreDolphines = (96 + 108 + 89) / 3;
// console.log(averageScoreDolphines);
// const averageScoreKoalas = (88 + 91 + 110)/3;
// console.log(averageScoreKoalas);

// const averageScoreDolphines = (97 + 112 + 101) / 3;
// console.log(averageScoreDolphines);
// const averageScoreKoalas = (109 + 95 + 123)/3;
// console.log(averageScoreKoalas);


const averageScoreDolphines = (97 + 112 + 101) / 3;
console.log(averageScoreDolphines);
const averageScoreKoalas = (109 + 95 + 106)/3;
console.log(averageScoreKoalas);


if(averageScoreDolphines > averageScoreKoalas && averageScoreDolphines >= 100){
    console.log('Team Dolphines win the trophy🏆');
} else if(averageScoreKoalas > averageScoreDolphines && averageScoreDolphines >= 100){
    console.log('Team Koals win trophy🏆');
} else if (averageScoreDolphines === averageScoreKoalas &&averageScoreDolphines >= 100 && averageScoreKoalas === averageScoreDolphines && averageScoreKoalas !=100){
  console.log('The Game is draw');
}


// Switch statement //

const day = 'Thrusday';

switch (day) {
    case 'Monday':
        console.log('Study plan');
break
  case 'Tuesday':
       console.log('Study plan');
break
   case 'wednesday':
     console.log('Going to the hopital');
break
   case'Thrusday':
console.log('Solving challenges');
case 'Friday':
    console.log('Solving challenges');
break
  default:
    console.log('undefined');
}
 

if(day === "Monday"){
    console.log('Study plan');
} else if(day === 'Tuesday'){
    console.log('Study plan');
   
} else if(day === 'Wednesday'){
    console.log('Going to the hopital');
} else if (day === 'Thrusday' || day === 'friday'){
    console.log('Solving challenges');

} else{
    console.log('undefined');
}


// Condiatonal(Ternary) Operator //

const age = 15;

// age >= 18 ? console.log('I like to drink Coffee ☕') : console.log('I like to drink water 💧');


const drink = age >= 18 ? 'Drink Coffee ☕' : 'Drink water 💧';
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'Coffee ☕';
} else {
    drink2 = 'water 💧';
} console.log(drink2);

console.log(`I like to drink ${age>=18 ? 'Coffee ☕' : 'water 💧'}`);

// Coding Challenge #4 //

const bill = 430;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/





