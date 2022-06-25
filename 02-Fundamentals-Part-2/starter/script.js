'use strict';

/*function logger() {
    console.log("Written by Vali");
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice made out of ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(`This line calls the constant: ${appleJuice}`);
console.log(`This line uses the function directly: ${fruitProcessor(5, 0)}`);


// function declaration - HOISTING
function ageCalculator1(birthYear1) {
    return 2022 - birthYear1;
}
const age1 = ageCalculator1(1988)
console.log(age1);

//function expression - HOISTING
const ageCalculator2 = function (birthYear2) {
    return 2022 - birthYear2;
}

const age2 = ageCalculator2(1990);
console.log(age2);

// arrow function

const ageCalculator3 = birthYear3 => 2040 - birthYear3;
const age3 = ageCalculator3(1992);
console.log(ageCalculator3(1992));
console.log(age3);

const yearsUntilRetirement = (birthYear1, firstName) => {
    const age = 2022 - birthYear1;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}



function retirementCalc(birthYear, firstName) {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(retirementCalc(1988, 'Vali'));
console.log(retirementCalc(2001, 'Mike'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice made out of ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const currentYear = 2030;
const calcAge = function (birthYear) {
    return currentYear - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1988, 'Vali'));
console.log(yearsUntilRetirement(2001, 'Jake'));
console.log(yearsUntilRetirement(1923, 'Michael'));

const tryMe = yearsUntilRetirement(2020, 'The baby');
console.log(tryMe);

=== CODDING CHALLENGE 1 === */

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// console.log(`Dolphins scored an average of ${avgDolphins}`);
// console.log(`Koalas scored an average of ${avgKoalas}`);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win the trophy`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win the trophy`)
//     }
// }

// return `Average score for Dolphins is ${avgDolphins} and average score for Koalas is ${avgKoalas}`;
// console.log(calcAverage);
// function checkWinner(avgDollphins, avg) {

// }

// const yearsUntilRetirement = (birthYear1, firstName) => {
//     const age = 2022 - birthYear1;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years.`;
// }

// === CODDING CHALLENGE 1 REDONE === */
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let pointsDolphins = calcAverage(85, 54, 41);
let pointsKoalas = calcAverage(23, 34, 27);

console.log(`Dolphins scored an average of ${pointsDolphins}`);
console.log(`Koalas scored an average of ${pointsKoalas}`);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Nobody has scored double the points (${avgDolphins}pts. Dolphins vs. ${avgKoalas}pts. Koalas)`);
    }
}
// logging to the console is no longer required because the function already does that
// so just call the function, otherwise it will just print the whole function code
checkWinner(pointsDolphins, pointsKoalas);

//Arrays
const friends = ['Mike', 'John', 'Larry'];

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1990, 1988, 1959, 2001, 2016];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

friends.push('Jake'); // adds last element
console.log(friends);
friends.unshift('Bob'); //adds first element
console.log(friends);


friends.pop(); // removes last element
console.log(friends);
friends.shift();// removes first element
console.log(friends);

console.log(friends.indexOf('Larry'));
console.log(friends.indexOf('Bob'));

friends.push(23);

console.log(friends.includes('Larry')); // strict equality
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Mike')) {
    console.log(`${friends[0]} is at the party`);
}




// === CODDING CHALLENGE 2 ===


// console.log(`The bill is ${bill}, the tip is ${bill >= 50 && bill <= 300 ? tip = bill * 15 / 100 : tip = bill * 20 / 100}, so the total amount you need to tip ${bill >= 50 && bill <= 300 ? tip = bill + (bill * 15 / 100) : tip = bill + (bill * 20 / 100)}`);

function calcTip(bill) {
    if (bill > 50 && bill <= 300) {
        var theTip = bill * 15 / 100;
    } else {
        var theTip = bill * 20 / 100;
    } return theTip;
}

// const calcTip = function (bills) {
//     return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// }

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

// console.log(calcTip(bills[0]));
// console.log(calcTip(bills[1]));
// console.log(calcTip(bills[2]));

const totalBills = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

// totalBills.unshift(calcTip(bills[0]) + bills[0]);
// totalBills.unshift(calcTip(bills[1]) + bills[1]);
// totalBills.unshift(calcTip(bills[2]) + bills[2]);

console.log(totalBills);



// Objects

const jonasArray = [
    'Jonas',
    'Smith',
    2022 - 1990,
    'developer',
    ['Mike', 'Jake', 'Junior']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 2022 - 1990,
    job: 'teacher',
    friends: ['Mike', 'Jake', 'Junior']
}

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request. Choose only between firstName, lastName, age, job and friends');
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);


// === Object Methods ===

const valentin = {
    firstName: 'Vali',
    lastName: 'Visan',
    birthYear: 1988,
    job: 'developer',
    friends: ['Mike', 'Jake', 'Junior'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and ${this.hasDriversLicense ? 'has a' : 'does not have a'} driving license.`
    }
};

// console.log(valentin.calcAge());
// // console.log(valentin['calcAge'](2000));
// // console.log(valentin.calcAge(valentin.birthYear));
// console.log(valentin.age);
// console.log(valentin.age);
// console.log(valentin.age + 5);

