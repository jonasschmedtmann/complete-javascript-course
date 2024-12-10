// Coding Challenge 1 

const johnHeight_m = 1.95;
const johnMass_kg = 92;

const markHeight_m = 1.69;
const markMass_kg = 78;

const john_BMI = (johnMass_kg / johnHeight_m ** 2).toFixed(1);

const mark_BMI = (markMass_kg / markHeight_m ** 2).toFixed(1);

let markHigherBMI = mark_BMI > john_BMI;

console.log(john_BMI, mark_BMI, markHigherBMI);

const johnHeight2_m = 1.95;
const johnMass2_kg = 92;

const markHeight2_m = 1.69;
const markMass2_kg = 78;

const john2_BMI = (johnMass2_kg / johnHeight2_m ** 2).toFixed(1);

const mark2_BMI = (markMass2_kg / markHeight2_m ** 2).toFixed(1);

markHigherBMI = mark2_BMI > john2_BMI;

console.log(john2_BMI, mark2_BMI, markHigherBMI);

//Coding challenge 2

if (markHigherBMI) {
    console.log(`Mark's BMI (${mark_BMI}) is higher than John's (${john_BMI})!`)
} else {
    console.log(`John's BMI (${john_BMI}) is higher than Marks's (${mark_BMI})!`)
} 

if (markHigherBMI) {
    console.log(`Mark's BMI (${mark2_BMI}) is higher than John's (${john2_BMI})!`)
} else {
    console.log(`John's BMI (${john2_BMI}) is higher than Marks's (${mark2_BMI})!`)
}

//coding challenge 3
const dolphinData1 = 96;
const dolphinData2 = 108;
const dolphinData3 = 89;
const koalaData1 = 88;
const koalaData2 = 91;
const koalaData3 = 110;

const dolphinAverage = (dolphinData1 + dolphinData2 + dolphinData3) / 3;
const koalaAverage = (koalaData1 + koalaData2 + koalaData3) / 3;

if (dolphinAverage > koalaAverage) {
    console.log('Dolphins win the trophy');
} else {
    console.log('Koalas win the trophy');
}

//coding challenge 4
const bill_$ = 275;

let tip = bill_$ >= 50 && bill_$ <= 300 ? (.15 * bill_$) : (.20 * bill_$);

console.log(`The bill was ${bill_$}, the tip was ${tip}, and the total value ${bill_$ + tip}`);