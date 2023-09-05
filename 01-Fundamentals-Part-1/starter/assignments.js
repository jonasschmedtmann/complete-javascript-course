// Values and Variables
const country = 'United States'
const continent = 'North America'
let population = 300000000

console.log(country, continent, population)

// Data Types
let isIsland = false
let language

console.log("isIsland is a", typeof isIsland)
console.log("language is a", typeof language)
console.log("country is a", typeof country)

// let, const, var
language = "english"

// Strings and Template Literals
const myTemplate = `The ${country} is in ${continent}, and has\
 a population of ${population}`

console.log(myTemplate)

/*
    5 falsy values:
        0, '', undefined, null, NaN
*/

// Switch statements
let currentDay = 'monday'

switch (currentDay) {
    case 'monday':
        console.log('Today is monday.')
        break
    case 'tuesday':
        console.log('Today is taco day.')
        break
    default:
        console.log('Today is default day')
}
