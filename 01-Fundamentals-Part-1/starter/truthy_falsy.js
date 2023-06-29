// 5 falsy values 0,'',undefinfed,Nan,null

console.log("the five falsy values are  0,'',undefinfed,Nan,null")
console.log(Boolean(0),Boolean(''),Boolean(undefined),Boolean(NaN), Boolean(null))


const money = 0;
if(money){
    console.log("Yes ✔ you have  Money🤑 ")
}else{
    console.log("Sorry you are out of Money🚫")
}

let height1 ;
// to check if variable is initilized //if height is 0 it will fall in the category of else 
if (height1){
    console.log(`The variable height1 is already inililized to ${height1}`)
}else{
    height1 = 100
    console.log(`The variable height1 is now initilized ${height1}`)
    
}


//equality  operator 
//1) strict  === (doesn't do type-coresion)
console.log('18' === 18)

//2 loose == (does type-coresion)
console.log('18' == 18)
// you can join the party only of you are 18 years of age
const ageParty = Number(prompt("Enter your age : "))
if (ageParty === 18){
    console.log("User is eligible for party🎉 ");
}
else if (ageParty !== 18) { //strict not equal != is loose not equal
    console.log("Why not 18")
    console.log(`User is not🚫 eligible for party`); 
}
alert("Check the console log to view if you are eligible for party")