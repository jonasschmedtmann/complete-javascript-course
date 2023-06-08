/*

// Values variables // 

var continent;
var country;
var population;

continent = "Africa";
country = "Somalia";
population = 30;

console.log(continent);
console.log(country);
console.log(population +' ' + "Million");

// Data Type //

var isIsland = true;
console.log(isIsland);
console.log(typeof isIsland);



// let const and var

const language = "English";
console.log(language);

// Basic Operator
population++;
console.log(population / 2 + ' ' + 'Million');
console.log(population);

var popFinland = 6;

console.log(popFinland > population);
console.log(population < 33);

var description;

description = country + ' is in '  + continent + ' and its '  +
population + ' Million people speak ' + language;

console.log(description);

var desSomalia = `${country} is in ${continent} and its ${population} 
Million people speak ${language}`
console.log(desSomalia);

/*
// if & else statement //

if(population > 33){
    console.log("Somalia's Population is above the average");
} else{
    console.log("Somalia's population is 18 million below average");

}



// Type conversion and coercion

console.log('9' - '5');    // 4
console.log('19' - '13' + '17');  // '617'
console.log('19' - '13' + 17);  // 23
console.log('123' < 57);    //true
console.log(5 + 6 + '4' + 9 - 4 - 2);  '1143'



// Equaity Operators //

const numNeighbours =(Number(prompt('How many neighbour countries does your country have?')));

if(numNeighbours === 1){
    console.log('Only 1 border')
} else if(numNeighbours > 1){
    console.log('More than 1 border')
} else {
    console.log('No borders')
}





// Logical Operators //

if(language === "English" && population < 50 &&  isIsland === true) {
    console.log('You should live in Somalia :)');
 } else {
    console.log('Somalia does not meet your criteria :(');
 }




 // coding challenge 1 //
// Data 1//
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark)


const BMIJohn = massJohn / (heightJohn * heightJohn)


var markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log( BMIMark, BMIJohn);



// The switch Statement //

const language = 'arabic';
 
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log( '2nd place in number of native speakers');
        break;
    case 'english':
        console.log( '3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');

}

*/

// The Conditional(Ternary) Operator //

const population = 13;

const result = population > 33? "Portugal's population is above average":
 "Portugal's population is below average";
 console.log(result);

 console.log(`I want to know ${population > 33? "Portugal's population is above average":
 "Portugal's population is below average"}`);
 