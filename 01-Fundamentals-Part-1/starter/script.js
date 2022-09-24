// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // const markHigherBMI = BMIMark > BMIJohn;

// // console.log(BMIMark, BMIJohn, markHigherBMI);

// // // const markMass = 78;
// // // const markHeight = 1.69;
// // // const johnMass = 92;
// // // const johnHeight = 1.95;

// // // const markBMI = markMass / markHeight ** 2;
// // // const johnBMI = johnMass / (johnHeight * johnHeight);

// // // const markHigherBMI = markBMI > johnBMI;

// // // console.log(markBMI, johnBMI, markHigherBMI);

// // // //#2

// // if (markBMI > johnBMI) {
// //   console.log(`Mark's BMI(${markBMI}) is highter than John's(${johnBMI})!`);
// // } else {
// //   console.log("John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!");
// // }

// const inputYear = "1991";
// console.log(inputYear);
// console.log(typeof imputYear);
// console.log(typeof NaN);
// console.log(Number(inputYear), inputYear);
// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("I am " + String(23) + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// // 5 false vakue: 0, '', undefined, null, NaN

// // const money = 100;
// // if (money) {
// //   console.log("Don't spend it all;");
// // } else {
// //   console.log("you should get a job!");
// // }

// // let height = 0;
// // if (height) {
// //   console.log("Yay! height is defined!");
// // } else {
// //   console.log("height is undefined!");
// // }

// // const age = 18;
// // if (age === 18) console.log("you just became an adult:D");

// // const favourite = Number(prompt("please input your favourite number"));

// // if (favourite !== 23) console.log("why not 23?");

// const hasDriversLicense = true;
// const hasGoodvision = true;

// console.log(hasDriversLicense && hasGoodvision);
// console.log(hasDriversLicense || hasGoodvision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodvision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("someone else should drive...");
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodvision && isTired);

// if (hasDriversLicense && hasGoodvision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("someone else should drive...");
// }

// /*
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀
// */

// const dolphin = [96, 108, 89];
// const koalas = [88, 91, 110];

// const aveDolphins = (97 + 112 + 81) / 3;
// const aveKoala = (109 + 95 + 85) / 3;
// console.log(aveDolphins, aveKoala);

// // if (aveDolphins > aveKoala) {
// //   console.log("team dophin wins a trophy!");
// // } else if (aveKoala > aveDolphins) {
// //   console.log("team koala wins a trophy!");
// // } else {
// //   ("2 teams have the same average score");
// // }

// if (aveDolphins >= 100 && aveDolphins > aveKoala) {
//   console.log("team dophin wins a trophy!");
// } else if (aveKoala >= 100 && aveKoala > aveDolphins) {
//   console.log("team koala wins a trophy!");
// } else if (aveKoala >= 100 && aveKoala === aveDolphins && aveDolphins >= 100) {
//   console.log("2 teams have the same average score");
// } else {
//   console.log("no one wins the trophy! 😭");
// }

// const day = "bad";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log(" prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//   case "friday":
//     console.log("record videos");
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend 😉");
//     break;
//   default:
//     console.log("not a valid day!");
// }

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log(" prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend 😉");
// } else {
//   console.log("not a valid day!");
// }

// ternary operater
// const age = 18;
// console.log(`I like to drink ${age >= 18 ? "wine 👟" : "water🧣"}`);

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
 
GOOD LUCK 😀
*/

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `he bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `
);
