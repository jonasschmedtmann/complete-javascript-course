// Creating Objects using the Function Constructor

var zack = {
    name: 'Zack',
    yearOfBirth: 1997,
    job: 'software engineer'
};

// Lets use a blueprint to recreate this object! We will do this with a function constructor. its a pattern, or like writing a blueprint

var PersonConstructor = function(name, yearofBirth, job){
    this.name = name;
    this.yearOfBirth = yearofBirth;
    this.job = job;
}