var markBMI, johnBMI, markMass, johnMass, markHeight, johnHeight;
// Mark's Info
markMass = 130;
markHeight = 1.9;
markBMI = markMass / (markHeight * markHeight);
console.log("markBMI is " + markBMI);

// John's Info
johnMass = 140;
johnHeight = 2;
johnBMI = johnMass / (johnHeight * johnHeight);
console.log("johnBMI is " + johnBMI);

//
var isMarksGreater = markBMI >= johnBMI;
console.log(isMarksGreater);
console.log("Is Mark's BMI Greater Than John's? " + isMarksGreater);
