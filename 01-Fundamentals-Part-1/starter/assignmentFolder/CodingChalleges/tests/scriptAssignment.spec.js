const person = require("../codingChallenge_2_1.js");

describe("BMI Function", function () {
  test("deviding weight by 2 times the height,", function () {
    let mark = new person("Mark", 78, 1.69);
    expect(mark.bmi()).toEqual(27.31);
  });
  test("if statement", function () {
    let mark = new person("Mark", 78, 1.69);
    let john = new person("John", 92, 1.95);
    expect(mark.bmi() > john.bmi()).toEqual(27.31 > 24.19);
  });
});
