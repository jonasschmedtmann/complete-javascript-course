//lecture 1
let country = "Czechia";
let continent = "Europe";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);
//lecture 1

//lecture 2
const isIsland = false;
const language = "English";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
//lecture 2

//lecture 3
//language = "Czech";
//letcure 3

//lecture 4
population /= 2;
console.log(population);
population++;
console.log(population);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(population < averagePopulation);
console.log(
  country +
    " is in " +
    continent +
    ", and it's " +
    population +
    " million people speak czech."
);
//lecture 4

//lecture 5
console.log(
  `${country} is in ${continent}, and it's ${population} million people speak czech.`
);
//lecture 5

//lecture 6
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}
//lecture 6

//lecture 7
/*
const numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);
if (Number(numNeighbours) === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border.");
} else {
  console.log("No borders.");
}
*/
//lecture 7

//lecture 8
if (language === "English" && population < 50 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
//lecture 8

//lecture 9

//lecture 9
