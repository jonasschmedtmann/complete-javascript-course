'use strict';


// create an object
const martha = {
  // Person's first name
  firstName: 'Martha',
  
  // Person's last name
  lastName: 'Smith',
  
  // Person's birth year
  birthYear: 1979,
  
  // Person's job title
  job: 'teacher',
  
  // Array of the person's friends' names
  friends: ['Michael', 'Peter', 'Steven'],
  
  // Boolean indicating if the person has a driver's license
  hasDriversLicense: true,
  
  /**
   * Calculates the age of the person based on the birth year and the year 2037.
   * Updates the age property of the object and returns the calculated age.
   * @returns {number} The calculated age of the person
   */
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  }
};
  /**
   * Calculates the age of the person based on the birth year and the year 2037.
   * Updates the age property of the object and returns the calculated age.
   */
  
  


martha.calcAge();





