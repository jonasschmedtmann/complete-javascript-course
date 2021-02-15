// LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const finland = describeCountry(`Finland`, 6, `Helsinki`);
// const usa = describeCountry(`USA`, 330, `Washington D.C.`);
// const canada = describeCountry(`Canada`, 30, `Ottawa`);
// console.log(finland, usa, canada);

//LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentFinland1 = percentageOfWorld1(6);
const percentUsa1 = percentageOfWorld1(330);
const percentCanada1 = percentageOfWorld1(30);
console.log(percentFinland1, percentUsa1, percentCanada1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentFinland2 = percentageOfWorld2(6);
const percentUsa2 = percentageOfWorld2(330);
const percentCanada2 = percentageOfWorld2(30);
console.log(percentFinland2, percentUsa2, percentCanada2);

const percentageOfWorld3 = population => (population / 7900) * 100;
const percentFinland3 = percentageOfWorld3(6);
const percentUsa3 = percentageOfWorld3(330);
const percentCanada3 = percentageOfWorld3(30);
console.log(percentFinland3, percentUsa3, percentCanada3);

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

console.log(describePopulation(`Finland`, 6));
console.log(describePopulation(`USA`, 330));
console.log(describePopulation(`Canada`, 30));