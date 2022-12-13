// let js = "amazing";
// if (js === "amazing") alert("JavaScript is Fun!");

// console.log(40 + 60 * 56);

// console.log("Jonas");


// let firstName = "Jonas";

// console.log(firstName)

// let person = ""


// let marksMass = 78;
// let marksHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;


// let marksBMI = marksMass / marksHeight**2;
// let johnBMI = johnMass / johnHeight**2;

// console.log(marksBMI)
// console.log(johnBMI)

// console.log(marksBMI > johnBMI)

// marksMass = 95;
// marksHeight = 1.88;

// johnMass = 85;
// johnHeight = 1.76;


// marksBMI = marksMass / marksHeight ** 2;
// johnBMI = johnMass / johnHeight ** 2;

// console.log(marksBMI)
// console.log(johnBMI)

// console.log(marksBMI > johnBMI)

// const firstName = "Jonas";
// const job = "teacher";
// const birthyear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthyear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthyear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(`String
// multiple
// lines`)

// const age = 15;

// if (age >= 18){
//   console.log('Sarah can start driving driving license 🚗');
// }else{
//   const yearsLeft = 18 - age;
//   console.log(`Sarah ist too young. Wait another ${yearsLeft} years :)`)
// }


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95

// const bmiMark = massMark/ heightMark**2;
// const bmiJohn = massJohn/ heightJohn**2;

// console.log(bmiMark, bmiJohn)

// const compare = bmiMark - bmiJohn;
// if(compare > 0) {
//   console.log("Mark's BMI is heigher than John's!");
// }else{
//   console.log("John's BMI is heigher than Mark's!")
// }

// if(compare > 0){
//   console.log(`Mark's BMI(${bmiMark}) is heigher than Mark's(${bmiJohn})!`)
// }else{
//   console.log(`John's BMI(${bmiJohn}) is heigher than Mark's(${bmiMark})!`)
// }

// const averageScoreDolphins = (97 +112 + 101) / 3;
// console.log(averageScoreDolphins);

// const averageScoreKoalas = (109 + 95 + 106) / 3;
// console.log(averageScoreKoalas);


// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//   console.log('The winner is Dolphin!');
// }else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
//   console.log('The winner is Koala!')
// }else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
//   console.log("It's a draw.")
// }else {
//   console.log('No one wins the game!')
// }


// const day = 'monday';

// if(day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// }else if(day === 'tuesday') {
//   console.log('Prepare theory videos');
// }else if (day === 'wednesday' || day ==='thursday'){
//   console.log('Write code examples');
// }else if (day === 'firday'){
//   console.log('Record videos');
// }else if (day === 'saturday' || day === 'sunday'){
//   console.log('Enjoy the weekend :D')
// }else {
//   console.log('Not a valid day!')
//   }


const bill = Number(prompt("The bill values is ?"));
// const billvalue = bill;

bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + bill * 0.15}`) : console.log(`The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + bill * 0.2}`);

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);