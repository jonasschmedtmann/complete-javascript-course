/*function describeCountry(country, population, capitalCity){
return `${country} has ${population} million people and its
capital city is ${capitalCity}.`;
};

const france = describeCountry("France", 60, "Paris");
const espagne = describeCountry("Espagne", 58, "Madrid");
const allemagne = describeCountry("Allemagne", 65, "Berlin");

console.log(france);
console.log(espagne);
console.log(allemagne);*/

// function declaration
function percentageOfWorld1(population){
	return (population/7900)*100;
}

// function expression
const percentageOfWorld2 = function(population){
	return (population/7900)*100;
}

// Arrow function
const percentageOfWorld3 = population => (population/7900)*100;

const chine = percentageOfWorld3(1441);
const france = percentageOfWorld3(68);
const usa = percentageOfWorld3(332);

// console.log('coucou');
// console.log(chine + "%", france + "%", usa + "%");