
/*
    10: Values and Variables
*/

const country = 'India';
const continent = 'Asia';
let countryPopulation = 1574113252608;
6000000

console.log(country);
console.log(continent);
console.log(countryPopulation);

/* 
    12: Data Types
*/

const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof countryPopulation);
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof null);


/* 
    13: let, const, var
*/
language = 'Kannada';
// isIland = false;

console.log(language);

/* 
    14: Basic Operators
*/

console.log(countryPopulation / 2);
console.log(countryPopulation++);

const finlandPopulation = 6000000;
console.log(countryPopulation > finlandPopulation);

const avgPopulation = 33000000;
console.log(countryPopulation < avgPopulation);

const description = country + ' is in ' + continent + ', and its ' + Math.floor(countryPopulation / 100000) + ' million people speak ' + language;
console.log(description);
