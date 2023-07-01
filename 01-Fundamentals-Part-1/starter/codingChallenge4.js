const billValue = 430;
const tip = billValue*((billValue>=50 && billValue <= 375 ? 15 : 20)/100);

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`);