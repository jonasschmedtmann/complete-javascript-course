/*********** Coding Challenge #3 **********  
Mark and John are comparing their BMIs. This time, let's use objects to implement the calculations. Note: BMI = mass / height **2 = mass/(height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also retun it from the method. 
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Marks weighs 78 kg and is 1.69m tall
John weights 92 kg and is 1.95m tall. 
*/

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;

    }

};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;

    }

};

const higherBMI = () => {
    if (mark.BMI > john.BMI) {
        console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI})is higher than ${john.firstName} ${john.lastName}'s BMI (${john.BMI}) `);
    } else(console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI})is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) `));
}