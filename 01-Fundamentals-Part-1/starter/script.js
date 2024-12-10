const firstName = "Jonas";
const job="teacher";
const birthyear=1991;
const year=2037;
const jonas = "I'm " + firstName + ',a ' + (year-birthyear) +' years old ' +job
//template literals
const jonasNew = `I'm ${firstName}, 
a ${year-birthyear} 
years old ${job}`
console.log(jonas);
console.log(jonasNew);
//decisions 
const age=15;
const isOldEnough=age>=18; //if the age is 18 or older then it is true
isOldEnough ? console.log("Sarah can start driving license 🚗") : console.log(`Sarah is too young. Wait another ${18 - age} years :)`);
const birthYear=1991;
let century;
century = birthYear <= 2000 ? 20 : 21;
console.log(century)
//type conversion 