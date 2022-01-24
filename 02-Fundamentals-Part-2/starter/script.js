/*














function logger() {
    console.log('my name is Jacob');
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

///////////////////////////////////////
// Arrow function

// Arrow function - still a function expression
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'Jacob'));
console.log(yearsUntilRetirement(1980, 'Bob'));



///////////////////////////////////////
// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jacob'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀

// Calculates average score
// const calcAverage = (team, score1, score2, score3) => {
//     const averageScore = (score1 + score2 + score3) / 3;
//     console.log(`Average score for the ${team} was:`);
//     return averageScore;
// }

// Calculates average score - arrow function in one line
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

// Function to check winner with params of averages scores
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
        // return `Dolphin win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Koalas win  (${avgKoalas} vs. ${avgDolphins})`)
        // return `Koalas win  (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        console.log('No winner')
        // return `No winner`;
    }
}

// console.log(checkWinner(avgDolphins, avgKoalas));
checkWinner(avgDolphins, avgKoalas);

// Test 2: Remove let as we don't want to create new variables - just re assign
avgKoalas = calcAverage(23, 34, 27);
avgDolphins = calcAverage(85, 54, 41);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

// Values are totally independant from avg
// checkWinner(60, 30);
*/

///////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

// Property .length - not 0 based
console.log(friends.length);

// To get the last element of the array
console.log(friends[friends.length - 1]);

// Only parimative value are mutable - we can mutate arrays.
friends[2] = 'Jacob';
console.log(friends);

// Data structure with an array inside an array
const jacob = ['Jacob', 'Cornwell', 2037 - 1996, 'Web Dev', friends];

console.log(jacob);
console.log(jacob.length);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);