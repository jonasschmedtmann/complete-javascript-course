const bmi = require("../scriptAssignment.js");

describe("BMI Function", function () {
  test("deviding weight by 2 times the height,", function () {
    expect(bmi(78, 1.69)).toEqual(27.309968138370508);
  });
});
