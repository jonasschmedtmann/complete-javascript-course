// Values and Variables

const country = "America";
const continent = "North America";
let population = 300;
console.log(country, continent, population);

// Data Types

const isIsland = false;
let language;
console.log(isIsland, population, country, language)

// let, const, var

language = "English";

// basic operators

let populationHalf = population / 2;
population = population + 1;

let populationFinland = 6;
const isPopulationGreaterThanFinland = population > populationFinland;
console.log(isPopulationGreaterThanFinland);

let populationAverage = 33;
const isPopulationLessThanAverage = population < populationAverage;
console.log(isPopulationLessThanAverage);

let description = country + " is in " + continent + " , and its " + population + " million people speak " + language

// String and Template literals

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

// if else 

if (population > populationAverage) {
    console.log(`${country}'s population is above average 👀`);
} else {
    console.log(`${country}'s population is ${populationAverage - population} million below average`);
}

//type conversion and coercion

const inputYear = '1991';

console.log(Number(inputYear));

console.log(inputYear * 18);

//truthy and falsy
const aNumber = Number(window.prompt("Type a number", ""));
