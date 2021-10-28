
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



// // *****  Coding Challenge #4  *******

// // Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 
// // Your tasks: 
// //     1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!) 
// //     2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25” 
// //     Test data: § Data 1: Test for bill values 275, 40 and 430 
// // Hints: § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300 😉 GOOD LUCK 😀


// const bill_1 = 275;
// const bill_2 = 40;
// const bill_3 = 430;


// const discount_1 = ((50 <= bill_1 && bill_1 <= 300) ? 15 : 20);
// const tip_1 = bill_1 * (discount_1 / 100);
// console.log(`The bill was ${bill_1}, the tip was ${bill_1 * (tip_1 / 100)}, and the total value ${tip_1 + bill_1}`);

// const discount_2 = ((50 < bill_2 && bill_2 < 300) ? 15 : 20);
// const tip_2 = bill_2 * (discount_2 / 100);
// console.log(`The bill was ${bill_2}, the tip was ${bill_2 * (tip_2 / 100)}, and the total value ${tip_2 + bill_2}`);

// const discount_3 = ((50 < bill_3 && bill_3 < 300) ? 15 : 20);
// const tip_3 = bill_3 * (discount_3 / 100);
// console.log(`The bill was ${bill_3}, the tip was ${bill_3 * (tip_3 / 100)}, and the total value ${tip_3 + bill_3}`);



// // JavaScript Fundamentals – Part 2 
// // Coding Challenge #1 
// // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. 
// // Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team). 
// // A team only wins if it has at least double the average score of the other team.Otherwise, no team wins! 

// // Your tasks:
// // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// // 2. Use the function to calculate the average for both teams 
// //     3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.Example: "Koalas win (30 vs. 13)"
// // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// // 5. Ignore draws this time 
// //     Test data: 
// //         § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
// //         § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 Hints: 
// //         § To calculate average of 3 values, add them all together and divide by 3 
// //         § To check if number A is at least double number B, check for A >= 2 * B.Apply this to the team's average scores 
// // 😉 GOOD LUCK 😀


// const calcAverage = (FirstScore, SecondScore, ThirdScore) => (FirstScore + SecondScore + ThirdScore) / 3;

// const avScoreDolphins = calcAverage(85, 54, 41);
// const avScoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avScoreDolphins, avScoreKoalas) {
//     if (avScoreDolphins > 2 * avScoreKoalas) {
//         console.log(`Dolphins Win! (${avScoreDolphins} vs ${avScoreKoalas})`);
//     } else if (2 * avScoreDolphins < avScoreKoalas) {
//         console.log(`Koalas Win! (${avScoreKoalas} vs ${avScoreDolphins})`);
//     } else {
//         console.log("It's a draw!");
//     }
// }

// checkWinner(avScoreDolphins, avScoreKoalas);



// var minScore = false;
// var dolphinsWin = false;
// var koalasWin = false;



// Coding Challenge #2 
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. 
// Your tasks: 
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100 
// 2. And now let's use arrays! So create an array 'bills' containing the test data below 
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before 
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
// Test data: 125, 555 and 44 
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 
// 😉 GOOD LUCK 😀


// const bill_1 = 275;
// const bill_2 = 40;
// const bill_3 = 430;


// const discount_1 = ((50 <= bill_1 && bill_1 <= 300) ? 15 : 20);
// const tip_1 = bill_1 * (discount_1 / 100);
// console.log(`The bill was ${bill_1}, the tip was ${tip_1}, and the total value ${tip_1 + bill_1} `);

// const discount_2 = ((50 < bill_2 && bill_2 < 300) ? 15 : 20);
// const tip_2 = bill_2 * (discount_2 / 100);
// console.log(`The bill was ${bill_2}, the tip was ${tip_2}, and the total value ${tip_2 + bill_2} `);

// const discount_3 = ((50 < bill_3 && bill_3 < 300) ? 15 : 20);
// const tip_3 = bill_3 * (discount_3 / 100);
// console.log(`The bill was ${bill_3}, the tip was ${tip_3}, and the total value ${tip_3 + bill_3} `);


// const calcTip = (bill) => ((50 <= bill && bill <= 300) ? (bill * (0.15)) : (bill * (0.20)));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(total);


// Coding Challenge #3 
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter) 
// Your tasks: 
//     1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith) 
//     2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method 
//     3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
// GOOD LUCK 😀


//1

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than John's (${john.bmi})`)
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
}