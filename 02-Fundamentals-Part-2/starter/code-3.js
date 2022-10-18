let markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
       this.BMI = (this.mass / (this.height **2));
       return this.BMI;
    },
    BMI:0
}

let johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = (this.mass / (this.height **2))
        return this.BMI;
     },
     BMI:0
}

johnSmith.calcBMI();
markMiller.calcBMI();

console.log(markMiller.BMI > johnSmith.BMI ? `Mark's BMI (${markMiller.BMI}) is higher than John's (${johnSmith.BMI})` : `John's BMI (${johnSmith.BMI}) is higher than Mark's (${markMiller.BMI})`);

