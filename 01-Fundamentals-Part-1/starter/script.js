// creates a string variable "js" and assigns it the value "amazing"
// let js = "amazing";

// if statement to check the value of "js" and displays an alert on the web browser
// if (js === "amazing") alert("JavaScript is FUN!");

// simple addition variable. Logs the sum to the console
// console.log(41 + 700 - 85 + 35);



// Js Fundamentals Part 1
// Coding Challenge 1

// Data1
// const markMass1 = 78;
// const markHeight1 = 1.69;
// const johnMass1 = 92;
// const johnHeight1 = 1.95;

// const markBMI1 = markMass1 / markHeight1 ** 2;
// const johnBMI1 = johnMass1 / johnHeight1 ** 2;

// const markHigherBMI1 = markBMI1 > johnBMI1;

// console.log(markHigherBMI1);


// Data2
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

// Coding Challenge 2

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// let num = "1999";
// console.log(typeof num, num);
// let numN = Number(num);
// console.log(typeof numN, numN);

// Coding Challenge 3
console.log(`Result for Code Challenge 3 starts here...`);

// Data 1

const scoreDolphins1 = (96 + 108 + 89) / 3;
const scoreKoalas1 = (88 + 91 + 110) / 3;
console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1) {
    console.log(`Team Dolphins is the winner with an average score of ${scoreDolphins1}`);
} else if (scoreDolphins1 < scoreKoalas1) {
    console.log(`Team Koalas is the winner with an average score of ${scoreKoalas1}`);
} else if (scoreDolphins1 === scoreKoalas1) {
    console.log(`It was a draw!`);
} else {
    console.log(`No one won....`);
}

// Data Bonus 1

const scoreDolphinsBns1 = (97 + 112 + 101) / 3;
const scoreKoalasBns1 = (109 + 95 + 123) / 3;
console.log(scoreDolphinsBns1, scoreKoalasBns1);

const dolphinsScoreHigher = scoreDolphinsBns1 > scoreKoalasBns1;
const koalasScoreHigher = scoreKoalasBns1 > scoreDolphinsBns1;
const dolphinsMinimum = scoreDolphinsBns1 >= 100;
const koalasMinimum = scoreKoalasBns1 >= 100;

// if (dolphinsScoreHigher && scoreDolphinsBns1 >= 100) {
//     console.log(`Bonus 1: Team Dolphins wins!!!`);
// } else if (scoreDolphinsBns1 >= 100) {
//     console.log(`Bonus 1: Team Dolphins scored a minimum of 100 but are not the winners...`);
// } else if (dolphinsScoreHigher) {
//     console.log(`Bonus 1: Team Dolphins scored higher than team Koalas but didn't meet minimum sccore...`);
// } else if (koalasScoreHigher && scoreKoalasBns1 >= 100) {
//     console.log(`Bonus 1: Team Koalas wins!!!`);
// } else if (scoreKoalasBns1 >= 100) {
//     console.log(`Bonus 1: Team Koalas scored a minimum of 100 but are not the winners...`);
// } else if (koalasScoreHigher) {
//     console.log(`Bonus 1: Team Koalas scored higher than team Dolphins but didn't meet minimum sccore...`);
// }

if (dolphinsScoreHigher && dolphinsMinimum) {
    console.log(`Bonus 1: Team Dolphins Win!!!`);
} else if (koalasScoreHigher && koalasMinimum) {
    console.log(`Bonus 1: Team Koalas Win!!!`);
}

// Data Bonus 2

const scoreDolphinsBns2 = (97 + 112 + 101) / 3;
const scoreKoalasBns2 = (109 + 95 + 106) / 3;
console.log(scoreDolphinsBns2, scoreKoalasBns2);

const dolphinsScoreHigher2 = scoreDolphinsBns2 > scoreKoalasBns2;
const koalasScoreHigher2 = scoreKoalasBns2 > scoreDolphinsBns2;
const dolphinsMinimum2 = scoreDolphinsBns2 >= 100;
const koalasMinimum2 = scoreKoalasBns2 >= 100;
const bothEqual = scoreDolphinsBns2 === scoreKoalasBns2;

if (dolphinsScoreHigher2 && dolphinsMinimum2) {
    console.log(`Bonus 2: Team Dolphins Win!!!`);
} else if (koalasScoreHigher2 && koalasMinimum2) {
    console.log(`Bonus 2: Team Koalas Win!!!`);
} else if (dolphinsMinimum2 && koalasMinimum2 && bothEqual) {
    console.log(`Bonus 2: It's a draw!!!`);
}

// Switch statements practice

const day = "sundy";

// switch

switch (day) {
    case "monday":
        console.log("today is Monday");
        break;
    case "tuesday":
        console.log("today is Tuesday");
        break;
    case "wednesday":
    case "thursday":
        console.log("today is a mid-week day");
        break;
    case "friday":
        console.log("today is friday");
        break;
    case "saturday":
    case "sunday":
        console.log("today is a weekend day");
        break;
    default:
        console.log("Not a valid day of the week!");
        break;
}

// if

if (day === "monday") {
    console.log("today is Monday");
} else if (day === "tuesday") {
    console.log("today is Tuesday");
} else if (day === "wednesday" || day === "thursday") {
    console.log("today is a mid-week day");
} else if (day === "friday") {
    console.log("today is Friday");
} else if (day === "saturday" || day === "sunday") {
    console.log("today is a weekend day");
} else {
    console.log("Not a valid day of the week!");
}

// Coding Challenge 4
console.log(`Result for Code Challenge 4 starts here...`);

const bill = 40;
let tip;

// The COnditional Ternary Operator

bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.20 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