console.log(valentin.getSummary());


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.getSummary());




// === CODDING CHALLENGE 3 ===

const mark = {
    height: 1.69,
    weight: 78,
    firstName: 'Mark',
    lastName: 'Miller',
    calcBmi: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};


const john = {
    height: 1.95,
    weight: 92,
    firstName: 'John',
    lastName: 'Smith',
    calcBmi: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};

john.calcBmi();
mark.calcBmi();
console.log(john.bmi);
console.log(mark.bmi);

console.log(mark);
console.log(john);
if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}${mark.lastName}'s BMI (${mark.bmi})is higher than ${john.firstName}${john.lastName}'s BMI (${john.bmi})`)
} else {
    console.log(`${john.firstName}${john.lastName}'s BMI (${john.bmi})is higher than ${mark.firstName}${mark.lastName}'s BMI (${mark.bmi})`)
}



//  === FOR LOOPS ===
// for loop keeps running while the condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }


const jonas = [
    'Jonas',
    'Smith',
    2022 - 1988,
    'teacher',
    ['Peter', 'Mike', 'Steven'],
    true
];

const types = [];
console.log('--- CONTINUE ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
    types.push(typeof jonas[i]);
}
console.log(types);

console.log('--- BREAK ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') break;
    console.log(jonas[i], typeof jonas[i]);
    types.push(typeof jonas[i]);
}
console.log(types);



const years = [1990, 1988, 1965, 2010, 2004];
const ages = [];
//calculates the ages for the current year
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
    console.log(ages[i]);
}


// === REVERSE LOOP ===

const jonas = [
    'Jonas',
    'Smith',
    2022 - 1988,
    'teacher',
    ['Peter', 'Mike', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`=== Starting Exercise ${exercise} ===`);

    for (let repetition = 1; repetition < 11; repetition++) {
        console.log(`------ Starting Repetition ${repetition} ------`)
    }

}


// WHILE LOOP

// for (let repetition = 1; repetition < 11; repetition++) {
//     console.log(`------ Starting Repetition ${repetition} ------`)
// }


// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE  Starting Repetition ${rep} ------`)
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You have rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Finally, we have rolled a 6. Ending the while loop here ...');
    }
}
*/

// Coding Challenge #4
/* MY VERSION
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];
let i = 0;
var sum = 0
function calcTip(bills) {
    for (let i = 0; i < bills.length; i++) {
        if (bills > 50 && bills <= 300) {
            tips = bills * 15 / 100;
        } else {
            tips = bills * 20 / 100;
        } return totals.push(bills[i] + tips[i]);
        //return console.log(`${totals.push(bills[i] + tips[i])}`);
    }
}

console.log(totals);

=== solution ===

const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    // console.log(sum);
    return (sum / arr.length);
}
console.log(calcAverage(totals));


// CHALLENGE from RUKSHAN

// given an integer array of [1, 4, 5, 9, 3], and K = 7,
// find 2 indexes where the values at these 2 indexes would sum up to K, in this example index 1 (4), and index 4 (3).
// output would be: [1, 4]

const findIndexes = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum === k) {
        return [i, j];
        //(`${i} and ${j} add up to ${sum} which is equal to ${k}`);
        // console.log(sum);
      }
    }
  }
  return null;
};

console.log(findIndexes([1, 4, 5, 9, 3], 7)); // [1, 4]
console.log(findIndexes([1, 4, 3, 9, 5], 7)); // [1, 2]
console.log(findIndexes([1, 4, 5, 9, 1], 7)); // null


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celcius:')),
  };

  console.log(measurement.value);
  console.log(typeof measurement.value);
  console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) identify bug
// B) find the bug
// C) fix the bug

console.log(measureKelvin());


// === Codding challenge 5? ===
*/
const temperaturesOne = [17, 21, 23];
const temperaturesTwo = [12, 5, -5, 0, 4];
const printForecast = function (temp) {
  let message = '';

  for (let i = 0; i < temp.length; i++) {
    message = message + `${temp[i]}°C in ${i + 1} days `;
    // console.log(`...${temp[i]} in ${i + 1} days`);
    // var forecast = [`...${temp[i]} in ${i + 1} days `].repeat(i);
    //console.log(arr.repeat(i + 1));
  }
  console.log(message);
};

printForecast(temperaturesOne);
printForecast(temperaturesTwo);

// === Codding challenge 5 SOLUTION ===
//ask Rukshan why this is working?

// const temperaturesOne = [17, 21, 23];
// const temperaturesTwo = [12, 5, -5, 0, 4];

// const printForecast = function (temp) {
//   let str = '';
//   for (let i = 0; i < temp.length; i++) {
//     str += `... ${temp[i]}°C in ${i + 1} days `;
//   }
//   console.log(str);
// };
// printForecast(temperaturesOne);
// printForecast(temperaturesTwo);

const useMap = function (temps) {
  const messages = temps
    .map(function (temp, i) {
      return `${temp}°C in ${i + 1} days `;
    })
    .join('... ');
  console.log(messages);
};

useMap(temperaturesOne);
