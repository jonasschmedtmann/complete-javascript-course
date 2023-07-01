for (let i = 1; i <= 5; ) {
  console.log("Lifting weight for replication 🏋️‍♀️ " + i++);
}

const birthYearsArray = [1993, 1997, 1999];
const ages = [];
for (let i = 0; i < birthYearsArray.length; i++) {
  ages.push(2023 - birthYearsArray[i]);
}
console.log(ages);

// continue in loops
for (let i = 0; i < ages.length; i++) {
  console.log(`A ${i}`);
  if (i == 1) {
    continue;
  }
  console.log(`B ${i}`);
}
console.log("Break statements");
// break in loops
for (let i = 0; i < ages.length; i++) {
  console.log(`A ${i}`);
  if (i == 1) {
    break;
  }
  console.log(`B ${i}`);
}
// while loop
let i = 0;
while (i++ < 25) {
  console.log("Lifting weight for replication 🏋️‍♀️ " + i);
}
