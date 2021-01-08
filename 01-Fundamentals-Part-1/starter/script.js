// let js = "awesome";
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = "James";


// console.log(firstName)

// /*reserved words shouldn't be used but some are still legal
// Variable name conventions*/
// let jonas_matilda = "JM"
// let $function = 27;
// let Person = 'Jonas'; /*use lower case letter to start a var*/

// let PI = 3.1415; /*a constant number that never changes should be all in caps*/


// /* use descripted variable names rather than vague*/
// let myFisrstJob = "Pizza Maker";
// let myCurrentJob = "Unemployed";

// console.log(myCurrentJob)


let javaScriptIsFun = true;
console.log(javaScriptIsFun)


console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

/*EXAMPLE OF "DYNAMIC TYPING"
Reassigning a variable without using using let or var*/
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

/*EXAMPLE FOR "UNDEFINED_VALUES"*/

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

/*This is a bug- and doesn't make any sense, because it is not an "OBJECT"*/
console.log(typeof null);