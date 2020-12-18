let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;

let johnBMI = johnMass / johnHeight ** 2;
console.log("la taille de John est " + johnHeight + "cm et son poids est " + johnMass + "kg. Son Body Mass Index est: " + johnBMI);
let markBMI = markMass / markHeight ** 2;
console.log("la taille de Mark est " + markHeight + "cm et son poids est " + markMass + "kg. Son Body Mass Index est: " + markBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markHeight = 1.88;
markMass = 95;
johnHeight = 1.76;
johnMass = 85;

console.log('-------------')

johnBMI = johnMass / johnHeight ** 2;
console.log("la taille de John est " + johnHeight + "cm et son poids est " + johnMass + "kg. Son Body Mass Index est: " + johnBMI);
markBMI = markMass / markHeight ** 2;
console.log("la taille de Mark est " + markHeight + "cm et son poids est " + markMass + "kg. Son Body Mass Index est: " + markBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);