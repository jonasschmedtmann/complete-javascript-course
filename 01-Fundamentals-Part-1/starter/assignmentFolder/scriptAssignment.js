function bmi(mass, height) {
  return mass / height ** 2;
}

console.log(bmi(78, 1.69));
console.log("Break\nBreak\nBreak");
let mark = {
  mass: 78,
  height: 1.69,
  bmi: function () {
    return (bmi = this.mass / this.height ** 2);
  },
};
console.log(mark.bmi());

let john = {
  mass: 92,
  height: 1.95,
  bmi: function () {
    return (bmi = this.mass / this.height ** 2);
  },
};
console.log(john.bmi());

let markHigherBMI = mark.bmi() > john.bmi();
console.log(markHigherBMI);

module.exports = bmi;
