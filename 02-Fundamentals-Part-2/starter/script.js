'use strict';
/*
function logger() {
    console.log('My name is Angela');
}

//calling, running, invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//to get the return value of the function we need to save the value in a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration (we can call it before you define it)
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1992);
console.log(age1);

//function expression - anonimous function (we can't call it without defining it)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age2);

//Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;

const age3 =  calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1992, "Angela"));
console.log(yearsUntilRetirement(1980, "Maria"));

//Functions calling other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));


//Coding Challenge 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins!')
    }
}

checkWinner(300, 600);


let angie = {
    name: "Angie",
    age: "29",
    energy: 25,
    thirst: 20,
    sanity: 30,
    money: 0,
};

function passTime(person, time, sleeping = false) {
    person.energy -= time * 5;
    person.thirst += time * 5;
    if (!sleeping) {
        person.sanity -= time * 2;
    }
    console.log(`Money: ${person.money}, Energy:${person.energy}, Thirst:${person.thirst}, Sanity: ${person.sanity}`);
}

// implement a work function
// it should simulate the person working for *time* hours
// this should increase the persons money by 5 per hour
function work(person, time) {
    person.money += 10 * time;
    // ends with the time passing
    passTime(person, time);
}

// implement a meal function
// it should simulate the person eating for *time* hours
// this should increase the persons energy by 20 per hour
function eat(person, time) {
    person.energy += 20 * time;
    // ends with the time passing
    passTime(person, time);
}

// implement a meal function
// it should simulate the person drinking for *time* hours
// this should decrease the persons thirst by 20 per hour
function drink(person, time) {
    person.thirst -= 20 * time;
    // ends with the time passing
    passTime(person, time);
}

// implement a meal function
// it should simulate the person having a meal
// a meal consists of eating and drinking
// (for convinience when a person needs to both eat and drink)
function meal(person, time) {
    eat(person, time / 2);
    drink(person, time / 2);
}

// implement a sleep function
// it should simulate the person sleeping for *time* hours
// this should increase the persons sanity by 10 per hour
function sleep(person, time) {
    person.sanity += 10 * time;
    // ends with the time passing
    passTime(person, time, true);
}

// implement a live function
// it should simulate the persons usual day
// during the day:
// - the person needs to have the right amount of meals
// - make some money
// - not let energy be < 10
// - not let thirst be > 25
// - not let sanity be < 10
const INTERVAL = 1 / 60;
function live(person) {
    for (let time = 0; time < 24; time += INTERVAL) {
        if (person.energy <= 10 && person.thirst >= 25 && person.sanity <= 10) {
            meal(person, INTERVAL / 4);
            sleep(person, INTERVAL * 3 / 4);
        } else if (person.energy <= 10 && person.thirst >= 25) {
            meal(person, INTERVAL);
        } else if (person.energy <= 10 && person.sanity <= 10) {
            eat(person, INTERVAL / 4);
            sleep(person, INTERVAL * 3 / 4);
        } else if (person.thirst >= 25 && person.sanity <= 10) {
            drink(person, INTERVAL / 4);
            sleep(person, INTERVAL * 3 / 4);
        } else if (person.energy <= 10) {
            eat(person, INTERVAL);
        } else if (person.thirst >= 25) {
            drink(person, INTERVAL);
        } else if (person.sanity <= 10) {
            sleep(person, INTERVAL);
        } else {
            work(person, INTERVAL);
        }
    }
}

live(angie);
console.log(angie);

Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends[0]); 
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = 'Jay';
console.log(friends);

//friends = ['Bob', 'Ana']; - can't switch because it's a constant

const firstName = 'Ângela';

const angela = [firstName, 'Santos', 2021 - 1992, 'nurse', friends];

console.log(angela);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1991, 1995, 2000, 2020];

console.log(calcAge(years[0]))

const calculatedYears = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

console.log(calculatedYears);

const friends = ['Ana', 'João', 'Maria'];
const newLength = friends.push('Pedro'); // returns the length of the array add an element to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('Mariana'); // add a value to the beggining of the array
console.log(friends);

//remove elements
friends.pop(); //returns removed element and remove the last element of the array
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //removes the first element
console.log(friends);

console.log(friends.indexOf('Ana')) ;
console.log(friends.indexOf('Kiana'));

friends.push(23);
console.log(friends.includes('Ana'));
console.log(friends.includes(23));
console.log(friends.includes('23'));

if (friends.includes('Ana')) {
    console.log('You have a friend called Ana!')
}


//Coding Challenge 2
const calcTip = bill => {
    if (bill > 50 && bill < 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(calcTip(100));
console.log(bills);
console.log(tips);
console.log(total);


//Objects

const angela = {
    firstName: 'Ângela',
    lastName: 'Santos',
    age: 2021 - 1992,
    profession: 'nurse',
    friends: ['Jorge','Ruirui', 'Rafael', 'Bárbara']
};
console.log(angela);

console.log(angela.lastName);
console.log(angela['lastName']);

const nameKey = 'Name';
console.log(angela['first' + nameKey]);
console.log(angela['last' + nameKey]);

the dot notation is more used. 
difference between braket notation - the expression is going to be evaluated
const interestedIn = prompt('What do you want to know about Ângela? Chose between firstName, lastName, age, profession, and friends');

if(angela[interestedIn]) {
    console.log(angela[interestedIn]);
} else {
    console.log("The value  does not exist!");
}

angela.location = 'Portugal';
console.log(angela);

//Challenge
//"Ângela has 4 friends and the best friend is called Jorge"
console.log(`${angela.firstName} has ${angela.friends.length} and the best friend is ${angela.friends[0]}`);

const angela = {
        firstName: 'Ângela',
        lastName: 'Santos',
        birthYear: 1992,
        profession: 'nurse',
        friends: ['Jorge','Ruirui', 'Rafael', 'Bárbara'],
        hasDriversLicense: true,
//a function attached to an object is a method
        // calcAge: function(birthYear) {
        //     return 2021 - birthYear;
        // }
//this points to the angela
        // calcAge: function() {
        //         console.log(this);
        //         return 2021 - this.birthYear;
        //     }

        calcAge: function() {
            this.age = 2021 - this.birthYear;
            return this.age;
        },

        getSummary: function() {
            return `${this.firstName} is a ${this.calcAge()} years old ${this.profession} and she ${angela.hasDriversLicense ? 'has' : 'has not'} a driver's license`
        }

    };
    //console.log(angela.calcAge());
    // console.log(angela['calcAge']());
    //console.log(angela.age);

    //Challenge
    //"Ângela is a 29 year old teacher. and he has a driver's license"

    console.log(angela.getSummary())

//Codding Challeng 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`);
};


//Loop
//for loop keeps running while condition is true

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
}

//Loop arrays

const angela = [
    'Ângela',
    'Santos',
    1992,
    'nurse',
    ['Jorge','Ruirui', 'Rafael', 'Bárbara'],
]
const types = [];
console.log(angela);

for (let i = 0; i < angela.length; i++) {
 //reading from angela array
    console.log(angela[i], typeof angela[i]);
//Filling types array
    //types[i] = typeof angela[i];
    types.push(typeof angela[i]);
}

console.log(types);

const years =[1992, 2007, 2020, 1974];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue (stop one itiration and go to the next) and break (stops the whole loop)


//Loop backwards

const angela = [
    'Ângela',
    'Santos',
    1992,
    'nurse',
    ['Jorge','Ruirui', 'Rafael', 'Bárbara'],
]

for (let i = angela.length - 1; i >= 0; i--) {
    console.log(i, angela[i]);
}

//Loop inside a loop

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----------Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
    }
}


//while loop

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
}

let rep = 1;
while(rep <= 10) {
    //console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}


//Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const calcTip = bill => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.20;
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips, totals);

const calcAverage = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let result = sum / arr.length;
    return result;
}

console.log(calcAverage(tips));
*/