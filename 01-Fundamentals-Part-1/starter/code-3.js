// let dolphins = [96,108,89];
// let koalas = [88,91,110];
// test 2
// let dolphins = [97,112,101];
// let koalas = [109,95,123];
// test 3
let dolphins = [97,112,101];
let koalas = [109,95,106];

const findAverage = scores => {
    return scores.reduce((a,b) => a + b) / scores.length
}

let dolphAvg = findAverage(dolphins);
let koaAvg = findAverage(koalas);

// if(findAverage(dolphins) > findAverage(koalas)){
//     return console.log(`Dolphins win!`)
// } else if (findAverage(dolphins) < findAverage(koalas)){
//     return console.log(`Koalas win!`);
// } else {
//     return console.log(`It's a draw...`);
// }

if( dolphAvg > koaAvg && dolphAvg >= 100){
    return console.log(`Dolphins win!`)
} else if (findAverage(dolphins) < findAverage(koalas) && koaAvg >= 100){
    return console.log(`Koalas win!`);
} else if (dolphAvg === koaAvg && dolphAvg >= 100 && koaAvg >= 100){
    return console.log(`It's a draw...`);
} else {
    console.log(`No one wins`);
}



