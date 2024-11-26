// let js = "amazing";
// console.log(40 + 8 + 23 - 10);


//let, const, var
// let age = 30;
// age = 31;
// const birthYear = 1991;
//birthYear = 1990;

//Basic operators
//Maths operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);//2 ** 3 means 2 raised to the power of 3

// const firstName = "Stephen";
// const lastName = "Ayo";
// console.log(firstName + " " + lastName);

//Assignment operatorss
// let x = 10 + 5;
// x += 10;//x = x + 10 = 25
// x*= 4;//x = x * 4 = 100
// x++;
// x--;
// console.log(x);

//Comparison operators
// console.log(ageJonas < ageSarah);
// console.log(ageSarah >= 18);


//Operator precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

//strings and template literals
// const firstName = "Stephen";
// const job = "teacher";
// const year = 2037;
// const birthYear = 1991;

// const stephen = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(stephen);

// console.log(`String with
// multiple
// lines`);


// if else statements
// const age = 15;
// if(age >= 18)  {
//     console.log("Sarah can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sorry, Sarah is to wait another ${yearsLeft} years`)
// }

// const birthYear = 1998;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21
// }
// console.log(century);


//Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log (Number(inputYear) + 18);

// console.log(String(23), 23);

// //Type coersion
// console.log("I am " + 21 + " years old");

// let n = "1" + 1; //'11'
// n = n - 1;
// console.log(n);


//Truthy and falsy values (0, '', undefined, null, NaN)
// console.log(Boolen(0));
// console.log(Boolen(undefined));
// console.log(Boolen("Jonas"));
// console.log(Boolen({}));

// const money = 200;
// if(money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log("Yay! Height is defined");
// } else {
//     console.log("Height is undefined");
// }


//Equality Operators
// const yourAge = 18;
// if ( yourAge === 18) console.log("You just became an adult");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log("Cool! 23 is an amazing number")
// } else if (favourite === 7) {
//     console.log("7 is also a cool number") 
// } else if (favourite === 9) {
//     console.log("9 is also a cool number")
// } else {
//     console.log("Number is not 23 or 7")
// }
// if (favourite !== 23) console.log("Why not 23");


//logical operators
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if( hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is aable to drive!")
// } else {
//     console.log("Someone else should drive...")
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if( hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is aable to drive!")
// } else {
//     console.log("Someone else should drive...")
// }


//The switch statement
// const day = "sunday"

// switch(day) {
//     case "monday": //day === "Monday"
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

// if(day === "monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if(day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend");
// } else {
//     console.log("Not a valid day!");
// }


//Statements and expressions
// 3 + 4
// 1991
// true && false && !false


//The conditional(ternary) operator
const age = 13;
age >= 18 ? console.log("I like to drink wine"): console.log("I like to drink water");

const drink = age >= 18 ? "wine" : 'water';
console.log(drink);

console.log(`I'd like to drink ${age >= 18 ? "wine" : 'water'}`);



