const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
//console.log(BMIMark, BMIJohn);

if (BMIJohn > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}