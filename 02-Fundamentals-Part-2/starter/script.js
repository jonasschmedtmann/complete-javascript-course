"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {hasDriverLicense = true;}
// if (hasDriversLicense) {console.log("I can Drive!");}

function fruitMultiplier(fruit) {
    return fruit * 2;
}

function fruitProcessor(apples, oranges) {
    
    const totalApples = fruitMultiplier(apples);
    const totalOranges = fruitMultiplier(oranges);
    
    return `Juice made with ${totalApples} apples and ${totalOranges} oranges.`;
}

let appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// JavaScript Fundamentals - Part 2

// Coding Challenge 1

console.log(`Result for Code Challenge 1 starts here..`);

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function chechWinner(avgDolphins, avgKoalas) {
    
    if (avgDolphins >= 2 * avgKoalas){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `No team won!`;
    }
}

console.log(chechWinner(scoreDolphins, scoreKoalas));


// Coding Challenge 2

console.log(`Result for Code Challenge 2 starts here..`);

const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? 0.15 * bills : 0.20 * bills;
}

// const bills = [125, 555, 44];
const bills = new Array(125, 555, 44);

console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

console.log(tips);

// const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
// const totals = new Array(calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]);
// OR
const totals = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2])

console.log(totals);

// Objects

const abdulObject = {
    firstName: "Abdul Barri",
    lastName: "Lawal",
    age: 2022 - 1999,
    friends: ["Owologe", "Feranmi", "Bolaji"],
    job: "Programmer"
};

console.log(abdulObject);