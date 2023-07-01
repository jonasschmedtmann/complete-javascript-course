const heightOfMark = 1.69,heightOfJohn = 1.95,weightOfMark = 78 , weightOfJohn = 92 ;

const BMIforMark = weightOfMark/(heightOfMark ** 2);
const BMIforJohn = weightOfJohn/(heightOfJohn * heightOfJohn);

const markHigherBMI = BMIforMark > BMIforJohn;

if(BMIforJohn > BMIforMark)
{
    console.log(`John's BMI (${BMIforJohn}) is higher than Mark's BMI (${BMIforMark})`);
}
else if (BMIforJohn < BMIforMark)
{
    console.log(`John's BMI (${BMIforJohn}) is lesser than Mark's BMI (${BMIforMark})`);
}
else
{
    console.log(`John's BMI (${BMIforJohn}) is equal than Mark's BMI (${BMIforMark})`);
}