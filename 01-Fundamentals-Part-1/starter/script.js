
/*
    10: Values and Variables
*/

// const country = 'India';
// const continent = 'Asia';
// let countryPopulation = 1574113252608;
// 6000000

// console.log(country);
// console.log(continent);
// console.log(countryPopulation);

/*
    12: Data Types
*/

// const isIsland = false;
// let language;

// console.log(typeof country);
// console.log(typeof countryPopulation);
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof null);


/*
    13: let, const, var
*/
// language = 'Kannada';
// // isIland = false;

// console.log(language);

/*
    14: Basic Operators
*/

// console.log(countryPopulation / 2);
// console.log(countryPopulation++);

// const finlandPopulation = 6000000;
// console.log(countryPopulation > finlandPopulation);

// const avgPopulation = 33000000;
// console.log(countryPopulation < avgPopulation);

// const description = country + ' is in ' + continent + ', and its ' + Math.floor(countryPopulation / 100000) + ' million people speak ' + language;
// console.log(description);

/*
    Coding challenge -- calculate BMI
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn ** 2);

// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

/*
    18: Taking decisions/if-else
*/

// const age = 16;
// const driver = 'Vishu'

// if (age >= 18) {
//     console.log(`${driver} is allowed to drive 🚙`);
// } else {
//     console.log(`${driver} has to wait for another ${18 - age} years to drive`);
// }

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!!`)

// }

/*
    24: Logical Operators
*/

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = true;

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Vishu can drive');
// } else {
//     console.log('Vishu cannot drive');
// }

/* 
    25: Coding Challenge #3
*/

// const dolphinScores = [ 96, 108, 89 ];
// const koalasScores = [ 88, 92, 110 ];
// const dolphinScores = [ 97, 112, 101 ];
// const koalasScores = [ 109, 95, 123 ];
const dolphinScores = [ 97, 112, 101 ];
const koalasScores = [ 109, 95, 106 ];

const avgDolphinScores = (dolphinScores.reduce((a, b) => a + b, 0) / dolphinScores.length);
const avgKoalaScores = (koalasScores.reduce((a, b) => a + b, 0) / koalasScores.length);
console.log(avgDolphinScores, avgKoalaScores);

if (avgDolphinScores >= 100 || avgKoalaScores >= 100) {
    if (avgDolphinScores === avgKoalaScores) {
        console.log(`Woah!! Its a tie`);
    } else if (avgDolphinScores > avgKoalaScores) {
        console.log(`Yayy!! Dolphins have won 🏆`);
    } else {
        console.log(`Yayy!! Koalas have won 🏆`);
    }
} else {
    console.log(`There is no winner as minimum score is not acheived`);
}