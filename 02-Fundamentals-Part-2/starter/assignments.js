'use strict';
/*
function describeCountry(country, population, capitalCity) {
    let string = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
    return string;
}

const portugal = describeCountry("Portugal", 11, "Lisboa");
const spain = describeCountry("Spain", 33, "Madrid");
const finland = describeCountry("Finland", 6, "Helsinki");

console.log(portugal, spain, finland);

function percentageOfWorld1(population) {
    let percentage = (population / 7900) * 100;
    return percentage;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1(1441), percentageOfWorld2(1441));

const percentagePortugal1 = percentageOfWorld1(11);
const percentagePortugal2 = percentageOfWorld2(11);

console.log(percentagePortugal1, percentagePortugal2);

const percentageFinland1 = percentageOfWorld1(6);
const percentageFinland2 = percentageOfWorld2(6);

console.log(percentageFinland1, percentageFinland2);

const percentageSpain1 = percentageOfWorld1(33);
const percentageSpain2 = percentageOfWorld2(33);

console.log(percentageSpain1, percentageSpain2);

//Arrow Function
const percentageOfWorld3 = population => (population / 7900) * 100;


//Functions calling other Functions

const percentageOfWorld3 = population => (population / 7900) * 100;

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} million people, wich is about ${percentage}% of the world`
}

console.log(describePopulation("China", 1441))
*/

//Introduction to arrays

const percentageOfWorld = population => (population / 7900) * 100;
const populations = [10, 330, 1100, 50];

console.log(populations.length === 4);

const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(percentages);

//Basic Array Operations
const spainNeighbours = ['Portugal', 'France', 'Andorra'];
spainNeighbours.push('Utopia');
spainNeighbours.pop();

if (!spainNeighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}


console.log(spainNeighbours);