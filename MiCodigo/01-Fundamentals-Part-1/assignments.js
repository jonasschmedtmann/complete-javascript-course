
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

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95

console.log(markMass, markHeight);
console.log(johnMass, johnHeight);

// 2

const markBmi = markMass / markHeight ** 2
const johnBmi = johnMass / johnHeight ** 2

console.log("Mar's BMI:" + markBmi);
console.log("John's BMI:" + johnBmi);

// 3


const markHigherBMI = markBmi > johnBmi

console.log(markHigherBMI);



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



