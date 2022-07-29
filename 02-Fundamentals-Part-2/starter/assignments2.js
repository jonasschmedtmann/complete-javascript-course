/*
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

const c1 = describeCountry("finland", 6, "helsinki");
const c2 = describeCountry("slovakia", 9, "bratislava");
const c3 = describeCountry("germany", 26, "berlin");

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld(
    population
  )}% of the world population`;
}

console.log(describePopulation("Czech republlic", 1441));

const populations = new Array(11, 69, 420, 32);

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

if (populations.length === 4) {
  console.log(true);
} else console.log(false);

const percentages = new Array(
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3])
);
console.log(percentages);

const neighbours = new Array("Germany", "Slovakia", "Poland", "Austria");
neighbours.push("Utopia");
neighbours.pop();
if (neighbours.indexOf("Germany")) {
  console.log("Probably not a central European country");
}
neighbours[2] = "Sweden";
console.log(neighbours);


const myCountry = {
  country: "Czech republic",
  capital: "Prague",
  language: "Czech",
  population: 10,
  neighbours: ["Germany", "Austria", "Poland", "Slovakia"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsIsland: function () {
    return this.neighbours.length === 0
      ? (this.isIsland = true)
      : (this.isIsland = false);
  },
};

myCountry.population += 2;
myCountry["population"] -= 2;

// console.log(
// `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting...`);
}
*/

const populations = new Array(11, 69, 420, 32);

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

if (populations.length === 4) {
  console.log(true);
} else console.log(false);

const percentages = new Array(
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3])
);
console.log(percentages);

let percentages2 = [];
for (let i = 0; i < 4; i++) {
  percentages2.push(populations[i]);
  console.log(percentageOfWorld(percentages2[i]));
}

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
