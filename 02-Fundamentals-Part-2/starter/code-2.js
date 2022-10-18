



const calcTotal = bill => {
    let tip;
    (bill >= 50 && bill <= 300) ? tip=.15 : tip=.2;
    console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill*(tip+1)}
    `);
}

let bills = [125,555,44];

bills.forEach(bill => calcTotal(bill));