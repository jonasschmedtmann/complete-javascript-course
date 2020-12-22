"use strict"

const mike = {
	fullName: "Mike Miller",
	mass: 78,
	height: 1.69,

	calcBMI: function(){
		return this.mass/this.height**2;
	}
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,

	calcBMI: function(){
		return this.mass/this.height**2;
	}
};

if (john.calcBMI() > mike.calcBMI()){
	console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mike.fullName}'s (${mike.calcBMI()})!`);
}else{
	console.log(`${mike.fullName}'s BMI (${mike.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
};