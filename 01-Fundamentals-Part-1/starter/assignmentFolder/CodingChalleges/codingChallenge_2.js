/* function bmi(mass, height) {
  return mass / height ** 2;
}
console.log(bmi(78, 1.69));
console.log("Break\nBreak\nBreak");
 */
let mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  bmi: function () {
    bmi = this.mass / this.height ** 2;
    return bmi.toFixed(2);
  },
};

let john = {
  name: "John",
  mass: 92,
  height: 1.95,
  bmi: function () {
    bmi = this.mass / this.height ** 2;
    return bmi.toFixed(2);
  },
};

if (mark.bmi() > john.bmi()) {
  return console.log(
    `${mark.name}'s BMI (${mark.bmi()}) is higher than ${
      john.name
    }'s (${john.bmi()})!`
  );
} else if (john.bmi() > mark.bmi()) {
  return console.log(
    `${john.name}'s BMI (${john.bmi()}) is higher than ${
      mark.name
    }'s (${mark.bmi()})!`
  );
}

module.exports = bmi;
