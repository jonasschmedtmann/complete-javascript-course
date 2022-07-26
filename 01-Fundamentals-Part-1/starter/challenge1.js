const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);
if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's! ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}
