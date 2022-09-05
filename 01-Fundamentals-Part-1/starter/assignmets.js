//LECTURE: Values and Variables
/*
let country = 'Russia';
let continent = 'Eurasia';
let population = 144;

console.log('My country is ' + country + ', which placed on ' + continent + ' continent. And we have ' + population + ' million of people living in ' + country + '.')


//LECTURE: Data Types
let isIsland, language;
isIsland = false;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



// LECTURE: let, const and var
const isIsland = false, country = 'Russia';
let language = 'Russian', population = 70000000;
console.log(isIsland);
console.log(country);
console.log(language);
console.log(population);
*/

// LECTURE: Basic Operators
// const country = 'Russia';
// let countryPopulation = 144000000,
//     language = 'russian',
//     halfCountryPopulation = countryPopulation / 2,
//     finlandoPopulation = 6000000,
//     averagePopulation = 33000000,
//     description = "Portugal is in Europe, and its 11 million     people speak portuguese";

// // LECTURE: Strings and Template Literals
// description = `${country} is between Europe and Asia, and it's ${countryPopulation} speak ${language}.
// Does ${country} have more people than Finland?
// ${countryPopulation > finlandoPopulation}!
// Does ${country} have less people than the average country?
// ${countryPopulation < averagePopulation}!`;

// //LECTURE: Taking Decisions: if / else Statements
// if (countryPopulation > averagePopulation) {
//     description += `

// ${country}'s population is above average.'`
// } else {
//     description += `

// ${country}'s population is ${averagePopulation - countryPopulation} below average.'`
// }


// console.log(`${description}`)


// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; // 4
// '19' - '13' + '17'; // '617'
// '19' - '13' + 17; // 23
// '123' < 57; // false
// 5 + 6 + '4' + 9 - 4 - 2; // 1143
// 2. Execute the operations to check if you were right

//LECTURE: Equality Operators: == vs. ===
// // const numNeighbours = prompt(`How many neighbour countries does your country have?`);

// // if (numNeighbours == 1) {
// //     console.log(`Only ${numNeighbours} border`)
// // } else if (numNeighbours == 0) {
// //     console.log(`No borders`)
// // } else {
// //     console.log(`More than 1 border. It has ${numNeighbours} borders.`)
// // }

// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

// if (numNeighbours === 1) {
//     console.log(`Only ${numNeighbours} border`)
// } else if (numNeighbours === 0) {
//     console.log(`No borders`)
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border. It has ${numNeighbours} borders.`)
// } else {
//     console.log(`error!`)
// }


// LECTURE: Logical Operators
// const country = `Russia`;
// let countryPopulation = 144000000,
//     language = `russian`,
//     isIsland = false;

// const isMoreThanFiftyMillion = countryPopulation > 50000000;
// const isSpeaksEanglish = language === `eanglish`;

// if (isMoreThanFiftyMillion && isSpeaksEanglish && !isIsland) {
//     console.log(`You should live in ${country}.`);
// } else {
//     console.log(`${country} does not meet your criteria.`);
// }


// LECTURE: The switch Statement
// const lang = `mandarine`;

// switch (lang) {
//     case `chinese`:
//     case `mandarine`:
//         console.log(`MOST number of native speakers!`);
//         break;
//     case `spanish`:
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case `eanglish`:
//         console.log(`3rd place`);
//         break;
//     case `hindi`:
//         console.log(`Number 4`);
//         break;
//     case `arabic`:
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log(`Not in top 5!`);
// }


// LECTURE: The Conditional (Ternary) Operator
// const country = `Russia`;
// // let countryPopulation = 144000000,
// let countryPopulation = 14000000,
//     language = `russian`,
//     isIsland = false;

// console.log(`${country}'s population is ${countryPopulation > 33000000 ? `above` : `below`} average!`);

