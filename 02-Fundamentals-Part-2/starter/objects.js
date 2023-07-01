const person = {
  firstname: "abhinav",
  lastname: "anand",
  birthYear: 1993,
  friends: ["A", "B", "C", "D"],
  hasDriversLicence: true,
  job: "student",
  calculateAge: (birthYear) => 2023 - birthYear, // this keyword is not supported in arrow functions so use below function expression
  calculateThisAge: function () {
    return 2023 - this.birthYear;
  },
  calculateAndStoreAgeInObject: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};
console.log(
  `${person.firstname} has ${person.friends.length} friends and ${person.friends[0]} is his best friend . `
);
console.log(person.calculateAge(person.birthYear)); // using dot operator
console.log(person["calculateAge"](person["birthYear"])); // using brackets
console.log(person.calculateThisAge());
console.log(person.calculateAndStoreAgeInObject());
console.log(person.age);

console.log(
  `${person.firstname} is a ${person.age} years old ${
    person.job
  } , and he has ${
    person.hasDriversLicence == true ? "a" : "not"
  } driver's license .`
);
