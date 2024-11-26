alert("Coding challenge 1")
let markHeight = 1.69
let markWeight = 78
let johnHeight = 1.95
let johnWeight = 92

let bmiMark; 
bmiMark = markWeight / markHeight ** 2
let bmiJohn;
bmiJohn = johnWeight / johnHeight **2

console.log("Data 1")
console.log("BMI Of Mark is ",bmiMark)
console.log("BMI Of John is : ",bmiJohn)

markHeight = 1.88
markWeight = 95
johnHeight = 1.76
johnWeight = 85

bmiMark = markWeight / markHeight ** 2
bmiJohn = johnWeight / johnHeight **2

console.log("Data 2")
console.log("BMI Of Mark is ",bmiMark)
console.log("BMI Of John is : ",bmiJohn)

alert("End of coding challenge 1 ")

alert("Coding challange 2 started")

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
if (BMIMark >BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

alert("End of coding challange 2")
alert("Start of coding challange 3")
const d1 = 96;
const d2 = 108;
const d3 = 89;
const k1 = 88;
const k2 = 91;
const k3 = 110;

const scoreDolphins = (d1+d2+d3) / 3
console.log(scoreDolphins)
const scoreKoalas  = (d1+d2+d3) / 3
console.log(scoreKoalas)

if(scoreKoalas>scoreDolphins){
    console.log("Koalas win the trophy")
}else if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy")
}else{
    console.log("Both win the trophy")
}

alert("Coding challange 4 started")
/* CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.*/

const bill = Number(prompt("enter the bill amount to view the Tip and the total bill💵"))
let tip_per=0;

bill < 300 && bill > 50 ? tip_per = 15 : tip_per = 20

let tip =  (bill * (tip_per/100))
let str = `The bill💵 was ${bill}, the tip💁‍♀️ was ${tip}, and the total value ${bill+tip}`
console.log(str)
alert(str)