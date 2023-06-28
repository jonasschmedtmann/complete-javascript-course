alert("Type conversion and coercion file started ")

//type conversion
let age0="24"
// string to Number()
ageFuture = `Current age is ${age0} yearas old \n\
after 10 years the age will be ${Number(age0)+10}`
console.log(ageFuture)
let age01 =String(24)
let age02 = 24
console.log(age01,typeof(age01), age02,typeof(age02))

//type coercion
const ageBirth = 1999
console.log("My date of birth is "+ageBirth+ " .")
console.log('33'-'3'+10)

let j="11"
j = j-9
console.log(j)
console.log(j*10)
console.log(j+"100")
console.log(j-10)
console.log(j/2)

let n= 1 +'1'
n = n-1
console.log("n : ",n)
