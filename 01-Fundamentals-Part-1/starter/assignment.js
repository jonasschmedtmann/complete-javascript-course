const country = "India";
const continent = "Asia";
let population = 13100000;
const isIsland = false;
const language = "Hindi"; 

console.log("My country name is "+country+" situated in "+continent+" having population of "+population);
population = 15000000;
console.log("My country name is "+country+" situated in "+continent+" having population of "+population);
console.log("Value of isIsland "+isIsland+" and value of language is "+language);

console.log("Number of person live in each half of country ", population/2);
console.log(++population);
const populationOfFinland = 6000000;
console.log(population > populationOfFinland);
console.log(population < 3300000);
const description = country+" is in "+continent+" , and its "+population+" million people speak "+language;
console.log(description);
const descriptionUsingTemplate = `${country} is in ${continent} , and its ${population} million people speak ${language}`;
console.log(descriptionUsingTemplate);