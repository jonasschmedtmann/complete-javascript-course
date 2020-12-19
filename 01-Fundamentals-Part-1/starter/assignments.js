const country = "France";
const continent = "Europe";
let population = 68_000_000;
/*console.log(country);
console.log(continent);
console.log(population);*/

let isIsland = false;
let language;
/*console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);*/

language = 'French';
// console.log(language);
const halfPop = population / 2;
// console.log(halfPop);
population++;
// console.log(population);
const finland = 6_000_000;
// console.log(population > finland);
const average = 33_000_000;
// console.log(population < average);
// const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
const description = `${country} 🥸 is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);