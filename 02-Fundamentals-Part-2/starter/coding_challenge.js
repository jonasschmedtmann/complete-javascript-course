'use strict'
//coding challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgKoalas = calcAverage(65, 54, 49);
let avgDolphins = calcAverage(44, 23, 71);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (2 * avgDolphins <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log("No team wins!");
    }
}

checkWinner(avgDolphins, avgKoalas);

avgKoalas = calcAverage(23, 34, 27);
avgDolphins = calcAverage(85, 54, 41);

checkWinner(avgDolphins, avgKoalas);

//coding challenge 2
const calcTip = (bill) => {
    return bill >=50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

//coding challenge 3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`)
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`)
}

//coding challenge 4

const billz = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipz = [];
const totalz = [];

for (let i = 0; i < billz.length; i++) {
    tipz.push(calcTip(billz[i]));
    totalz.push(billz[i] + tipz[i]);
}

console.log(billz, tipz, totalz);

//Bonus

const calculateAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(calculateAverage(totalz));

