// let dolphins = [96,108,89];
// let koalas = [88,91,110];
// test 2
// let dolphins = [97,112,101];
// let koalas = [109,95,123];
// test 3
let dolphins = [20,54,41];
let koalas = [100,100,100];

const checkWinner = (avgDolph, avgKoala) => {
    if(avgDolph >= avgKoala * 2){
        console.log("Dolphins win!");
    } else if ( avgKoala >= avgDolph * 2){
        console.log("Koala's win!");
    } else {
        console.log("no one wins");
    }
}

const calcAverage = (dolphScores, koaScores) => {
    let dolphAvg = dolphScores.reduce((a,b) => a + b) / dolphScores.length;
    let koaAvg = koaScores.reduce((a,b) => a + b) / koaScores.length;
    checkWinner(dolphAvg, koaAvg);
}

calcAverage(dolphins, koalas)









