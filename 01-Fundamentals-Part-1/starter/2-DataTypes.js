/*
In JavaScript every value is either an object or a primitive.

In JS there are 7 primitive data types
*/

// 1. Numbers -- Floating point numbers --> used for decimals and integers. These numbers always have decimals even if we don't see them and don't define them.
let age = 23;

// 2. Strings -- sequence of characters --> used for text
let firstName = "Adam";

// 3. Boolean -- Logical type that can only be true or false --> Used for making decisions
let fullAge = true;

// 4. Undefinded -- Value taken by any variable that is not yet defined "empty value"
let children;
console.log(`The variable "children" is of type: ${typeof children}`);

// 5. Null -- empty value, but it's used in different circumstances

// 6. Symbol -- Introduced in ES2015 -- A value that is unique and cannot be changed 

// 7. BigInt -- Introduced in ES2020 -- Larger integers that the Number type can't hold


/*
JavaScript has a feature called dynamic typing: We do not have to manually define the data type of a value stored in a variable when we declare it. Instead variable types are determined automatically.

The distinction between a value and a variable is important. In JavaScript it's the value that holds the data type not the variable.
*/

// Another important implication of dynamic typing is that later in our code we can assign a new value with a different data type to the same variable without a problem. Example below
let x = 10;
x = "I changed to a string";
// this can sometimes be very useful but it can also be the source of some tricky bugs 

// The typeof operator can be used to determine the data type of a variable or a value
console.log(typeof 23);
let testBoolean = false;
console.log(typeof testBoolean);
console.log(typeof "this is a string");

// there is a error that exists in the typeof operator. The below line of code will print that null is of type "object"
console.log(typeof null);