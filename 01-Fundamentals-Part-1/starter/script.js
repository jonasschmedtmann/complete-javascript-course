let js = "amazing";
//if (js === "amazing") alert("javascript is fun");
//console.log(40 + 12 + 43);
// test = 7 -> doesnt declare variable but attaches as property to global

// 2 ^ 3 = 2 ** 3

const firstname = "ryan";
const lastname = "hughes";
let string = `hello, im ${firstname} ${lastname}`;
console.log(string);

// more interesting coding challenge one
let mark = {
  name: "mark",
  weight: 78,
  hieght: 1.69,
  bmi: null,
};

let john = {
  name: "john",
  weight: 78,
  hieght: 1.69,
  bmi: null,
};

function calcBMI(height, weight) {
  return weight / height ** 2;
}

mark.bmi = calcBMI(mark.hieght, mark.weight);
console.log(mark);
console.log(calcBMI(mark.hieght, mark.weight));

console.log(`hello, im ${john.name} i have a bmi of ${john.bmi}`);

console.log("multi \n line \n string");

console.log(`cooler
multi 
line 
string`);

let height = 01;
height ? console.log(`defined`) : console.log(`not defined`);

let age = 18;
age === 18 ? console.log(`true`) : console.log(`false`);

const userinput = Number(prompt(`whast your favorite number`));
userinput === 18 ? console.log(`nice`) : console.log(`not nice`);

const day = `monday`;
switch (day) {
  case `monday`:
    console.log("Monday switch hit");
    break;
  default:
    console.log("Monday switch Not hit");
}
