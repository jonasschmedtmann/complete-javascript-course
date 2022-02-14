// calling/running/invoking function
// const yearBorn = 1986;
// const currentYear = prompt('Enter the current year');
// const age = currentYear - yearBorn;

// function long() {
//     console.log(`My name is Khadar and I'm ${age} years old`);
// };

// long();
/*

function fruitProcessor(apple, orange) {

    const juice = `Juice with ${apple} apples and ${orange} organge.`
    return juice;
}
*/

/*
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = String(23);
console.log(num);
*/


//Paramenter is the place holder.
// the argument is the actual value that we give the function

//-********- Function Declaration -**********--
/*
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(prompt('Enter the DoB'));
console.log(age1);*/

//-***********----function expression--***************
// remeber expression producess a value
/*
const CalcAgae2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = CalcAgae2(prompt('Enter the birth year'));
console.log(age2);
*/
//****************--Arrow function---**********

/*
const calcAge2 = birthYear => 2037 - birthYear;
const age3 = calcAge2(prompt('Gali taariikhda dhalashada'));
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;

    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(prompt('Enter the Johens births Year'), 'Johnes'));
console.log(yearsUntilRetirement(prompt('Enter the Adam s birth year'), 'Adam'));

// arrow function do not get 'this' Key word.*/
/*
///--- arrow function with curly bracise - braces

const yearUntilRetirement = (birthYear, firstName) => {
    const age = prompt('Enter Current Year') - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetirement(prompt(`Enter Birth Year`), 'Adam'));
console.log(yearUntilRetirement(prompt('Enter Birth Year'), 'Nasir'));
*/
//-----------------------------------------------------

//---------------------------------------------------------------------------------------------------
// -----------Function calling function ----------------------------
// calling function from inside another function

function cutFruitPieces(fruit) {
    return fruit * 2;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const Juice = `A glass of apple juice is made up ${applePieces} apples, 
A glass of orange juice is made up ${orangePieces} oranges.`
    return Juice;
};
console.log(fruitProcessor(2, 4));
//--------------------------------------------

const calAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear) {
    const age = calAge(birthYear);
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));