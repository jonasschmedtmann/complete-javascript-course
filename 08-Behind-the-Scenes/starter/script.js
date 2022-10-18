'use strict';
let robert = {
    name: "Robert",
    age: 33
}

// console.log(`${robert.name} is ${robert.age} years old.`);
// setting a variable equal to an already existed object just creates another reference to the object and does not create a new object. Meaning the "robert" object can also be accessed and changed by the mark variable.
// let mark = robert;
// mark.name = "Mark"
// mark.age = 40

// console.log(`${robert.name} is ${robert.age} years old.`);
// console.log(`${mark.name} is ${mark.age} years old.`);


// Mutating variables of destructured objects
let {name: firstName, age} = robert;

console.log(firstName, age);

firstName = "ted";
// notice that the name on the object is not changed when we re-assign the value to "ted".
console.log(robert.name, firstName);


// join two arrays using the spread operator
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1, ...arr2]

let string = "Hello World";

let arrStr = [...string]

console.log(arrStr);


// since ES2018 you can now use the spread operator on objects to copy their values to a new variable. This creates a new object with the values of the first object, and not a reference to the old object.
let firstObj = {
    item: "not changed yet"
}

let secondObj = {...firstObj, anotherProp: 23};

console.log(firstObj.item);
console.log(secondObj.item);

secondObj.item = "changed now";

console.log(firstObj.item);
console.log(secondObj.item);
console.log(secondObj.anotherProp);
console.log(firstObj.anotherProp);



