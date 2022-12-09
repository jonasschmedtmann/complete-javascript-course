


/* --------------------------------------Defining Vars ------------------------------------------------------------------
let country = 'Canada';
let continent = 'North America';
let population = '38.25 million';

console.log(country);
console.log(population);


---------------------------------------if else logic statements ------------------------------------------------------------
const age = 7;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Nate can strat driving 😁`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Nate is not old enought to drive, Nate has ${yearsLeft} to wait until he can command a vehicle.`)
}

let century;
const birthYear = 2015;
if (birthYear <= 2000) {
    century = 20
}
else {
    century = 21
}

console.log(century)

/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is da bomb");

40 + 8 + 23 - 10;



------------------------------------------------------- variable types ----------------------------------------------------
let JavaScriptIsFun = true;
console.log(typeof JavaScriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log("Jonas");

let age = 31;
const birthyear = 1972;
console.log(birthyear);
// birthyear = 1973;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
*/


// ---------------------------- template literals ----------------------------------------------------
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);|


// ------------------------------------- falsy values ----------------------------------------------------

// 5 falsy values 0, "", undefined, null, NaN -

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Brad'));
// console.log(Boolean({}));
// console.log(Boolean(''));
//


// ---------------------------------------------------- equality operators ------------------------------------

// const age = 18;

// if (age === 18) console.log("You just became an adult strict equality operator ===");

// if (age == 18) console.log("You just became an adult - loose equality operator ==");

// const favoriteNumber = Number(prompt("What is your favorite number?"));
// console.log(typeof (favoriteNumber));

// if (favoriteNumber === 8) {
//     console.log("Amazebals!")
// } else if (favoriteNumber === 7) {
//     console.log("I like the numbe 7 as well");
// } else {
//     console.log("Not a very popular choice, sorry");
// }

// if (favoriteNumber !== 8) console.log("Why not 8?");



// ---------------------------------------------------- switch statements ------------------------------------

//const day = "Monday";

// switch (day) { // eqiv of a strict equality operator ===
//     case "Monday":
//         console.log("Standing Poses");
//         break;

//     case "Tuesday":
//         console.log("Backbending Poses");
//         break;

//     case "Wednesday":
//     case "Thursday":
//         console.log("Twisting Poses");
//         break;

//     case "Friday":
//         console.log("Seated Poses");
//         break;

//     case "Saturday":
//     case "Sunday":
//         console.log("Have a great weekend!");
//         break;

//     default:
//         console.log("Not a valid day.");
// }

// write the above logic with an if else statement

const day = "Friday";

if (day === "Monday") {
    console.log("Standing Poses");

} else if (day === "Tuesday") {
    console.log("Backbending Poses");

} else if (day === "Wednesday" || day === "Thursday") {
    console.log("Twisting Poses and Inversions");

} else if (day === "Friday") {
    console.log("Seated Poses");

} else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy your weekend!");

} else {
    console.log("Not a valid day sir.");
} 