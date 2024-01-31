/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
*/
calcAverage = (values) => (values[0] + values[1] + values[2]) / 3
checkWinner = (avgDolphins, avgKolas) => {
    if (avgDolphins > avgKolas * 2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKolas})`
    } else if (avgDolphins * 2 < avgKolas) {
        return `Kolas win (${avgKolas} vs. ${avgDolphins})`
    } else {
        return `No one wins`
    }
}
console.log(checkWinner(calcAverage([85, 54, 41]), calcAverage([23, 34, 27])))

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
*/
calTip = (billsList) => {
    totalList = new Array()
    tipList = new Array()
    for (let i = 0; i < billsList.length; i++) {
        tipValue = (50 > billsList[i] || billsList[i] < 300) ? billsList[i] * 0.15 : billsList[i] * 0.20
        tipList.push(tipValue)
        totalList.push(tipValue + billsList[i])
    }
    return [totalList, tipList]
}
billsList = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
List = calTip(billsList)
console.log('Here is the Bill : ' + billsList)
console.log('Tip given to Bill: ' + List[1])
console.log('Total bills      : ' + List[0])


// calcAverage
calcAverage = (arr) => {
    sum = 0
    for (let i = 0; i < arr.length; i++)
        sum += arr[i]

    return sum / arr.length
}
average = calcAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log('Average : ' + average)