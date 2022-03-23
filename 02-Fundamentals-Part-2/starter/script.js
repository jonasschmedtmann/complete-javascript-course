'use strict'; // has to be the first code in the file, forbids to do certain things, give visibility in dev console

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

///////////////

function calcAge1(birthYear) { // paramter = placeholder, argument = what you put in when executing function
    const age = 2022 - birthYear;
    return age;
}

// fucntion declaration, can be called before they are declared in the file, js will jump to function
function calcAge2(birthYear) { // refactored
    return 2022 - birthYear;
}

// function expression, "turning calcAge3 into a function that takes an argument", needs to be declared before usage
// pro tip: use expressions, (1) forces you to declare them first and (2) values and functions stored in variables
const calcAge3 = function (birthYear) {
    return 2022 - birthYear;
}
calcAge3(1988);

// arrow function, shorter way for function expression
// pro tip: good for one liner functions, do not get the this-statement
const calcAge4 = birthYear => 2022 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `My name is ${firstName} and I retire in ${retirement} years.`
}

console.log(yearsUntilRetirement(1988, "Vincenzo"));

///////////////

const cutFruitPieces = fruit => fruit * 4;

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

///////////////

const calculateAge = birthYear => 2022 - birthYear;

const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calculateAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `My name is ${firstName} and I retire in ${retirement} years.`
    } else {
        return retirement
    }
}

console.log(yearsUntilRetirement2(1988, "Vincenzo"));
console.log(yearsUntilRetirement2(1956, "Petra"));

///////////////

const caclAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
const avgDolphins = caclAverage(85, 54, 41);
const avgKoalas = caclAverage(23, 34, 27);

function checkWinner(dolphins, koalas) {
    if ((dolphins * 2) >= koalas) {
        console.log(`Dolphins win. (${dolphins} vs. ${koalas})`);
    } else if ((koalas * 2) >= dolphins) {
        console.log(`Koalas win. (${koalas} vs. ${dolphins})`);
    } else {
        console.log(`No team wins.. 😭`)
    }
}

checkWinner(avgDolphins, avgKoalas);

///////////////

const friends = ['Anna', 'Lisa', 'Andrea'];
const years = new Array(1991, 1988, 2002, 2000);

console.log(friends);
console.log(friends[friends.length - 1]);

friends[1] = 'Antonella';
console.log(friends)

const AntonellaArray = ['Antonella', 'S.', 2022 - 1990, 'Trainer', friends];
console.log(AntonellaArray)

///////////////

// Adding elements to an array
const newLength = friends.push('Olga'); // adds element to the end of the array and returns length of the array
console.log(friends);
console.log(newLength);

friends.unshift('Tobias'); // adds element to the beginning of the array and returns length of the array
console.log(friends);

// Removing elements to an array
const popped = friends.pop(); // removes the last element of the array and returns the removed element
friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // removes the first element of the array and returns the removed element

console.log(friends.indexOf('Steven')) // returns the index number of an element in the array, -1 if element is not found
console.log(friends.includes('Steven')) // returns true if found, false if not in the array

if (friends.includes('Steven')) {
    console.log("You have a friend called Steven")
}

//////////////////

const calcTip = bill => 50 < bill < 300 ? bill * 15 / 100 : bill * 20 / 100;

const bills = [125, 555, 44];
const tips = [];
const totals = [];

const tips2 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

function calculate(bill) {
    const tip = calcTip(bill);
    tips.push(tip);
    
    const total = tip + bill;
    totals.push(total);
}

for(let i = 0; i < bills.length; i++) {
    calculate(bills[i]);
}

console.log(tips, tips2, totals);

//////////////////

const year = 2022;

// object literall syntax
const anto = {
    firstName : 'Antonella',
    lastName : 'S.',
    age : year - 1990,
    friends : ['Thomas', 'Peter', 'Jonas']
}

// dot vs bracket notation
console.log(anto.lastName); // takes a object.key as a parameter
console.log(anto['lastName']); // takes a stringf as a parameter

const nameKey = 'Name';
console.log(anto['first' + nameKey], anto['last' + nameKey]);


// asking user for input
const interestedIn = prompt('What do you want to know about Anto? Choose between first name, last name, age and friends.')

// if user input is not in object = undefined = because undefined is a false value we can use a simple if/else statement
if(anto[interestedIn]){
    console.log(`Antonellas ${interestedIn} is ${anto[interestedIn]}`);
} else { 
    console.log('Wrong request. Choose between first name, last name, age and friends.')
} 

anto.location = 'Germany';
anto['twitter'] = 'Not available'

console.log(anto);
console.log(`${anto.firstName} has ${anto.friends.length} friends, and her best friend is called ${anto.friends[0]}.`);

//////////////////

const antoGrownUp = {
    firstName : 'Antonella',
    lastName : 'G.',
    birthYear : 1990,
    friends : ['Thomas', 'Peter', 'Jonas'],
    hasDriversLicense : this.calcAge > 18 ? true : false,
    calcAge: function() { // method = function attached to an object, function is a property
        console.log(this)                   // this-keyword = this equals the object calling the method
        this.age = 2022 - this.birthYear;   // this instead of antoGrownUp, due to DRY. "What if antoGrownUp-nomenclature is changing?" 
        return this.age                     // using the dot-notation to generate a new key-value pair in this.object
    },  
    getSummary: function() {
        return `${this.firstName} is ${this.calcAge()}-old and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }              // better to call calcAge() as we can not assume that .age exists i.e. calcAge has already run.
}                                         

// console.log(antoGrownUp['calcAge']());
console.log(antoGrownUp.calcAge(), antoGrownUp.age);
console.log(antoGrownUp.getSummary());

//////////////////

const mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    height: 1.95,
    mass: 92,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

// methods do not call themself, they need to explicilty called hence this.calcBMI and not this.bmi
mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`);
}

////////////////////

