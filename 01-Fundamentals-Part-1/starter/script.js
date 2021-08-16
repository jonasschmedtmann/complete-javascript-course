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


//**Operators */
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


//*********************************************************************************** */
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
console.log(heigherBMI);