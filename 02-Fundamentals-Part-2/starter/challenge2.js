function calcTip(billValue) {
  let tip;
  if (billValue >= 50 && billValue <= 300) {
    tip = billValue * 0.15;
  } else tip = billValue * 0.2;
  return tip;
}

const bill = new Array(125, 555, 44);
const tips = new Array(calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2]));
const total = new Array(
  bill[0] + tips[0],
  bill[1] + tips[1],
  bill[2] + tips[2]
);
console.log(total);
