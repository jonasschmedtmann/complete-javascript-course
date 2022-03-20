'use strict'; // has to be the first code in the file, forbids to do certain things, give visibility in dev console

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

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
const calcAge3 = function (birthYear){
    return 2022 - birthYear;
}

// arrow function, shorter way for function expression
// pro tip: good for one liner functions, do not get the this-statement
const calcAge4 = birthYear => 2022 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `My name is ${firstName} and I retire in ${retirement} years.`
}

console.log(yearsUntilRetirement(1988,"Vincenzo"));


