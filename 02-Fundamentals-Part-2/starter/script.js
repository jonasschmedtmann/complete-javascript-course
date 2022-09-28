'use strict';

/*
    32: Activating strict mode
*/

// // let private = false;        // Error: Unexpected strict mode reserved word
// let hasDriversLicense = false;
// const passTest = true;


// // Using a wrong spelling intentionally here
// if (passTest) hasDriverLicense = true;      //Uncaught ReferenceError: hasDriverLicense is not defined

// if (hasDriversLicense) {
//     console.log(`Yayy!! I can drive`);
// }

/*
    33: Functions
*/

// function logger () {
//     console.log(`My name is Vishu!`);
// }

// logger();   // Calling

// function fruitProcessor (applesCount, orangesCount) {
//     console.log(applesCount, orangesCount);
//     const juice = `Juice with ${applesCount} apples and ${orangesCount} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(10, 3));
// console.log(fruitProcessor(7, 9));

/*
    34: Function Declaration vs. Expression
*/

// // function declaration -- can be called before declaring -- Hoisting 🙊
// function calcAge1 (birthYear) {
//     return 2022 - birthYear;
// }

// console.log(calcAge1(1992));

// //function expression/ anonymous function -- cannot be called before initializing
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// };

// console.log(calcAge2(1997));

/*
    35: Arrow functions
*/

// const calcAge = (birthYear) => 2022 - birthYear;
// console.log(calcAge(1992));

// const yearsUntilRetirement = (birthYear, retirementAge) => {
//     const age = 2022 - birthYear;
//     const yearsLeft = retirementAge - age;
//     return yearsLeft;
// }

// console.log(yearsUntilRetirement(1992, 55));

/*
    36: Functions calling other functions
*/

// const cutFruitToPieces = (fruit) => fruit * 4;

// const fruitProcessor = (applesCount, orangesCount) => {

//     const applePieces = cutFruitToPieces(applesCount)
//     const orangePieces = cutFruitToPieces(orangesCount)

//     console.log(applesCount, orangesCount);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

/*
    Coding Challenge #1
*/

// const calcAvg = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else {
//         return `No team wins...😢`
//     }
// }

// // Test Data 1
// let dolphinsScores = [ 44, 23, 71 ];
// let koalasScores = [ 65, 54, 49 ];
// let avgDolphins = calcAvg(dolphinsScores);
// let avgKoalas = calcAvg(koalasScores);
// console.log(avgDolphins, avgKoalas);

// console.log(checkWinner(avgDolphins, avgKoalas));

// // Test Data 2
// dolphinsScores = [ 85, 54, 41 ];
// koalasScores = [ 23, 34, 27 ];
// avgDolphins = calcAvg(dolphinsScores);
// avgKoalas = calcAvg(koalasScores);
// console.log(avgDolphins, avgKoalas);
// console.log(checkWinner(avgDolphins, avgKoalas));

/*
    39: Intruduction to arrays
*/

// const data = [ 'Vishu', 29, 'Vitla' ];
// console.log((data));

/*
    40: Basic Array Operations
*/

// const friends = [ 'Vishu', 'Kaushik' ];

// console.log(friends);
// friends.push('Sharath');
// console.log(friends);
// friends.unshift('Arjun');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();    // remove first element
// console.log(friends);

// console.log(friends.indexOf('Arjun'));      // -1
// console.log(friends.indexOf('Vishu'));      // position
// console.log(friends.includes('Vishu'));     // true
// console.log(friends.includes('Arjun'));     // false
// console.log(friends.reduceRight(callbackfn));     // false

/*
    41: Coding challenge #2
*/

// const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;


// const bills = [ 125, 555, 44 ];

// const tips = bills.map(bill => calcTip(bill));
// console.log(tips);
// const total = bills.map(bill => bill + calcTip(bill));
// console.log(total);

/*
    43: Objects -- Dot vs. Bracket Notation
*/

// const Vishu = {
//     firstName: 'Vishu',
//     lastName: 'Kumar',
//     job: 'coder',
//     age: 2022 - 1992,
//     friends: [ 'Kaushik', 'Sharath', 'Arjun' ]
// };

// console.log(Vishu.firstName);
// console.log(Vishu[ 'lastName' ]);

// const interestedIn = prompt(`What do you want to know about vishu? 
//             Select from firstName, lastName, job, age, friends`);

// console.log(Vishu.interestedIn)     // Undefined as 'interestedIn' is not a property of Vishu
// console.log(Vishu[ interestedIn ]); // Gives value as the one inside the square bracket is an expression and is resolved during execution

// Vishu.home = 'Vitla';
// Vishu[ 'location' ] = 'Bengaluru';

// console.log(Vishu);

// console.log(`${Vishu.firstName} has ${Vishu.friends.length} and his best friend is ${Vishu.friends[ 0 ]}`);

/*
    44: Object Methods
*/

// const vishu = {
//     firstName: 'Vishu',
//     lastName: 'Kumar',
//     job: 'coder',
//     birthYear: 1992,
//     friends: [ 'Kaushik', 'Sharath', 'Arjun' ],
//     hasDriversLicense: false,

//     // calcAge: function(birthYear) {
//     //     return 2022 - birthYear
//     // }

//     // calcAge: function () {
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2022 - this.birthYear
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and
//         ${this.hasDriversLicense ? `he has a drivers license` : `he doesn't have a drivers license`}`;
//     }
// };

// // console.log(Vishu.calcAge(1992));
// // console.log(Vishu[ 'calcAge' ](1992));

// console.log(vishu.calcAge());
// console.log(vishu.age);
// console.log(vishu.getSummary());

/*
    45: Coding Challenge #3
*/

// const mark = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };
// const john = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// } else {
//     console.log(`Wow!! it's a tie for the BMIs 🙆🏼‍♂️`);
// }


/*
    47: Looping Arrays, breaking and continuing
*/

// const vishu = [
//     'Vishu',
//     'Kumar',
//     29,
//     [ 'Kaushik', 'Sharath', 'Arjun' ],
//     'Vitla'
// ];

// for (let i = 0; i < vishu.length; i++) {

//     if (typeof vishu[ i ] === 'object')
//         break;          // Exit the array

//     if (typeof vishu[ i ] !== 'string')
//         continue;       // Skip if the element is not of string type

//     console.log(vishu[ i ], typeof vishu[ i ]);
// }

/* 
    49: While loop
*/

const diceMethod = () => Math.trunc(Math.random() * 6 + 1);

// console.log(dice);

let dice = diceMethod();

console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a dice -- ${dice}`);
    dice = diceMethod();
}






