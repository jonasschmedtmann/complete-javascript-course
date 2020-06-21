/*************************
 * CODING CHALLENGE 4
 * 
 */

 /**
  * Let's implement the same functionality as challenge 1, 
  * but with objects and methods. 
  * 
  * Comparing John and Mark's BMI
  * 
  * 1.) For each of them, create an object with properties for 
  * their full name, mass, and height
  * 
  * 2.) Then, add a method to each object to calculate the BMI. Save the BMI
  * to the object and also return it from the method. 
  * 
  * 3.) In the end, log to the console who has the highest BMI, together with the
  * full name ane respective BMI. Don't forget they might be the same.active
  * 
  *         BMI = mass / height^2 = mass / (height * height). 
  *         (mass in kg and height in meter)
  */


console.log("Whose BMI is higher, Mark or John?");

var mark = {
    fullName: 'Mark Cuban',
    mass: 160,
    height: 70, // 5'10"
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var john = {
    fullName: 'John Smith',
    mass: 180,
    height: 74, // 6' 2"
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

console.log(mark.fullName + ": " + mark.calcBMI() + "\n" +john.fullName + ": " + john.calcBMI());


if(mark.calcBMI() < john.calcBMI()) {
    console.log('John has a higher BMI. At: ' + john.BMI);
}else if (mark.calcBMI() === john.calcBMI()) {
    console.log('They both have the same BMI');
} else {
    console.log('Mark has a higher BMI. At: ' + mark.BMI);
};