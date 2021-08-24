/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Khadar");
console.log(23)
let Year = 3;

let Java = true;
console.log(typeof Java);
*/


//**let const and var */
/*let and const are introduced in ES6 

let is function...
const block ....




let age = 30;
age = 31;

const birthYear = 1991;


lastName = "Dagal";
let firstDigit = lastName[0];
console.log(firstDigit);
console.log(lastName.toUpperCase(0))
*/

/*
//Operators 
const now = 2021;
const ageAli = now - 1991;
const ageSarah = now - 1985;

const powerOfTwo = 2 ** 3;
console.log(powerOfTwo);
let x = 20;
x += 10;
console.log(x, ageAli < ageSarah);
console.log(now - 1991 < now - 2015);
let a, y;

console.log(a, y);

const averageAge = (ageAli + ageSarah) / 2;
console.log(ageAli, ageSarah, averageAge);

*/
//-----------------------
// exercises
//quetions 1
let markHeight = 1.69,
    markWeight = 78;
let johnHeight = 1.95,
    johnWeight = 92;

//question 2
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

// question 3

const heigherBMI = markBMI > johnBMI;
console.log(markBMI.toFixed(2), johnBMI.toFixed(2));
console.log(heigherBMI)

if (markBMI > johnBMI) {
    console.log(`Mark BMI is higher the John BMI`);
} else {
    console.log(`John BMI is higher then Mark BMI`);
}
//--------------------------------------------------------------------------
//-=------- String and Template Literals-------
/*
// Templete Literals


const firstName = "Khadar";
const birthYear = 1991;
const job = "Software Engeneer and Accountant";
const year = 2037;

const tempLiterals = `
            I 'm ${firstName}, a ${year - birthYear} years old ${job}`;
            console.log(tempLiterals); console.log("string with \n\
multiple \n\
lines");

            console.log(`sdlkfsdf
sldkjsdlfkj
slkjsdlfkj`); *
            /

            //----------- If statements--------------
            /*const age = 1;


            if (age >= 18) {
                console.log("Khadar can start driving Licese ");
            } else {
                const yearLeft = 18 - age;
                console.log(`Khadar is young. wait another ${yearLeft} years`);
            }
            */


const birthYear = 2017;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//------Conversion and coersion---------

//type conversion is when you converty data type manually.
// coersion is when JavaScript converts behind the seen, implicitly completely hidden from us.
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

// falsy values 0,'',unfined, null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''), Boolean('John'));
console.log(Boolean({}));
const money = 0;
if (money) {
    console.log('Don use it all ;)')
} else {
    console.log('do you get it');
}

//-----prompt------

const postCode = number(prompt(`Halkan ku qorn magacaaga`));
console.log(postCode);
console.log(typeof postCode);

if (postCode === 55) {
    console.log('Greate!, now you need to inder you name')
};