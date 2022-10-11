const country = 'Portugal';
const continent = 'Europe';
let population = 11;

console.log (country, continent, population);

const isIsland = false;
let language;

language = 'portuguese';

let halfPopulation = population/2;

population += 1;
population -=1;

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

if (population > 33) {
    console.log(`${country}'s population is above average'`);
} else {
    console.log(`${country}'s population is below average'`);
}
// console.log(isIsland, population, country, language);
// console.log(halfPopulation);
// console.log(description)

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if(numNeighbours == 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders!')
// }

// if(language === 'english' && population < 50 && isIsland == false) {
//     console.log(`You should live in ${country}! :)`);
// } else {
//     console.log(`${country} does not meet your criteria`);
// }


switch (language) {
    case 'chinese' :
    case 'mandarin' :
        console.log('MOST number of native speakers!');
        break;
    case 'spanish' : 
        console.log('2nd place in number of native speakers');
        break;
    case 'english' :
        console.log('3rd place');
        break;
    case 'hindi' :
        console.log('Number 4');
        break;
    case 'arabic' :
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

const average = population > 33 ? 'above' : 'below';

console.log(`${country}'s population is ${average} average`);