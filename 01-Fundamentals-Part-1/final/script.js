

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


//equality operators 
// 1 equality operator is an assignment operator
// 2 equal signs: loose comparison operator (doe not do type coercion)
// 3 equla signs: strict comparison operator (does not perform type coercion)

const adultAge = 18;
const sadultAge = '18';
if (adultAge == 18) 
console.log("she is an adult :A")

if (adultAge === 18) 
console.log("she is an adult :b")

if (sadultAge == 18) 
console.log("she is an adult :c")

if (sadultAge === 18) 
console.log("she is an adult :d")
// the one with d does not work because it involves strict comparions without type coercion

const favNumber = prompt("Input your fav number");
console.log(`This is your fav number: ${favNumber}`);


// Using the case control 

const day = prompt("Input the day: ")

switch (day){
    case 'Monday':
        console.log("Hate this day!!");
        break;
        case 'Tuesday':
            console.log("Eat eggs");
            break;
            case 'Wednesday':
                break;
                default:
                    console.log(`${day} is not a valid day!!`);
}

if (day === "Monday") {
    console.log(`Still hating ${day}`);
} else if (day == 'Tuesday' || day == 'Wednesday') {
    console.log( `Tuesday or Wednesday`)
} else if  (day == 'Tuesday' && day == 'Wednesday') {
    console.log( `Tuesday and Wednesday`);
}




// this conditional statement that carries the if statement is called a ternary  statement
let drinkAge = 12
drinkAge >= 18?
  console.log(`I like to drink wine`):
console.log(`I am under 18`);

