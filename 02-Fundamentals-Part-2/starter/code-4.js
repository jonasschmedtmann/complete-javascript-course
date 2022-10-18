let bills = [22, 295, 176, 440, 37, 105, 10, 86, 52];
let tips = [];
let totals = [];

const calcTotal = bill => {
    let tipPercent;
    (bill >= 50 && bill <= 300) ? tipPercent=.15 : tipPercent=.2;

    let tip = bill * tipPercent;
    let total = bill * (tipPercent+1);

    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}
    `);

    tips.push(tip);
    totals.push(total);
}

const calcAverage = arr => {
    let thisArr = [...arr];
    return (thisArr.reduce((a,b) => a+b) / thisArr.length)
}


bills.forEach(bill => calcTotal(bill));


console.log(`Average Tip: ${calcAverage(tips)}`);
console.log(`Average Bill: ${calcAverage(bills)}`);
console.log(`Average Total: ${calcAverage(totals)}`);


