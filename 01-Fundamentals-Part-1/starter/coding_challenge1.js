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
