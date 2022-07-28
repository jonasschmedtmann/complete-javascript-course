/*
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

const c1 = describeCountry("finland", 6, "helsinki");
const c2 = describeCountry("slovakia", 9, "bratislava");
const c3 = describeCountry("germany", 26, "berlin");
*/
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld(
    population
  )}% of the world population`;
}

console.log(describePopulation("Czech republlic", 1441));
