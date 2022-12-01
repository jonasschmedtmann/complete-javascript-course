
/*
let country = 'Canada';
let continent = 'North America';
let population = '38.25 million';

console.log(country);
console.log(population);

--------------------------
CODING CHALLENGE NUMBER 1
--------------------------
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

//calculate through either method here - BMI = mass / height ** 2 = mass / (height * height);

let marksBMI;
let JohnsBMI;
let markHasHigherBMI = true;

// 1st data for John and Mark
let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;

// 2nd data for John and Mark
let marksMass = 95;
let marksHeight = 1.88;
let johnsMass = 85;
let johnsHeight = 1.76;

console.log(marksBMI = marksMass / marksHeight ** 2);
console.log(JohnsBMI = johnsMass / johnsHeight ** 2);
markHasHigherBMI = marksBMI >= JohnsBMI;


console.log("Marks BMI is", " ", marksBMI);
console.log("Johns BMI is", " ", JohnsBMI);
console.log("Marks BMI is", markHasHigherBMI);

console.log(`This is a string
on
multiple
lines`)


// ------------------------------if else statements
const age = 7;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Nate can strat driving 😁`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Nate is not old enought to drive, Nate has ${yearsLeft} to wait until he can command a vehicle.`)
}

let century;
const birthYear = 2015;
if (birthYear <= 2000) {
    century = 20
}
else {
    century = 21
}

console.log(century)



// ---------------------------- template literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);
*/

//--------------------------
//CODING CHALLENGE NUMBER 2
//--------------------------

// calculate through either method here - BMI = mass / height ** 2 = mass / (height * height); and use a template string to print a nice sentnece expressing the results
/*
let marksBMI;
let johnsBMI;
let markHasHigherBMI = true;

// 1st data for John and Mark

let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;
*/

/* 2nd data for John and Mark
let marksMass = 95;
let marksHeight = 1.88;
let johnsMass = 85;
let johnsHeight = 1.76;


console.log(marksBMI = marksMass / marksHeight ** 2);
console.log(johnsBMI = johnsMass / johnsHeight ** 2);
markHasHigherBMI = marksBMI >= johnsBMI;


console.log("Marks BMI is", " ", marksBMI);
console.log("Johns BMI is", " ", johnsBMI);
console.log("Marks BMI is", markHasHigherBMI);

if (marksBMI > johnsBMI) {
    console.log(`Marks BMI is ${marksBMI} therefore he's fatter than John who's BMI is ${johnsBMI}`);

} else {
    console.log(`Marks BMI is ${marksBMI} therefore he's thinner than John who's BMI is ${johnsBMI}`)

}

-------------------------------------falsy values

5 falsy values 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Brad'));
console.log(Boolean({}));
console.log(Boolean(''));
//-----
*/
const age = 18;

if (age === 18) console.log("You just became an adult strict equality operator ===");

if (age == 18) console.log("You just became an adult - loose equality operator ==");

const favoriteNumber = Number(prompt("What is your favorite number?"));
console.log(typeof (favoriteNumber));

if (favoriteNumber === 8) {
    console.log("Amazebals!")
} else if (favoriteNumber === 7) {
    console.log("I like the numbe 7 as well");
} else {
    console.log("Not a very popular choice, sorry");
}

if (favoriteNumber !== 8) console.log("Why not 8?");