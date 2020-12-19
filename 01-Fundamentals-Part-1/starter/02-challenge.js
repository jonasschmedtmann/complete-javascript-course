let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;

markHeight = 1.88;
markMass = 95;
johnHeight = 1.76;
johnMass = 85;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;
console.log(`Mark: ${markBMI}`, `john: ${johnBMI}`);

if (markBMI > johnBMI) {
	console.log(`💪🏻Mark's BMI is higher than John's.`);
} else {
	console.log(`💪🏿John's BMI is higher than Mark's.`);
}
