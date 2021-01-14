/*
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


// let census = population - averageCountryPopulation;

// if (population >= averageCountryPopulation) {

//   census = `USA's population is above average.🙀`;
// } else {
//   census = `USA'S population is ${averageCountryPopulation - population} below average`;
// }

//ANSWER//

// if (population > 33000000) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33000000 - population} million below average`,
//   );
// }


// console.log(census);

//LESSON: TYPE CONVERSION AND COERCION//

// console.log('9' - '5'); // prediction: 4
// console.log('19' - '13' + '17'); //prediction '617'
// console.log('19' - '13' + 17); //prediction 23
// console.log('123' < 57); //prediction false
// console.log(5 + 6 + '4' + 9 - 4 - 2) //prediction 117
//     //5 + 6 = 11 + '4' => "114" + 9 => "1149" - 4 => 1145 -2 => 1143//

//LESSON: EQUALITY OPERATORS: == VS. ===

// const numNeighbors = Number(prompt("How many neighbor countries does your country have? "));

// if (numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border")
// } else {
//   console.log("No borders")
// }
// //Note: without the Number(promp) and === strict equality the 1 would log "No borders"

//LESSON: LOGICAL OPERATORS//
const country = "USA";
const language = 'english';
const population = 328000000;
const idealPopulation = 50000000;
const isIsland = false;


if (population < idealPopulation && language === 'english' && !isIsland) {
  console.log(`You should live in ${country}`)
} else {
  console.log(`${country} does not meet your criteria 😢`)
}
*/

//LECTURE: THE SWITCH STATEMENT//

let census = population - averageCountryPopulation;

if (population >= averageCountryPopulation) {

  census = `USA's population is above average.🙀`;
} else {
  census = `USA'S population is ${averageCountryPopulation - population} below average`;
}

console.log(census)

