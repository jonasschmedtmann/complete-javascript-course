// Coding Challenge 1 

const johnHeight_m = 1.95;
const johnMass_kg = 92;

const markHeight_m = 1.69;
const markMass_kg = 78;

const john_BMI = johnMass_kg / johnHeight_m ** 2;

const mark_BMI = markMass_kg / markHeight_m ** 2;

let markHigherBMI = mark_BMI > john_BMI;

if (markHigherBMI) {
    console.log(`Mark's BMI (${mark_BMI}) is higher than John's (${john_BMI})!`)
} else {
    console.log(`John's BMI (${john_BMI}) is higher than Marks's (${mark_BMI})!`)
}

const johnHeight2_m = 1.95;
const johnMass2_kg = 92;

const markHeight2_m = 1.69;
const markMass2_kg = 78;

const john2_BMI = johnMass2_kg / johnHeight2_m ** 2;

const mark2_BMI = markMass2_kg / markHeight2_m ** 2;

markHigherBMI = mark2_BMI > john2_BMI;
