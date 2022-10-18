// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter). 
// Your tasks: 
// 1. Store Mark's and John's mass and height in variables 
const getBMI = (weight, height) => {
    return weight/(height * height);
}

let markBMI = getBMI(78,1.69);
let johnBMI = getBMI(92,1.95);

let markHigherBMI = markBMI > johnBMI ? "Mark's BMI is higher than John's" : "John's BMI is higher than Mark's";

console.log("Mark: "+markBMI);
console.log("John: "+johnBMI);
console.log(markHigherBMI);

// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John. 
// Test data: 
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall. 
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
