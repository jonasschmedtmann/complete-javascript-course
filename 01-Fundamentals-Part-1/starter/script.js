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

const markHeight = 1.69
const markWeight = 78

const johnHeight = 1.95
const johnWeight = 92

const markBMI = markWeight /(markHeight**2)
console.log('mark', markBMI) 

const johnBMI= johnWeight /(johnHeight**2)
console.log('john', johnBMI) 

const markHeigherBMI = markBMI > johnBMI
console.log('markHeigher', markHeigherBMI)

if (markHeigherBMI){
  console.log(`Mark's BMI is higher`)
}else{
  console.log(`john's BMI is higher`)
}


//data 2
const heightMark = 1.88
const massMark = 95

const heightJohn = 1.76
const massJohn = 85

const BIMmark = massMark / heightMark**2
console.log('mark', BIMmark) 

const BMIJohn= massJohn/ heightJohn**2
console.log('john', BMIJohn) 

const BIMmarkHigher = BIMmark > BMIJohn
console.log('higher', BIMmarkHigher)
if (BIMmarkHigher){
  console.log(`Mark's BMI is higher`)
}else{
  console.log(`john's BMI is higher`)
}