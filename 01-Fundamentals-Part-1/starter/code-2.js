
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice outputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

const getBMI = (weight, height) => {
    return weight/(height * height);
}

let markBMI = (Math.round((getBMI(78,1.69))*100)/100);
let johnBMI = (Math.round((getBMI(92,1.95))*100)/100);

let markHigherBMI = markBMI > johnBMI ? `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})` : `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`;

console.log("Mark: "+markBMI);
console.log("John: "+johnBMI);
console.log(markHigherBMI);

