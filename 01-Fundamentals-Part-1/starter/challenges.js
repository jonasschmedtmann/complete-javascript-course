
/*
Coding challenge #1 & #2
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
*/

const BMI = (mass, height) => mass / (height ** 2)
let marksBMI = BMI(78, 1.69)
let johnBMI = BMI(92, 1.95)

resultHigherBMI = `Mark's(${marksBMI.toFixed(2)}) BMI is ${(marksBMI > johnBMI) ? 'Higher' : 'lower'} than John's(${johnBMI.toFixed(2)})!`
console.log(resultHigherBMI)
marksBMI = BMI(95, 1.88)
johnBMI = BMI(85, 1.76)
resultHigherBMI = `Mark's(${marksBMI.toFixed(2)}) BMI is ${(marksBMI > johnBMI) ? 'Higher' : 'lower'} than John's(${johnBMI.toFixed(2)})!`
console.log(resultHigherBMI)


/*
Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! 
*/
let dolphinscore = [97, 112, 101]
let koalascore = [109, 95, 106]

const dolphinavg = (dolphinscore[0] + dolphinscore[1] + dolphinscore[2]) / 3
const koalasavg = (koalascore[0] + koalascore[1] + koalascore[2]) / 3
//Bonus 1
if (dolphinavg == koalasavg) {
    console.log("Opps...! It's a draw match")
} else if (dolphinavg > koalasavg && dolphinavg > 100) {
    console.log("I see more domination of dolphins")
} else if (koalasavg > 100) {
    console.log("I see more domination of Kolas")
} else {
    console.log("Sorry...! No one has reached 100 avgscore")
}
//Bonus 2
if (dolphinavg > 100 && koalasavg > 100) {
    if (dolphinavg == koalasavg) {
        console.log("Opps...! It's a draw match")
    } else if (dolphinavg > koalasavg) {
        console.log("I see more domination of dolphins")
    } else {
        console.log("I see more domination of Kolas")
    }
} else {
    console.log("Sorry...! No one has reached 100 avgscore")
}

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%. 
*/
billValue = Number(prompt("What's the steven's Bill?"))
tipValue = (50 > billValue || billValue < 300) ? billValue * 0.15 : billValue * 0.20
console.log(`The bill was ${billValue}, the tip was ${tipValue}, and the total value 
${billValue + tipValue}`)