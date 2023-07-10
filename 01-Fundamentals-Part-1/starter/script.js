/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "jimmy";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "jm";
let $function = 27;

let myFirstJob = "Chemist";
let myCurrentJob = "Filterer";

console.log(myFirstJob);


let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthyear = 1991;
// birthyear = 1990;

// const job;

var job = "programmer";
job = "teacher";

// always DECLARE variables
// lastName = "schmedtmann"; 
console.log(lastName);
*/

// *Operators*

// math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2019;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2**3 means 2 to the power of 3 or 2*2*2

// const firstName = "jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10; //x = x + 10 = 25
// x *= 4; //x = x*4= 100
// x++; //x = x + 1
// x--; //x = x - 1
// x--;
// console.log(x);

// // comparision operators
// console.log(ageJonas > ageSarah); //>, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2019);

// *operator precedence*

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2019;
// console.log(now - 1991 > now - 2019);

// console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
// */

// const firstName = "jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(
//   `string with
// multiple
// lines`
// );

// const age = 15;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving");
// } else {
//   const yearsLeft = 19 - age;
//   console.log(`Sarah is too young. wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
// const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${bmimark}) is higher than John's!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's!`);
}
*/

// *Type conversion vs coercion*
// conversion is when we explicitly convert wheras coercion is automatic
// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// console.log(Number("jonas"));
// console.log(typeof NaN);

// console.log(String(23));
// // cannot convert to undefined or null
// // js does type coercion for us in many situations

// // type coercion
// console.log("I am " + 23 + " years old");
// // + operator triggers type coercion
// // many languages don't have type coercion
// console.log("23" - "10" - 3);
// // - operator does inverse coercion
// console.log("23" / "2");

// // + operator is the odd man out in terms of string vs number coercion
// let n = "1" + 1; //'11'
// n = n - 1; //10
// console.log(n);

// 5 falsy values: 0,'',undefined,null,NaN
// falsy values are not explicitly false but will become so when we attempt to convert them to a boolean

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// // boolean function is always implicit, you'll almost never use this function
// // when using logical operators
// // conversion of if / else statement

// const money = 10;
// if (money) {
//   console.log("Don't Spend it all");
// } else {
//   console.log("You should get a job");
// }

// let height = 0;
// if (height) {
//   console.log("yay height is defined");
// } else {
//   console.log("height is undefined");
// }

const age = 18;

if (age === 18) console.log("you just became an adult");
