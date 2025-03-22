'use strict';
/*
let hasDriverslicense = false;
const passTest = true;

if(passTest) hasDriverslicense = true;
if(hasDriverslicense) console.log('I can drive');

function logger(){
    console.log('My name is Hamdi');
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeAppleJuice = fruitProcessor(2, 4);
console.log(orangeAppleJuice);

// Function declaration //

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age = calcAge1(1991);
console.log(age);

// Function Expression //

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge2(1991);
console.log(age)


//  Arrow Function //

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Ali'));
console.log(yearsUntilRetirement(1995, 'Aisha'));

// Function calling another function //

function cutFruitPieces(fruit){
    return fruit * 2;
}


function fruitProcessor(apples, oranges){
    const applePiece = cutFruitPieces(apples);
    const orangePiece = cutFruitPieces(oranges);

    const juice = `juice with ${applePiece} apples and ${orangePiece} oranges.`   
    return juice;
}


console.log(fruitProcessor(5, 10));


console.log(fruitProcessor(10, 10));

//Coding Challenge 1//

const calcAverage = (a, b, c) => (a + b + c) / 3;


let scoreDholphines = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// Test 1//

const checkWinner = function (AvgDholphines, AvgKoalas){

    if(AvgDholphines >= AvgKoalas * 2){
        console.log(`Dolphines win (${AvgDholphines} VS. ${AvgKoalas})`);
    } else if (AvgKoalas >= AvgDholphines * 2){
        console.log(`Koalas win (${AvgKoalas} VS. ${AvgDholphines})`);
    } else{ 
        console.log('no team win');
    }
}

checkWinner(scoreDholphines, scoreKoalas);

// Test 2 //

scoreDholphines = calcAverage(85, 54, 81);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDholphines, scoreKoalas);
checkWinner(scoreDholphines, scoreKoalas)


// Arrays // 

const friends = [ 'Aisha', 'Sofia', 'Maryam'];
console.log(friends);


const years = new Array(2024, 2025, 2026, 2027);

console.log(friends.length);

console.log(friends[friends.length -1]);

friends[2] = 'Amira';
console.log(friends);

// Exercise //

function calcAge1(birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge1(years[0]), calcAge1(years[1]), 
calcAge1(years[years.length-1])];
console.log(ages);



// Basic Array Operations //

const friends = [ 'Aisha', 'Sofia', 'Maryam'];

// Add elements //

const newLength = friends.push('Nasim');
console.log(friends);
console.log(newLength);

friends.unshift('Nabel');
console.log(friends);

// Remove Elements //
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift()
console.log(friends);

console.log(friends.indexOf('Aisha'));
console.log(friends.indexOf('Zak'));

friends.push(24);
console.log(friends.includes('Aisha'));
console.log(friends.includes('Zak'));
console.log(friends.includes(24));

if(friends.includes('Aisha')){
    console.log('I have a friend called Aisha');
}




// Challenge 2 //

// const calcTip = function(bill) {
//     return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// } didnt work for me 



const calcTip  = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);



// Object- Dot and Bracet notation //

const hamda = {
    firstName: 'Hamdi',
    lastName:'Hussein',
    age: 2025 - 2000,
    job:'Developer',
    friends: ['Aisha', 'Mohamed', 'Na']

};

console.log(hamda);
console.log(hamda.lastName);
console.log(hamda['lastName']);

const nameKey = 'Name';
console.log(hamda['first' + nameKey]);
console.log(hamda['last' + nameKey]);

const interestedIN = prompt('What do you want to know about Hamdi? choose between firstName lastName, age, job and friends');


if(hamda[interestedIN]){
    console.log(hamda[interestedIN]);
} else{
    console.log('wrong request! choose between firstName lastName, age, job and friends');
}

hamda.location = 'Somalia';
hamda['twitter'] = '@hamdihussein';

// Challenge //
// Hamdi has 3 friends, and her best friend is called Aisha. //

console.log(hamda.firstName + ' has ' + hamda.friends.length + ' friends' + ',' + ' and her best friend is called ' + hamda.friends[0]);
    
console.log(`${hamda.firstName} has ${hamda.friends.length} friends, and her best friend is called ${hamda.friends[0]}`);

// Object Method //

const hamda = {
    firstName: 'Hamdi',
    lastName:'Hussein',
    birthYear: 2000,
    job:'Developer',
    friends: ['Aisha', 'Mohamed', 'Na'],
    hasDriversLicense: true,

    // calcAge: function (birthYear){
    //     return 2037 - birthYear;

    // }

    
    // calcAge: function (){
    //     return 2037 - this.birthYear;
    // }

    calcAge: function (){
        this.age = 2037 - this.birthYear
        return this.age;
    },

   getSummary: function (){
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }

};

console.log(hamda.calcAge());
console.log(hamda.age);
console.log(hamda.getSummary());


// Challenge //
// "Hamdi is a 37-years old developer, and she has not a driver's license"

// Challenge 3 //

const mike = {

    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    
calcBmiMark: function (){
    this.bmi = (this.mass / this.height)** 2
        return this.bmi;
}    


} 

console.log(mike.calcBmiMark());

const john = {

    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBmiJohn: function (){
        this.bmi = (this.mass / this.height)** 2
            return this.bmi;
    },

 

}
john.calcBmiJohn();
console.log(john.bmi);
console.log(mike.bmi);


 if (john.bmi > mike.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mike.fullName}'s BMI (${mike.bmi}`)

} else { 
    console.log(`${mike.fullName}'s BMI (${mike.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
 
 }
*/ 

 // For loop running while the condition is true //

 for(let rep = 1; rep <= 10; rep++){

    console.log(`Lifting weights repitition ${rep} 🏋🏾‍♀️`);
 }

 
const hamda = [
    'Hamdi',
   'Hussein',
   2025 - 2000,
   'Developer',
  ['Aisha', 'Mohamed', 'Na'],
  true,
  false,

];

for(let i = 0; i < hamda.length; i++){
    console.log(hamda[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break //

console.log('----- ONLY STRINGS ----');
for (let i = 0; i < hamda.length; i++){
    if(typeof hamda[i] !== 'string') continue;

    console.log(hamda[i], typeof hamda[i]);
}

console.log('---- BREAK WITH NUMBER ----')
for (let i = 0; i < hamda.length; i++){
    if(typeof hamda[i] === 'number') break;

    console.log(hamda[i], typeof hamda[i]);
}

// Looping backwards and loopin in loop //

for(let i = hamda.length-1; i>=0; i--){
    console.log(i, hamda[i]);
}

for (let exercise =1; exercise < 4; exercise++){
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋🏾‍♀️`);
    }
}