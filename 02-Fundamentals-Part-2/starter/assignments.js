'use strict';

//LESSON: FUNCTIONS//

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const usa = describeCountry("USA", 328, "Washington D.C.");
// console.log(usa);

const southKorea = describeCountry("South Korea", 51.71, "Seoul");
// console.log(southKorea);

const cameroon = describeCountry("Cameroon", 25.88, "Yaoundé");
// console.log(cameroon);

//LESSON: FUNCTION DECLARATION VS. EXPRESSIONS//