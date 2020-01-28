// Creating Objects using the Function Constructor
/*
var zack = {
    name: 'Zack',
    yearOfBirth: 1997,
    job: 'software engineer'
};

// Lets use a blueprint to recreate this object! We will do this with a function constructor. its a pattern, or like writing a blueprint

var PersonConstructor = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // add a method to our object. might as well do it to the function constructor
    
}

// add prototype to personConstructor so we can use it more efficiently on diff people
// this is adding a method
PersonConstructor.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth - 1);
};

// adding a property
PersonConstructor.prototype.lastName = 'BumpNasty';


// when we use the new operator/keyword, a brand new empty object is created! Then, the PersonConstructor function is called, and passed in arguments we specify
var zack = new PersonConstructor('Zachary', 1997, 'software engineer bruh');

//grab that zack object and run the calculateAge method on it
zack.calculateAge();

var bran = new PersonConstructor('Brandon', 1998, '3m production operator');
var mama = new PersonConstructor('mama', 1970, 'head hauncho');

bran.calculateAge();
mama.calculateAge();

// calling the new property lastName
console.log(zack.lastName);
console.log(bran.lastName);
console.log(mama.lastName);
*/










// 62. The Prototype Chain in the Console
// 63. Creating Objects: Object.create
    // first define an object that will act as a prototype, then create a new object based on that very prototype

var personPrototype = {
    calculateAge: function(){
        console.log(2020 -
            this.yearOfBirth - 1);
    }
};

var zack = Object.create(personPrototype);
zack.name = 'Zack';
zack.yearOfBirth = 1997;
zack.job = 'engineer';

var dad = Object.create(personPrototype,
    {
        name: { value: 'Jeff' },
        yearOfBirth: { value: 1973 },
        job: { value: 'BNSF' }
    });