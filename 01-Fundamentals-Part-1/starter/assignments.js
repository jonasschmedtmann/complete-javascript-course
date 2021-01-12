// LECTURE: VALUES AND VARIABLES//
let greeting = "Hello, welcome to a new tommorrow ";
let firstNameUser = "James "
// alert(greeting + firstName + ".");

//LECTURE: DATA TYPES//
const country = "United States of America";
const continent = "North America";
let population = 328000000;


// LECTURE: LET, CONST, AND VAR//
const isIsland = true;
// isIsland = false;
// console.log(typeof isIsland);
language = "English";
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof language);
// console.log(typeof isIsland);

//LECTURE: BASIC OPERATORS//

let usaHalfPopulation = population / 2; //outputs 164000000
let finlandTotalPopulation = 6000000;
let averageCountryPopulation = 33000000;
// const description = "Portugal is in Europe, and its 11 million people speak portuguese";
let description = `Portugal is in Europe, and its 11 million people speak portuguese`

usaHalfPopulation++; //increases val by 1; 164000001
// console.log(usaHalfPopulation);
// console.log(usaHalfPopulation > finlandTotalPopulation); //outputs true
// console.log(usaHalfPopulation < averageCountryPopulation); //outputs false
// console.log(description); //outputs "Portugal is in Europe, and its 11 million people speak portuguese"//

//LESSON: STRINGS AND TEMPLATE LITERALS//
description = `Portugal is in Europe, 
and its 11 million people speak portuguese.`
// console.log(description);


//LECTURE: Taking Decisions: if / else Statements//

let census = population - averageCountryPopulation;

if (population >= averageCountryPopulation) {

  census = `USA's population is above average.🙀`;
} else {
  census = `USA'S population is ${averageCountryPopulation - population} below average`;
}

// console.log(census);
