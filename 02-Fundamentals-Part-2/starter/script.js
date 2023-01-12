///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage=  (score1, score2, score3) =>  (score1 + score2+ score3)/3

// TEST DATA 1: 
// let avgDolhins= calcAverage(44, 23, 71)
// let avgKoalas= calcAverage(65, 54, 49)

// console.log('dolAverage', avgDolhins, 'KoalaAverage', avgKoalas)

// const checkWinner = function(avgDolhins, avgKoalas){
//   if (avgDolhins >= 2 * avgKoalas){
//     console.log (`Dolphins Win - ( ${avgDolhins} vs. ${avgKoalas})`)
//    } else if (avgKoalas >= 2 * avgDolhins){
//     console.log (`Koalas Win - ( ${avgKoalas} vs. ${avgDolhins})`)
//    }else{
//     console.log (`There's no winner`)
//      }
//   }
  
//   checkWinner(avgDolhins, avgKoalas)

// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// avgDolhins= calcAverage(85, 54, 41)
// avgKoalas= calcAverage(23, 34, 27)
// console.log('dolAverage', avgDolhins, 'KoalaAverage', avgKoalas)

// checkWinner(avgDolhins, avgKoalas)


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function (bill){
//   if (bill >= 50 && bill <=300){
//     return bill * 0.15
//   } else{
//     return  bill * 0.20
//   }
// }
// arrow func && ternary
// const calcTip =  (bill) => bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20

// const bills = [125, 55, 44]
// let tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// let total = [ bills[0]+ tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log('tips arr', tips, 'total', total)


 // challenge video 43

//  const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: false,
//   calcAge: function(){
//     this.age =  2037 - this.birthYear
//     return this.age
//   },
//   getSummary: function(){
//   return `${this.firstName} is a ${this.calcAge()} y.o ${this.job} & he has ${this.hasDriversLicense?  'a ': 'no'}drivers license. `
//   }
// };



// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



// console.log(jonas.getSummary())

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark ={
//   firstName: 'Mark',
//   lastName: 'Miller',
//   height: 1.69,
//   weight: 78,
//   calcBMI: function() {
//     this.bmi = Math.round(this.weight / this.height ** 2 )
//     return this.bmi
//   }
// }

// const john ={
//   firstName: 'John',
//   lastName: 'Smith',
//   height: 1.95,
//   weight: 92,
//   calcBMI: function() {
//     this.bmi = Math.round(this.weight / this.height ** 2 )
//     return this.bmi
//   }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log( mark.bmi > john.bmi ? `${mark.firstName} BMI: (${mark.bmi}) is higher than ${john.firstName}'s BMI: (${john.bmi})`: `${john.firstName}'s BMI ${john.bmi} is higher than ${mark.firstName} BMI (${mark.bmi})` )


///////////////////////////////////////////////////////////////////
// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)


// const myCountry ={
//   country: 'argentina',
//   capital: 'buenos aires',
//   language: 'spanish',
//   population: 52,
//   neighnours:['uruguay', 'brasil', 'bolivia', 'chile'],
//   describe: function(){
//     return `${this['country']} has ${this.population} million ${this.language}-speaking people, ${this.neighnours.length} neighboring countries and a capital called ${this.capital}`
//   },
//   checkIsland: function(){
//     return this.neighnours.length >= 1 ? 'false' : 'true'
//   }
// }
// console.log(myCountry)
//////////////////////////////////////////////////////////////////
// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// let str = `${myCountry['country']} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighnours.length} neighboring countries and a capital called ${myCountry.capital}`;
// console.log(str)

// myCountry.population= 54
// console.log(myCountry.population)

// myCountry['population']=52
// console.log(myCountry.population)

// console.log(myCountry.describe())
// console.log(myCountry.checkIsland())


// const jonasArray = [
//   'jonas',
//   'Schmedtmann',
//   2097-1991,
//   'teacher',
//   ['michael', 'peter', 'steven'], 
//   true
// ]

// let types = []

// for(let i= 0 ; i < jonasArray.length ; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i])

  // types[i] = typeof jonasArray[i]
//   types.push(typeof jonasArray[i])
// }

// console.log(types)

// const years =[1991, 2007, 1969, 2020]

// const ages=[]
// for ( let i=0 ; i<years.length ; i++ ) { 
//  ages.push(2037 - years[i])
// }

// console.log(ages)

// Continue & Break

// for ( let i = 0 ; i < jonasArray.length ; i++ ) {
//   if (typeof jonasArray[i] !== 'string') continue 

//   console.log( jonasArray[i], typeof jonasArray[i])
// }

// for ( let i = 0 ; i < jonasArray.length ; i++ ) {
//   if (typeof jonasArray[i] === 'number') break

//   console.log( jonasArray[i], typeof jonasArray[i])
// }

// for (let exercise =1 ; exercise < 4 ; exercise++) {
//   console.log( `------ starting exercise ${exercise}`)

//     for (let rep = 1 ; rep < 6 ; rep++) {
//        console.log( ` ${exercise}: Lifting weight repetition ${rep}`)
//     }
// }

// While loop

// only need the condition , the counter goes outside the loop
// it can be any condition 

// let rep = 1
// while (rep<6){
//   console.log( `While: Lifting weight repetition ${rep}`)
//   rep ++
// }

// let dice =  Math.trunc(Math.random() *6)+1

// console.log(dice)

// while(dice !==6){
//   console.log(` you rolled a ${dice}`)
//   dice = Math.trunc(Math.random() *6)+1
//   if (dice === 6) console.log(` Loop is about the end ${dice}`)

// }

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

let tips = []

let totals = []

const calcTip =  (bill) => bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20

for ( i=0 ; i < bills.length ; i++ ) {

  const tip =calcTip(bills[i])
  tips.push(tip)  
  totals.push(tip + bills[i])  
}
 console.log('tips', tips, 'totals', totals)





let calcAverage = (arr) =>{
let sum = 0

for (let i=0 ; i<arr.length ; i++){
  
  sum += arr[i]
}
console.log('sum', sum)
return sum /arr.length
}

console.log('average', calcAverage(totals))
console.log('average', calcAverage(tips))