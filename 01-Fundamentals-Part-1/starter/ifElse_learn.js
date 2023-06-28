alert("iF-ELSE- starting")
const legalDriveAge = 18;
let age1 = Number(prompt("enter age to check driving eligibility"));

const isLegal = age1 >= legalDriveAge;

if (isLegal){
    alert("User is eligible for driving ✔🚗 ");
}
else if (age1<5){
    alert("You can drive a tricycle 😊")
}else{    
    alert(`User is not🚫 yet eligible for driving . \nStill ${legalDriveAge - age1} years are left to start driving`); 
}