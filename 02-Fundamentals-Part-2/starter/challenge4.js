"use strict";

const tips = new Array();
const totals = new Array();
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

function calcTip(billValue) {
  let tip;
  if (billValue >= 50 && billValue <= 300) {
    tip = billValue * 0.15;
  } else tip = billValue * 0.2;
  return tip;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(totals);
