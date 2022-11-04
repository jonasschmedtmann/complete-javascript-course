let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
let first = 'Jonas';
let firstNamePerson;    //camelCasing is typically the naming convention in JS
let first_name_person;  //not so common naming convention in JS
//let 3years = 3;         //Variables cannot contain numbers in the beginning. Will get an error like "Uncaught SyntaxError: Invalid or unexpected token (at script.js:11:5)"
//let jonas&matilda = "JM"; //& is also an invalid option

console.log(firstName);
console.log(firstName);
console.log(firstName);

let _function = 27;
let $function = 27;     //_ and $ is the only special letters that allows you to use them in the beginning of the variable name

let person = "jonas";
let PI = 3.1415;        //Capitalized variables usually denote constant

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

//JS Fund - ASsignment: LECTURE: Values and Varibles
/*
1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
2. Log their values to the console
*/
let country = 'Canada';
let continent = 'North America';
let population = 38250000;

console.log(country);
console.log(continent);
console.log(population);


/////////////////////////////
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);   /*console will report back as 'object', this is actually a 
                              bug/error in JavaScript, however was not fixed for 
                              legacy reasons.*/

//////////////////////////////////

//let
//const

let age = 30;
age = 31;                   //we 'mutated' the age variable (aka reassigning variable)

const birthYear = 1991;     //const are immutable
//birthYear = 1990;           //Uncaught TypeError: Assignment to constant variable.

//const job;                //define the variables as const as much as possible, only  
//use let if you know it will be mutable.

var job = "programmer";     //almost never use var
job = "teacher";

//lastName = 'Schmedtmann';   //bad practise, always properly declare your code.  
const lastName = 'Schmedtmann';
console.log(lastName);




