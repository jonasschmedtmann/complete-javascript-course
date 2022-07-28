function calcTip(billValue) {
  let tip;
  if (billValue >= 50 && billValue <= 300) {
    tip = billValue * 1.15;
  } else tip = billValue * 1.2;
  return tip;
}

const bill = new Array(125, 555, 44);
const tips = new Array(calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2]));
console.log(tips);
