// --------------------------
//     CODING CHALLENGE NUMBER 1
// --------------------------
//     Mark and John are trying to compare their BMI(Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height)(mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula(you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

//calculate through either method here - BMI = mass / height ** 2 = mass / (height * height);

let marksBMI;
let JohnsBMI;
let markHasHigherBMI = true;

// 1st data for John and Mark
// let marksMass = 78;
// let marksHeight = 1.69;
// let johnsMass = 92;
// let johnsHeight = 1.95;

// 2nd data for John and Mark
let marksMass = 95;
let marksHeight = 1.88;
let johnsMass = 85;
let johnsHeight = 1.76;

console.log(marksBMI = marksMass / marksHeight ** 2);
console.log(JohnsBMI = johnsMass / johnsHeight ** 2);
markHasHigherBMI = marksBMI >= JohnsBMI;


console.log("Marks BMI is", " ", marksBMI);
console.log("Johns BMI is", " ", JohnsBMI);
console.log("Marks BMI is", markHasHigherBMI);
