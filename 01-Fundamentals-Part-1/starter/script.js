
/*
    10: Values and Variables
*/

// const country = 'India';
// const continent = 'Asia';
// let countryPopulation = 1574113252608;
// 6000000

// console.log(country);
// console.log(continent);
// console.log(countryPopulation);

/*
    12: Data Types
*/

// const isIsland = false;
// let language;

// console.log(typeof country);
// console.log(typeof countryPopulation);
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof null);


/*
    13: let, const, var
*/
// language = 'Kannada';
// // isIland = false;

// console.log(language);

/*
    14: Basic Operators
*/

// console.log(countryPopulation / 2);
// console.log(countryPopulation++);

// const finlandPopulation = 6000000;
// console.log(countryPopulation > finlandPopulation);

// const avgPopulation = 33000000;
// console.log(countryPopulation < avgPopulation);

// const description = country + ' is in ' + continent + ', and its ' + Math.floor(countryPopulation / 100000) + ' million people speak ' + language;
// console.log(description);

/* 
    Coding challenge -- calculate BMI
*/

const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const BMIMark1 = massMark1 / (heightMark1 ** 2);
const BMIJohn1 = massJohn1 / (heightJohn1 ** 2);

console.log(BMIMark1);
console.log(BMIJohn1);

const markHigherBMI1 = BMIMark1 > BMIJohn1;

console.log(markHigherBMI1);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / (heightMark2 ** 2);
const BMIJohn2 = massJohn2 / (heightJohn2 ** 2);

console.log(BMIMark2);
console.log(BMIJohn2);

const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(markHigherBMI2);
