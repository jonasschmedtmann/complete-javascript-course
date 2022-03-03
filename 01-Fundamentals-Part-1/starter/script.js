/*
// comments used to define sections

//variables
let country = "Ireland";
let continent = "Europe";
let population = 5027103;


console.log(country);
console.log(continent);
console.log(population);
*/
///////////////////////////////////////
/*
true;
console.log(true);
console.log(typeof (true));
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof (javascriptIsFun));
console.log(typeof (23));
console.log(typeof ("javascriptIsFun"));
console.log(typeof (javascript));


javascriptIsFun = "Yes"
console.log(typeof (javascriptIsFun));

let year;
console.log(year);
console.log(typeof (year));

//mutate the year variable
year = 1991;
console.log(year);
console.log(typeof (year))

console.log(typeof (null));
*/
//////////////////////////////
/*
let age = 30;
//mutate the age variable
age = 31;


//const is immutable
//cannot declare empty Const variable
const birthYear = 1991;
//this is not allowed
//birthYear = 1990;

//var used prior to ES6
var job = "programmer";
job = "teacher"

//this works but bad practice
lastName = "Donnelly"
console.log(lastName);
*/

/////////////////////////////


/*
//Mathematical operators
const currentYear = 2022
const agePatrick = currentYear - 1984;
const ageSarah = currentYear - 2005;
console.log(agePatrick, ageSarah);


// 2**3 means 2 x 2 x 2 = 8
console.log(agePatrick * 2, agePatrick / 2, 2 ** 3);

const firstName = 'Patrick'
const lastName = 'Donnelly'
console.log(firstName + " " + lastName);

//template literal
console.log(`${firstName} ${lastName}`);


//assignment operators

//use let here to allow mutation of value of x
let x = 10 + 5;
x += 10; // += means x = x + 10 = 25
x *= 4; // *= means x = x * 4 =100
x++; // x++ means x = x+1= 101
x--; // x-- means x = x-1= 100
x--; //99
console.log(x)

// Comparison operators - (produce boolean values)
console.log(agePatrick > ageSarah);
//same as below
console.log(currentYear - 1984 > currentYear - 2005);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18
console.log(isFullAge);

*/

////////////////////////////////

//order or precedence

//generally - mathematical operators have higher precedence than assignment operators

// const currentYear = 2022
// const agePatrick = currentYear - 1984;
// const ageSarah = currentYear - 2005;
// console.log(currentYear - 1984 > currentYear - 2005);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// //grouping has highest precedecne - need the parentheses ()
// const avAge = (agePatrick + ageSarah) / 2;
// console.log(agePatrick, ageSarah, avAge);


//////////////////////////

//17. Strings and template literals

/*
const fName = 'Patrick';
const job = "Programmer";
const birthYear = 1984;
const year = 2022
const patrick = "I'm " + fName + ", a " + (year - birthYear) + " year old " + job + "!";
//or
const patrickNew = `I'm ${fName}, a ${year - birthYear} year old ${job}`

console.log(patrick);
console.log(patrickNew);

console.log(`Hello World!`);

// multiline String

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

/////////////////////////////

// 18. if/else statments - control structure

/*
const age = 15;

if (age >= 18) {
    console.log("old enough");
} else {
    const yearsLeft = 18 - age
    console.log(`Not old enough yet. You are only ${age}, You have ${yearsLeft} years to wait before you are 18 `);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//////////////////////////////////

// 20. Type conversion and coercion

/*
// type conversion
const inputYear = "1991"
console.log(inputYear + 18); // '+' sign concatinates and coerces to String
console.log(typeof (inputYear + 18));
console.log(Number(inputYear)); // inputYear still a string
console.log(Number(inputYear) + 18); // inputYear still a string

console.log(Number('Patrick')); // NaN
console.log(typeof (NaN)); // typeof (NaN) - number - invalid number

console.log(String(23), 23);

//type coercion (+ sign performs the coercion)
console.log('I am ' + 38 + " years old")
console.log('23' - '10' - 3); // '-' sign type coerces to Number
console.log('23' + '10' + 3); // '+' sign concatinates and coerces to String
console.log('23' * '2') // '*' coreces to number
console.log('23' / '2') // '/' coreces to number

let n = '1' + 1; //'11' (String)
n = n - 1; //10 (Number)
console.log(n);//10 Number
*/

//////////////////


//21. Truthy and Falsy

//5 Falsy Values: 0, Null, NaN,undefined,''
//everything else is a Truthy value

// console.log(Boolean(0)); // f
// console.log(Boolean(undefined)); //f
// console.log(Boolean(NaN)); //f
// console.log(Boolean(''));//f
// console.log(Boolean(null));//f
// console.log(Boolean('Patrick')); //t
// console.log(Boolean({})); //t
// console.log(Boolean(1)); //t

// let money = 0;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You have no money");
// };

// money = 100;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You have no money");
// };

// let height;
// if (height) {
//     console.log('Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// };

// height = 123;
// if (height) {
//     console.log('Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// };

// height = 0;//even though 0 is a number it returns - undefined becasue 0 is falsy
// if (height) {
//     console.log('Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// };


// //fix
// height = 0;
// if (height || height === 0) {
//     console.log('Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// };

//////////////////////////////////////////

//22. Equality operators
/// === returns truthy or falsy (strict) - only usse strict version
// == loose equality operator - type coercion

//  18 ==='18' false
//  18 =='18' true

// const age = 18;

// if (age === 18) console.log("Person is 18");
// else console.log("Person is not 18");

// let favColour = prompt("Whats your favourite colour?")
// console.log(favColour);
// console.log(typeof favColour);

// let favNumber = prompt("Whats your favourite Number?")
// console.log(favNumber);
// console.log(typeof favNumber); // string

// if (favNumber == 7) console.log("7 is an amazing number");
// if (favNumber === 7) {
//     console.log("7 is an amazing number");
// } else if (favNumber == 7) {
//     console.log("7 was typeof string not number");
// } else {
//     console.log("number is neither '7'(string) or 7(number)");
// }

// favColour = prompt("Whats your favourite colour?")
// console.log(favColour);
// console.log(typeof favColour);

// favNumber = Number(prompt("Whats your favourite Number?")) // type coercion
// console.log(favNumber);
// console.log(typeof favNumber); // string

// if (favNumber === 7) console.log("7 is an amazing number");
// if (favNumber === 7) {
//     console.log("7 is an amazing number");
// } else if (favNumber === 23) {
//     console.log("23 is also a cool number");
// } else {
//     console.log("number is neither '7'(string) or 7(number)");
// }

// if (favNumber !== 23) console.log("why not 23?");


////////////////////////////////////////////

// 23. Boolean Logic

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense || hasGoodVision);
console.log(hasDriverLicense && hasGoodVision);
console.log(!hasDriverLicense);


// if (hasDriverLicense && hasGoodVision) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive");
// }

const isTired = false;
console.log(hasDriverLicense || hasGoodVision || isTired); // at least one needs to be true
console.log(hasDriverLicense && hasGoodVision && isTired); // all must be true


if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}
