const bills = [275, 40, 430];

function getTip(bill) {
  let tip;
  switch (true) {
    case bill > 300:
    case bill < 50:
      tip = 0.2;
      break;
    default:
      tip = 0.15;
  }
  console.log(`bill: $${bill} \n tip: $${tip * bill}(${tip * 100}%)`);
}

bills.forEach(getTip);

const bill = 280;
const tip = bill < 50 || bill > 300 ? 0.2 : 0.15;
console.log(tip);
