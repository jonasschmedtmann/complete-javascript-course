"use strict";
const nameArray = ["tarun", "kiran", "abhinav", "arunit", "akanksha"];
console.log(nameArray);
// append element at the last of array
nameArray.push("renuka");
console.log(nameArray);
// append element at start of array
nameArray.unshift("satish");
console.log(nameArray);
// remove element from last of array
nameArray.pop();
console.log(nameArray);
// remove element from start of array
nameArray.shift();
console.log(nameArray);
// to know the index of element
console.log(nameArray.indexOf("abhinav"));

// to know if the element is present or not
console.log(nameArray.includes("arunit"));
