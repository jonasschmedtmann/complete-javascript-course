//Lecture don't know

let describeCountry = (country,population,capitalCity) => {
    console.log(`${country} have ${population} and the capital city is ${capitalCity}`)
};

describeCountry("india","onecrore","delhi");
describeCountry("pakistan","otwocrore","belhi");

//Lecture 2

const pecentagepop = population => {
    let curpop = 7900;
    return (population/curpop)*100;
}

console.log(`${pecentagepop(7900)}% `);

let percentage = function(population) {
    let curpop = 7900;
    return (population/curpop)*100;
}

// console.log(`${percentage(7900)}% `);

//Lecture 4

// function describepopulation(country,population,ftocall){
//     console.log(`${country} have a ${population} and in ${ftocall} of world population`)
// }

// describepopulation("india","120",pecentagepop(7900))

//Lecture 5

// let populations = [7900,50,80,90];

console.log(populations.length==4);

let percentages =[];
let n = populations.length;
let i = 0;
while(n>=i){
    percentages[i] = pecentagepop(populations[i]);
    i++
}

for(let j =0;j<n;j++){
    console.log(percentages[j]);

}

let countries = [ "india","Paki","china"];

countries.push("utopia");

console.log(countries);
countries.pop("utopia");
console.log(countries);

countries.forEach((country)=> {
    if(country == "germany") console.log("germany isn't in the country");
    else console.log("nahi hai");
})
const index = countries.forEach((country)=> {
    if(country == "germany") console.log("germany isn't in the country");
    else console.log("nahi hai");
})
console.log(countries.findIndex("india"));


let apple = [1, 2, 3, 4, 5];

let indexq = apple.findIndex((element) => element === 5);

console.log(indexq);  

const indexy = countries.findIndex("india");

const country = {
    country : "india",
    language : "english",
    population : "2 crores"
}

console.log(country['language']);












