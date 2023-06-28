alert("iF-ELSE- starting")
const legalDriveAge = 18;
let age1 = 14;

const isLegal = age1 >= legalDriveAge;

if (isLegal){
    console.log("User is eligible for driving ✔🚗 ")
}
else{
    console.log(`User is not🚫 yet eligible for driving . \nStill ${legalDriveAge - age1} years are left to start driving`)
}