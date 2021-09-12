/* -------------------------------------------------------------------------- */
/*                        Type Conversion and Coercion                        */
/*

1️⃣ Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

2️⃣ Execute the operations to check if you were

*/
/* -------------------------------------------------------------------------- */

// 1.) '9' - '5'
// ✅ I predict that the JS engine will convert these strings to their integer values. They're basic, non-negative, whole numbers, so the result should be 4. 

console.log('1', '9' - '5'); // -> 4 ✅

// 2.) '19' - '13' + '17' 
// ❌ As above, I think the strings will be converted to their integer value, and following order of operations we'll receive -11 
// Being a negative return makes me suspicious though... 🤔

console.log('2', '19' - '13' + '17'); // -> 617 ❌
//? What goes on here to lead to this result? 
console.log('2a.', '13' + '17'); // -> Addition goes first. PEMDAS. // -> 1317 - definitely not what I expect. Concatenates the strings.
//? Why are these string not coerced to integers? 
// I suspect it's because the addition is seen as an attempt to concatenate here, not necessarily add. Add TO, not add UP. 
console.log('2b.', '19' - 1317); // -> -1298 Not even the original answer, so were order of operations followed? 
console.log('2c.', '19' - '13'); // -> 6 // -> So the engine did perform this operation by converting the strings to numbers 
console.log('2d.', 6 + '17'); // -> 617 // -> First the operation was performed on converted strings, the result was then converted to string again and concatenated onto the string '17'


// 3.) '19' - '13' + 17 
// ✅ Based on the results of the last problem, I think the result will be the result of 6 + 17, 23 
console.log('3', '19' - '13' + 17); // -> 23 ✅
// It doesn't follow the correct order of operations, this must be interrupted in some way by the interpreter placing precedence on converting the strings to integers 

// 4.) '123' < 57
// ✅ Because we're comparing by value, I think the interpreter will convert the string to the whole number 123 - which is larger than 57. False. 
console.log('4', '123' < 57); // -> false ✅

// 5.) 5 + 6 + '4' + 9 - 4 - 2
// ❌ This one is interesting. Based on the problems up to this point I think that '4' will be added to 9 (converted to '9') for 49 - making the problem: 5 + 6 + 49 - 4 - 2, for 54 
console.log('5', 5 + 6 + '4' + 9 - 4 - 2); // -> 1143 ❌
//? So how did we get this result? 
console.log('5a.', 5 + 6 + '4'); // -> 114 - the concatenation happens earlier than I thought it would
console.log('5b.', 5 + 6 + '4' + 9); // -> 1149 - Concatenation happens on *both* sides! 
console.log('5c.', 1149 - 4 -2); // -> 1143

/* -------------------------- Coding Challenge # 1 -------------------------- */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � 
*/

const massMark = 78; 
const heightMark = 1.69; 
const massJohn = 92; 
const heightJohn = 1.95; 

const BMImark = massMark / heightMark ** 2; 
const BMIjohn = massJohn / massJohn ** 2; 
const markHigherBMI = BMImark > BMIjohn; 
console.log(markHigherBMI); 
