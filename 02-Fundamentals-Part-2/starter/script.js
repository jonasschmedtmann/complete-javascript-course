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

const bill = new Array(125, 555, 44);
console.log(bill);

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        
    }
}

// // The COnditional Ternary Operator

// bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.20 * bill;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);