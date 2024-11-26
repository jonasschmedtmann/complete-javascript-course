/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calBMI: function () {
        this.bmi = this.mass/this.height ** 2
        return this.bmi; 
    }
}

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;  
    return this.bmi;
  },
};

john.calBMI()
mark.calBMI();

if (mark.bmi > john.bmi) {
    console.log(
      `${mark.fullName} BMI (${mark.bmi}) is higher than ${
        john.fullName
      } BMI (${john.bmi})!`
    );
}else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})`)
}
