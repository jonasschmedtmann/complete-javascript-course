/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).*/



//Store Mark's and John's mass and height in variables
// let johnMass = 92;
// let johnHeight = 1.95;

// let markMass = 78;
// let markHeight = 1.69;

let johnMass = 85;
let johnHeight = 1.76;

let markMass = 95;
let markHeight = 1.88;


//Calculate both their BMIs using the formula (you can even implement both versions)
let johnBMI = johnMass / johnHeight ** 2;
let markBMI = markMass / (markHeight * markHeight);

console.log(johnBMI);
console.log(markBMI);
//Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
//§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`)
}
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}

let number = 5 + 6 + '4' + 9 - 4 - 2
console.log(number);