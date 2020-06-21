var firstName = 'John';
var civilStatus = 'married';

var isMarried = false; 
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}; 

// 
// 

var mass, height, isMarksBMIHigher;
massLbs = 200; // in Lbs
heightIn = 72; // in Inches

var marksMass = massLbs - 40; // 160 lbs
var marksHeight = heightIn - 2; // 5'10"
var markBMI = marksMass / (marksHeight * marksHeight); 
console.log(markBMI * 1000); // 32.65

var johnMass = massLbs - 20; // 180 lbs
var johnsHeight = heightIn + 2; // 6'2"
var johnBMI = johnMass / (johnsHeight * johnsHeight);
console.log(johnBMI * 1000); // 32.87

if (markBMI > johnBMI) {
    console.log("Mark\s' BMI is higher than John\'s.");
} else {
    console.log("John\'s BMI is higher than Mark\'s.");
}

// var markHigherBMI = markBMI > johnBMI;
// console.log("Is Mark's BMI higher than John's? Answer: " + markHigherBMI);


