//const marksWeight = 78, marksHeight = 1.69;
//const johnWeight = 92, johnHeight = 1.95;

const marksWeight = 95, marksHeight = 1.88;
const johnWeight = 85, johnHeight = 1.76;

const markBMI = marksWeight / marksHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = (markBMI > johnBMI);

console.log(markBMI, johnBMI, markHigherBMI);