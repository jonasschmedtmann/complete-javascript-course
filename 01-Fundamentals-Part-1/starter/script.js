//Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// const markHeight = 1.69
// const markWeight = 78

// const johnHeight = 1.95
// const johnWeight = 92

// const markBMI = markWeight /(markHeight**2)
// console.log('mark', markBMI)

// const johnBMI= johnWeight /(johnHeight**2)
// console.log('john', johnBMI)

// const markHeigherBMI = markBMI > johnBMI
// console.log('markHeigher', markHeigherBMI)

// if (markHeigherBMI){
//   console.log(`Mark's BMI is higher`)
// }else{
//   console.log(`john's BMI is higher`)
// }

//data 2
// const heightMark = 1.88
// const massMark = 95

// const heightJohn = 1.76
// const massJohn = 85

// const BIMmark = massMark / heightMark**2
// console.log('mark', BIMmark)

// const BMIJohn= massJohn/ heightJohn**2
// console.log('john', BMIJohn)

// const BIMmarkHigher = BIMmark > BMIJohn
// console.log('higher', BIMmarkHigher)
// if (BIMmarkHigher){
//   console.log(`Mark's BMI is higher`)
// }else{
//   console.log(`john's BMI is higher`)
// }

// Challenge #3

// Dolphins & Koalas

// Calculate the average score foreach team
// compare the teams' average score to determine the winner and console.log - test for a draw as well

// const dolphinsArray = [96, 108, 89]

// const averageD = dolphinsArray.reduce((a, b) => a + b, 0) / dolphinsArray.length

// console.log('dolphins', averageD)

// const koalasArray = [88, 91, 110]

// const averageK = koalasArray.reduce((a, b) => a + b, 0) / koalasArray.length

// console.log(`Koala's`, averageK)

// if (averageK > averageD) {
//   console.log(`Koalas Win`, averageK)
// } else if (averageD > averageK) {
//   console.log(`Dolphins win`, averageD)
// } else {
//   console.log(`There's a draw`)
// }

//Bonus 1

// const arrDolphins = [97, 112, 101]

// const d_Average = arrDolphins.reduce((a, b) => a + b, 0) / arrDolphins.length

// console.log('dolphins2', d_Average)

// const arrKoalas = [109, 95, 123]

// const k_AverageK = arrKoalas.reduce((a, b) => a + b, 0) / arrKoalas.length

// console.log(`Koalas2`, k_AverageK)

// const isOverOneHundred = true

// if (d_Average > k_AverageK && d_Average > 100) {
//   console.log(`Dolphins Win`, d_Average)
// } else if (k_AverageK > averageD && k_AverageK > 100) {
//   console.log(`Bonus 1 Koalas win and > 100`, k_AverageK)
// } else {
//   console.log(`There's a draw`)
// }

// Bonus 2

// const dolphins_Array = [97, 112, 101]

// const dolAverage =
//   dolphins_Array.reduce((a, b) => a + b, 0) / dolphins_Array.length

// console.log('dolphins3', dolAverage)

// const koalas_Array = [109, 95, 106]

// const koaAverageK =
//   koalas_Array.reduce((a, b) => a + b, 0) / koalas_Array.length
// console.log(`Koalas3`, koaAverageK)

// if (dolAverage >= 100 && dolAverage > koaAverageK) {
//   console.log(`Bonus 2 Dolphins Win`, dolAverage)
// } else if (koaAverageK >= 100 && koaAverageK > dolAverage) {
//   console.log(`Bonus 2 Koalas win `, k_AverageK)
// } else if (koaAverageK >= 100 && koaAverageK >= 100 && koaAverageK === dolAverage) {
//   console.log(`Bonus 2 DRAW`, k_AverageK)
// }else if (koaAverageK < 100) {
//   console.log(`Bonus 3 koalas <100`, koaAverageK)
// } else if (dolAverage < 100) {
//   console.log(`Bonus 3 dolphins <100`, dolAverage)
// }


// Challenge 4

// 50-300 15% else 20%


// const bill= 275
// const bill= 40
// const bill =430

// const tip =  bill >=50 && bill <=300 ? bill * 0.2 : bill * 0.15
// console.log('tip: ', tip)
// const total = bill + tip
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
//   ${total}`)

