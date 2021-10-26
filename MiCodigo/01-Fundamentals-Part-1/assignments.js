
// let country = 'Spain'
// let continent = 'Europe'
// let population = 47450795

// console.log(country)
// console.log(continent)
// console.log(population)




// JavaScript Fundamentals – Part 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
//     BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 

// Your tasks: 
//     1. Store Mark's and John's mass and height in variables 
//     2. Calculate both their BMIs using the formula (you can even implement both versions) 
//     3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

// Test data: 
//     § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
//     § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.





//DATA 1
// 1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95

// console.log(markMass, markHeight);
// console.log(johnMass, johnHeight);

// // 2

// const markBmi = markMass / markHeight ** 2
// const johnBmi = johnMass / johnHeight ** 2

// console.log("Mar's BMI:" + markBmi);
// console.log("John's BMI:" + johnBmi);

// // 3


// const markHigherBMI = markBmi > johnBmi

// console.log(markHigherBMI);



//DATA 2
// 1

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

// console.log(markMass, markHeight);
// console.log(johnMass, johnHeight);

// // 2

// const markBmi = markMass / markHeight ** 2
// const johnBmi = johnMass / johnHeight ** 2

// console.log("Mar's BMI:" + markBmi);
// console.log("John's BMI:" + johnBmi);

// // 3


// markHigherBMI = markBmi > johnBmi

// console.log(markHigherBMI);





//******* */ Coding Challenge #2  ********
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 
// Your tasks: 
//     1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
//     2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 

//     Hint: Use an if/else statement 😉 GOOD LUCK 😀


// // 1 & 2
// if (markBmi > johnBmi) {
//     console.log("Mark's BMI is higher than John's")
//     console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`)
// } else {
//     console.log("John's BMI is higher than John's")
// }




// ********  Coding Challenge #3 ********

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! 

// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 
// Test data: 
//     § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
//     § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
//     § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 

// const dolphinsFirstScore = 96;
// const dolphinsSecondScore = 108;
// const dolphinsThirdScore = 89;
// const koalasFirstScore = 88;
// const koalasSecondScore = 91;
// const koalasThirdScore = 110;

// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 101;
// const koalasFirstScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 123;

// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 101;
// const koalasFirstScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 106;

// const avScoreDolphins = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
// const avScoreKoalas = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

// var minScore = false;
// var dolphinsWin = false;
// var koalasWin = false;

// 1
// if (avScoreDolphins > avScoreKoalas) {
//     console.log('Dolphins Win!');
// } else if (avScoreDolphins < avScoreKoalas) {
//     console.log('Koalas Win!');
// } else {
//     console.log("It's a draw!");
// }


// 2
// if ((avScoreDolphins > avScoreKoalas) && (avScoreDolphins >= 100)) {
//     console.log('Dolphins Win with requirement!');
//     dolphinsWin = true;
// } else if ((avScoreDolphins < avScoreKoalas) && (avScoreKoalas >= 100)) {
//     console.log('Koalas Win with requirement!');
//     koalasWin = true;
// } else if ((avScoreDolphins === avScoreKoalas) && (avScoreKoalas >= 100) && (avScoreDolphins >= 100)) {
//     console.log("It's a draw!");
// } else {
//     console.log("Nobody wins");
// }       



// *****  Coding Challenge #4  *******

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 
// Your tasks: 
//     1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!) 
//     2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25” 
//     Test data: § Data 1: Test for bill values 275, 40 and 430 
// Hints: § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300 😉 GOOD LUCK 😀


const bill_1 = 275;
const bill_2 = 40;
const bill_3 = 430;


const discount_1 = ((50 <= bill_1 && bill_1 <= 300) ? 15 : 20);
const tip_1 = bill_1 * (discount_1 / 100);
console.log(`The bill was ${bill_1}, the tip was ${bill_1 * (tip_1 / 100)}, and the total value ${tip_1 + bill_1}`);

const discount_2 = ((50 < bill_2 && bill_2 < 300) ? 15 : 20);
const tip_2 = bill_2 * (discount_2 / 100);
console.log(`The bill was ${bill_2}, the tip was ${bill_2 * (tip_2 / 100)}, and the total value ${tip_2 + bill_2}`);

const discount_3 = ((50 < bill_3 && bill_3 < 300) ? 15 : 20);
const tip_3 = bill_3 * (discount_3 / 100);
console.log(`The bill was ${bill_3}, the tip was ${bill_3 * (tip_3 / 100)}, and the total value ${tip_3 + bill_3}`);