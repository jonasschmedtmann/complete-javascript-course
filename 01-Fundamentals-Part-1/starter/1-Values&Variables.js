let js = "amazing";
console.log(40 + 23 + 8 - 10);

console.log("Adam");
console.log(23);

let firstName = "Adam";
console.log(firstName);


// Conventions for naming variables in JS.
// You should stick to using camel case -- example: 
let camelCaseVariable = "testing";
// notice how the first letter is lowercase but then the first letter of every subsequent word is capitalized. That is the standard/convention in JS

// Here are some hard rules of how you cannot name variable names in JS: variables can't start with a number -- example: 
// let 3years = 3; // This will cause an error

// Variable names can only contain letters, numbers, underscores, and the dollar sign ($).
// another example -- the variable name below will throw an error:
// let adam&jess = "spouses";

// Variable names can't be reserved keywords that JavaScript already uses. Examples would be "new", "this", and "function"

// One odd case is naming a variable name. Sometimes this is used as a reserved keyword, but JS will still allow you to assign a variable as "name". To play it safe don't assign a variable to "name" though
let name = "Layla";

// Another convention is that you shouldn't start a variable name with an uppsercase letter. It's not going to cause an error it's just that in JS you typically start a variable name with an uppercase letter for specific use cases, such as object oriented programming (e.g. classes).

// Variables that are in all caps are reserved for constants that we know will never change. 
// Example:
let PI = 3.14159;

// Final convention for variable names is to make sure that they are descriptive

