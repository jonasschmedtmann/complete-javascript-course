let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}
console.log(`This is ${firstName} ${lastName}. He is ${calcAge(yearOfBirth)} years old.`);
const n = `${firstName} ${lastName}`;
console.log(n.includes("h"));
console.log(n);
console.log(`${firstName.repeat(5)}`);
///////////////////
//Arrow Functions//
///////////////////
const years = [1990, 1965, 1982, 1937];
//ES5
var ages5 = years.map(function (el) {
    return 2016 - el;
});
console.log(ages5);
//ES6
let ages6_arrow = years.map(el => 2016 - el);
console.log(ages6_arrow);
let ages6_arrow_1 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6_arrow_1);
let ages6_arrow_2 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6_arrow_2);
