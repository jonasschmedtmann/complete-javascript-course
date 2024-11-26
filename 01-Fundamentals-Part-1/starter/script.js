/*

///////////////////
// Basic Operator//

const now = 2037;

const ageAli = now - 1995;
const ageAsha = now - 1998;

console.log(ageAli * 2, ageAsha + 5);

// Strings and Template literals //

const firstName = "Hamda";
const myJob = "Developer";
const year = 2023;
const birthYear = 2000;

const hamdi = 'I am' +' '+ firstName + ' a '  + (year - birthYear) + 
' years old ' + myJob + '!';
console.log(hamdi);

const hamda = `I'm  ${firstName} a ${year-birthYear} years old ${myJob}!`
console.log(hamda);


//////////////////
//  Type Conversion //

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Hamda'));
console.log(String(23), 23);


// Type coercion //

console.log('I am ' + 23 + ' years old');
console.log('23'-'10'-3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);

// equal Operators

const age = 18;
if(age === 18) console.log('you just became an adult (strict');


if(age == 18) console.log('you just became an adult (loose)');

const favourite =(Number(prompt("what's your favourite number")));


if(favourite === 13){
console.log('Cool! 23 is an amazing number!')
} else if (favourite === 3){
    console.log('3 is also a cool number')
} else if (favourite === 5){
    console.log('5 is a great number')
} else {
    console.log('The number is not 13 or 3 or 5');
}

if (favourite !== 5) console.log('why not 5')


// Logical Operator //

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);


if(hasDriversLicense && hasGoodVision){
    console.log('Sofia is able to drive!');
} else {
    console.log('Someone else should drive...');
}



// The Switch Statement //

const day = 'thursday';

switch (day) {
    case 'saturday':
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'sunday':
        console.log('prepare theory videos');
        break;
    case 'monday':
    case 'tuesday':
        console.log('Write code examples');
        break;
    case 'wednesday':
        console.log('Recod videos');
        break;
    case 'thurday':
    case 'friday':
        console.log('Enjoy the weekend');
        break;
    default:
    console.log('Not a valid day!'); 
}

var everyDay = "saturday";

if(everyDay === "saturday"){
    console.log('plan course structure');
    console.log('Go to coding meetup');
} else if (everyDay ===  'sunday'){
    console.log('prepare theory videos');
} else if (everyDay === 'monday' || everyDay === 'tuesday'){
    console.log('Write code examples');
} else if (everyDay === 'wednesday'){
    console.log('Recod videos');
} else if (everyDay === 'thurday' || everyDay === 'friday'){
    console.log('Enjoy the weekend');
}else {
    console.log('Not a valid day!'); 
}

*/

// Ternatary Operator //
const age = 19;
const drink = age >= 18 ? 'coffee☕': 'water🥤';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'coffee☕': 'water🥤'}`);

