// Lecture: Function constructor, Prototypes, Objects
function repeatProtoypes() {
    let Person = function (name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    };
    Person.prototype.calculateAge = function () {
        console.log(2019 - this.yearOfBirth);
    };
    Person.prototype.job = 'developer';

    // Inherits from constructor prototype property
    let jakub = new Person('Jakub', 1993);
    let martin = new Person('Martin', 1992);

    jakub.calculateAge();                               // 23
    martin.calculateAge();                              // 24
    console.log(jakub.job);                             // developer
    console.log(jakub.__proto__ === Person.prototype);  // true
    console.log(jakub.hasOwnProperty('job'));           // false
    console.log(jakub instanceof Person);               // true
    console.info([1, 2, 3]);                            // (3) [1, 2, 3]
    console.dir([1, 2, 3]);                             // Array(3)
};

// Lecture: Object.create
function repeatObjectCreate() {
    let personProto = {
        calculateAge: () => {
            console.log(2019 - this.yearOfBirth);
        }
    }
    // Inherits directly from first argument
    let john = Object.create(personProto);
    john.name = 'john';
    john.yearOfBirth = 1990;

    let jane = Object.create(personProto, {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1980 }
    });

    console.log(john, jane)
}
/**
 * Result: Object.create has better performance results for
 * creating big data structures that function constructor pattern.
 */