

//using backticks in template laterals. 
//js takes no type annotations
// An if-else statement is called and if control structure 
 age = 14;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log(`Sara can drive`);
} else {
    console.log(`Sarah is too young to drive. Check in after ${18 - age} years`);
}

//input conversion and coercion. 
birthYear  ='1961';
console.log(Number(birthYear) + age);

//converts the birthyear only for that single instance 

//java scripts converts all values in control statements into boolean. The falsy values are 5:
// zero, empty string, undefined, null and NaN. 
// ALL OTHERS ARE TRUTHY VALUES 

const money = 0;
if (money){
    console.log("Spend it !!");
} else {
    console.log("Make Money");
}



