// Lecture: Function constructor

let Person = function (name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
};
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};
Person.prototype.job = 'developer';

let jakub = new Person('Jakub', 1993);
let martin = new Person('Martin', 1992);

jakub.calculateAge();
martin.calculateAge();

console.log(jakub.job);
console.log(martin.job);