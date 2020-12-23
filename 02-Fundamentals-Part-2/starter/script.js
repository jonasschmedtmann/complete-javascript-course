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
// console.log(populations.length);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations.length -1)];
// console.log(percentages);
const friends = ["Thierry", "Lionel", "Jonathan", "Loïc"];
friends.push("Alta");
// console.log(friends);
friends.unshift("Ori");
friends.pop();
// console.log(friends);

//Basics operation on Array
const neighbours = ["Suriname", "Brésil", "Argentine", "Colombie"];
neighbours.push("Utopia");
neighbours[0] = "Pérou";
neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")){
// 	console.log(`Probably not a central European country :D`);
// };

//Introduction Object
const myCountry = {
	country: "French-Guiana",
	capital: "Cayenne",
	language: "Créole",
	population: 250_000,
	neighbours: neighbours
};

//Dot vs. Bracket Notation
myCountry.population += 20_000;
myCountry.population -= 30_000;
// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// Loop for
// for (let i = 1; i <= 50; i++) {
// 	console.log(`Voter number ${i} is currently voting`);
// }

const percentages2 = [];
for(let i = 0; i < populations.length; i++){
	percentages2.push(percentageOfWorld1(populations[i]));
}

// console.log(percentages2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
console.log(listOfNeighbours.length);
for(let i = 0; i < listOfNeighbours.length; i++){
	for (let n = 0; n < listOfNeighbours[i].length; n++) {
		console.log(`Neighbours: ${listOfNeighbours[i][n]}`);
	}
}