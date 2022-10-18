



const calcTotal = bill => {
    let tip;
    (bill >= 50 && bill <= 300) ? tip=.15 : tip=.2;
    console.log(tip);
    return `The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill*(tip+1)}”
    `;
}

console.log(calcTotal(430));