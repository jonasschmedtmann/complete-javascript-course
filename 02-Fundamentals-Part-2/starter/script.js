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

const populations = [1441, 1373, 332, 68];
console.log(populations.length);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations.length -1)];
console.log(percentages);
const friends = ["Thierry", "Lionel", "Jonathan", "Loïc"];
friends.push("Alta");
console.log(friends);
friends.unshift("Ori");
friends.pop();
console.log(friends);