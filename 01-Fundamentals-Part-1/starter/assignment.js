//Assignment 1: Values and Variables //

// Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)

/*
let country = "Somalia";
let continent = "Africa";
let population = "18 million People";

console.log(country);
console.log(continent);
console.log(population);


// Declare a variable called 'isIsland' and set its value according to your 
// country. The variable should hold a Boolean value. Also declare a variable 
// 'language', but don't assign it any value yet 

let isIsland = true;

let language;

console.log(isIsland);
console.log(language);

// let, const and var //

var language = 'Somali';
console.log(language);
// language = 'Arabic';
console.log(language);

//  Basic Operators //

const country = "Somalia";
const continent = "Africa";
let population = 18;
// population++;
// console.log(population / 2);

// population > findlandPop ? console.log('Somalia has more population than Findland') : console.log('Findland has more population than Somalia');

console.log(population > 6);
console.log(population > 33);

const description =  'Somalia' + ' is' + ' in' + ' ' +  continent + ' and' + ' its' + ' ' + population + ' Million' + ' People' + ' speak' + ' ' + language;

console.log(description);

// Strings and Template Literals //

const description1 = `Somalia is in ${continent} , and its ${population} Million people speak ${language}`
console.log(description1);

// Taking Decisions: if / else Statements //

if(population > 33){
    console.log(`${country}'s population is above average`)
} else{
    console.log(`Somali's population is ${33 - population} million below average`)
} console.log(population);


// Type Conversion and Coercion //

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 167
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // False
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Equality Operators: == vs. === //


// const numNeighbours =  Number (prompt('How many neighbour countries does your country have?')); 

if (numNeighbours === 1){
    console.log('Only 1 border');
} else if (numNeighbours > 1){
    console.log('More than 1 border');
} else {
    console.log('No borders');
}



// Logical Operators //

const country = "Somalia";
const continent = "Africa";
let language = 'English'
let population = 18;
const isIsland = true;

// if(language === 'English' && population < 50 && !isIsland){
//     console.log(`You should live in ${country} `)
// } else{
//     console.log(`${country} does not meet your criteria `);
// }
    

// The switch Statement //
// Use a switch statement to log the following string for the given 'language': 
// chinese or mandarin: 'MOST number of native speakers!' 
// spanish: '2nd place in number of native speakers' 
// english: '3rd place' 
// hindi: 'Number 4' 
// arabic: '5th most spoken language' 
// for all other simply log 'Great language too :D' 

language = 'chinese';

switch (language){
    case 'chinese':
    case 'mandarin':
      console.log('MOST number of native speakers!');
break;

case 'spanish':
    console.log('2nd place in number of native speakers');
      break;

case 'english':
     console.log('3rd place');
 break;

 case 'hindi':
       console.log('Number 4');
 break;

case 'arabic':
   console.log('5th most spoken language');
   break

default:
    console.log('Great language too :D');
}

//  The Conditional (Ternary) Operator //

const countryPop = population > 33 ? `${country} population is above average` : `${country} population is below average `;
console.log(countryPop);

population > 33 ? console.log(`${country} population is above average`) : console.log(`${country} population is below average `);

console.log(`${country}'s Population ${population > 33 ? 'above' : 'is below'} average`)
*/

// Write a program to calculate the area of a rectangle //
