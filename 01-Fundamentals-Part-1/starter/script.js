/*
multi-line
comments

let age = 23; //number
let firstName = "Jason"; //string
let fullAge = true; //boolean
let children; //undefined - empty value
// single-line comment


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);
console.log(year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multple
lines`);



const age = 19;

if (age >= 18) {
  console.log("Sarah can start driving license!");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is not old enough: ${yearsLeft}`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Century is ${century}`);



//type conversion
const inputYear = "1991";
console.log(inputYear, Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); // NaN - Not a Number

console.log(String(23), 23);

// type coercion
console.log("I am" + 23 + " years old"); //converts 23 to string
console.log("23" - "10" - 3); // converts strings to numbers
console.log("23" * "2"); // converts strings to number
console.log("23" + "17"); //does not convert strings to numbers!!

const favorite = prompt("What's your favorite number");
console.log(favorite, typeof favorite);


const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend");
} else {
  console.log("not a valid day");
}
*/
