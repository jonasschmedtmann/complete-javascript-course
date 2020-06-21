/**
 * 
 * CODING CHALLENGE 1
 * 
 *
 */

/** 
 *  Mark and John are trying to compare their BMI (Body Mass Index), 
 *  which is calculated using the formula: 
 * 
 *  BMI = mass / height^2 = mass / (height * height). 
 *  (Mass in kg and height in meter)
 * 
 *  1. Store Mark's and John's mass and height in variables.
 * 
 *  2. Calculate both their BMIs. 
 * 
 *  3. Create a boolean variable containing information about whether Mark has a higher
 *     BMI than John. 
 * 
 *  4. Print a string to the console containing the variable from step 3. 
 *      (Something like "Is Mark's BMI higher than John's? true").
 *  
 */

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

 var markHigherBMI = markBMI > johnBMI;
 console.log("Is Mark's BMI higher than John's? Answer: " + markHigherBMI);


