'use strict';

/*
// //LESSON: FUNCTIONS//

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const usa = describeCountry("USA", 328, "Washington D.C.");
// // console.log(usa);

// const southKorea = describeCountry("South Korea", 51.71, "Seoul");
// // console.log(southKorea);

// const cameroon = describeCountry("Cameroon", 25.88, "Yaoundé");
// // console.log(cameroon);

//LESSON: FUNCTION DECLARATION VS. EXPRESSIONS//

///// FUNCTION DECLARATION/////
// function percentageOfWorld1(country, population) {
//   return `${country} has ${population / 7900 * 100} of the world's population!`;
// }

// const japan = percentageOfWorld1("Japan", 126.3);//declares the paramaters, but saves to a variable//
// const usa = percentageOfWorld1("USA", 328.2);
// const russia = percentageOfWorld1("Russia", 144.4)


// console.log(percentageOfWorld1("China", 1441))//desclares the paramaters to the console
// console.log(usa)
// console.log(japan)
// console.log(russia)

///// FUNCTION EXPRESSIONS/////

// const percentageOfWorld2 = function (country, population) {
//   return `${country} has ${population / 7900 * 100} of the world's population!`;
// }

// const usa = percentageOfWorld2("USA", 328.2);
// const japan = percentageOfWorld2("Japan", 126.3);
// const russia = percentageOfWorld2("Russia", 144.4);
// console.log(usa);
// console.log(japan);
// console.log(russia);

//////////////////////////////////////////////////////////////////////////////////////////////

//LESSON: ARROW FUNCTIONS//

//Great for one lines, but unable to add two or more parameters//
// const percentageOfWorld3 = population => population / 7900 * 100;
// const usa = percentageOfWorld3(328.2);
// const japan = percentageOfWorld3(126.3);
// const russia = percentageOfWorld3(144.4);
// console.log(usa);
// console.log(japan);
// console.log(russia);

// //shorter version but with a calculation inside the function
// const percentageOfWorld3 = (country, population) => {
//   return `${country} has ${population / 7900 * 100} of the world's population!`;
// }

// //saved calculation within a variable;
// // const percentageOfWorld3 = (country, population) => {
// //   const worldPopulation = 7900;
// //   const calcPopulation = population / worldPopulation * 100;
// //   return `${country} has ${calcPopulation} of the world's population!`;
// // }

// const usa = percentageOfWorld3("USA", 328.2);
// const japan = percentageOfWorld3("Japan", 126.3);
// const russia = percentageOfWorld3("Russia", 144.4);
// console.log(usa);
// console.log(japan);
// console.log(russia);

//LESSON: FUNCTIONS CALLING OTHER FUNCTIONS//


//Returns countries population / world population * 100
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

function describePopulation(country, population) {
  const percentage = percentageOfWorld3(population).toFixed(4);
  return `${country} has ${population} million people, which is ${percentage} of the world population.`
}
console.log(describePopulation("Greenland", 0.056)); //0.0007%
console.log(describePopulation("Congo", 86.79)); //1.09865
console.log(describePopulation("Laos", 7.17));//0.0908%



//LESSON: INTRODUCTION TO ARRAYS//

const country = ["USA", "China", "Japan", "South Korea"]
const populations = [328.2, 1441, 126.3, 51.71];
const percentageOfWorld = function (country, population) {
  return `${country} has ${population / 7900 * 100} of the world's population!`;
}
let length = populations.length === 4;

//by adding another array seperated by a comma, I was able to combine the arguments together to pass through percentageOfWorld function
const percentages = [
  percentageOfWorld(country[0], populations[0]),
  percentageOfWorld(country[1], populations[1]),
  percentageOfWorld(country[2], populations[2]),
  percentageOfWorld(country[3], populations[3]),
]

console.log(percentages, length)


//LESSON: Basic Array Operations (Methods)//

//creates an array with neighboring countries tothe USA//
const usaNeighbors = ['Mexico', 'Canada'];
usaNeighbors.push('Utopia');
console.log(usaNeighbors);

usaNeighbors.pop();
console.log(usaNeighbors);

if (!usaNeighbors.includes("Germany")) {
  console.log('Probably not a central European country :D');
};

usaNeighbors[usaNeighbors.indexOf('Mexico')] = 'United Mexican States';
console.log(usaNeighbors);
\

//LESSON: INTRODUCTION TO OBJECTS//

const myCountry = {
  country: "The United States of American",
  capital: "Washington D.C.",
  language: "English",
  population: 328.2,
  neighbors: ['Mexico', 'Canada']
};

console.log(myCountry);
*/


//LESSON: DOT vs. BRACKET NOTATION