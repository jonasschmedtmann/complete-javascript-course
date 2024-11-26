const country =  'India'
const population = '1.4 billion'
const states = 28
const ut = 9

let aboutIndia = 'The Country ' + country+', has a population of about '+ population +'. \n It has '+states+ ' states and '+ ut +' Union territories' 
console.log(aboutIndia)

console.log("Printing with tempelate literal")
// to use tempelate literal we need to use backticks
//template literal can assemble multiple pieces into one final string
aboutIndia = `The beautiful country ${country} , having ${states} states and ${ut} union terrorities counts to the population of ${population}`
console.log(aboutIndia)

console.log(`Total number of states \n
and \n
Union terriotories sums up to ${states+ut}`);