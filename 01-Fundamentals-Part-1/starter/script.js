/*
// problem 1 (❁´◡`❁) solution
const mark = { height: 1.69, weight: 78 };
const john = { height: 1.95, weight: 92 };

console.log(mark.height);

function caluclateBMI(mass, height) {
  return (bmi = mass / height ** 2);
}

const markbmi = caluclateBMI(mark.height, mark.weight);
const johnbmi = caluclateBMI(john.height, john.weight);

if (markbmi > johnbmi) {
  console.log(`marks bmi( ${markbmi} ) is more than john bmi( ${johnbmi} )`);
} else {
  console.log(`john bmi is more than mark bmi`);
}

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + Number(inputYear));
console.log(typeof NaN);

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "10");
console.log("23" > "44");

if (11 == "11") console.log(`well well well`);
if (15 === "15") console.log(`no no nooo`);

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) console.log("cool! 23 us a cool number");

//challenge 3

const dolp = (94 + 108 + 89) / 3;
const koal = (88 + 91 + 110) / 3;

if (dolp > koal) {
  console.log(`dolphs win by ${dolp - koal}`);
} else console.log(`koals win by ${koal - dolp}`);

const day = "TUESDAY";

switch (day) {
  case "monday":
    console.log("according to plan");
    break;
  case "tuesday".toUpperCase():
    console.log("strict equality");
    break;
}

//ternary operation
const age = 20;
age <= 12
  ? console.log(`I am too young, only ${age}`)
  : console.log(`I am old ${age}`);

*/
let bill = [275, 40, 430];

bill.forEach((element) => {
  element > 50 && element < 300
    ? console.log(element * 1.15)
    : console.log(element * 1.2);
});
