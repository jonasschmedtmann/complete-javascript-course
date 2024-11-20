class person {
  constructor(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height;
  }
  bmi = function () {
    return Math.round((this.mass / this.height ** 2) * 100) / 100;
  };
}

let mark = new person("Mark", 78, 1.69);
let john = new person("John", 92, 1.95);

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

module.exports = person;
