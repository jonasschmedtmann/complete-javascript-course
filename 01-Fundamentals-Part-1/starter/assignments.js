const country = "Suriname";
const continent = "Europe";
let population = 130;
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

language = 'Spanish';
// console.log(language);
const halfPop = population / 2;
// console.log(halfPop);
population++;
// console.log(population);
const finland = 6_000_000;
// console.log(population > finland);
const average = 33;
// console.log(population < average);
// const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
const description = `${country} 🥸 is in ${continent}, and its ${population} people speak ${language}.`;

// if (population > average){
// 	console.log(`${country}'s population is above ${average}.`);
// }else{
// 	console.log(`${country}'s population is ${average - population} million below ${average}`);
// }
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1){
// 	console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
// 	console.log('More than 1 border');
// } else {
// 	console.log('No borders');
// }
// if (language === "English" && population < 50 && !isIsland){
// 	console.log(`You should live in ${country} 😎`);
// } else {
// 	console.log(`${country} does not meet your criteria`);
// }
// switch (language) {
// 	case 'Spanish':
// 		console.log('2nd place in number of native speakers');
// 		break;
// 	case 'English':
// 		console.log('3rd place');
// 		break;
// 	case 'Chinese':
// 	case "Mandarin":
// 		console.log('MOST number of native speakers!');
// 		break;
// 	case "Hindi":
// 		console.log('Number 4');
// 		break;
// 	case "Arabic":
// 		console.log('5th most spoken language');
// 		break;
// 	default:
// 		console.log('Great language too :D');
// 		break;
// }

population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);