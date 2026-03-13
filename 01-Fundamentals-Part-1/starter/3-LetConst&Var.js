// there are three different ways to declare variables in JS. let, const, and var

// we use the let keyword to define variables that may change later
let age = 30;
age = 31;
// in technical terms we call this reassigning the value of a variable or mutating it


// we use the const variable when we define variables that are never meant to change. const creates an immutable variable
const birthYear = 1995;
// if we try to reassign this an error will be thrown: "assignment to constant valuable"
// since variables defined with const are immutable this also means that we cannot define an empty const variable
// const age; // error: const declarations must be initialized
