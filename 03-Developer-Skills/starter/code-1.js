const printForecast = (arr) => {
    let forecastStr = ``;
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i];
        const day = i+1;
        forecastStr += `${temp}˚C in ${day} days, `
    }
    return forecastStr;
}
let forecast = printForecast([12,5,-5,0,4]);

console.log(forecast);