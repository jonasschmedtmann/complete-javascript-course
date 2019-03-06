var markMass = 85;
var markHeight = 1.75;
var johnMass = 95;
var johnHeight = 2.05;

var markBMI = markMass / (markHeight*markHeight);
var johnBMI = johnMass / (johnHeight*johnHeight);

var higherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's BMI? " + higherBMI);