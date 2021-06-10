let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Samuel";
console.log(firstName);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

// let is used to declar a variable that will change later. Variables that will be mutated are 'let' 
// const is used to declare values that will not change. 

// Eg. 
const birthYear = 1991;
birthYear2 = 1990;

// Taking Decisions: if/else Statements

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving')
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} years`);
}