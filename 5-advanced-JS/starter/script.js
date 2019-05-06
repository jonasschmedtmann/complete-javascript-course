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

// Lecture: Object reference - do not confuse with inheritence
function objectReference() {
    let jakub = {
        name: 'Jakub',
        age: 26
    }
    // works as assignment for primitives not objects
    let martin = jakub;
    martin.name = 'Martin';
    console.log(jakub, martin);                         // same name

    let age = 26;
    function change(a, b) {
        a = 30;
        b.age = 30;
    }
    change(age, jakub);                                 // primitive not changed, object changed
    console.log(age, martin);
}

// Lecture: First Class Function
function repearFirstClassFunction() {
    let years = [1990, 1965, 1937, 2005, 1998];

    function arrCalc(arr, fn) {
        let arrResult = [];
        for (let i = 0; i < arr.length; i++)
            arrResult.push(fn(arr[i]));
        return arrResult;
    }

    function calculateAge(el) {
        return 2019 - el;
    }

    function isFullAge(el) {
        return el >= 18;
    }

    function maxHeartRate(el) {
        if (el >= 18 && el <= 81)
            return Math.round(206.9 - (0.67 * el));
        else
            return -1;
    }

    let ages = arrCalc(years, calculateAge);
    let fullAges = arrCalc(ages, isFullAge);
    let rates = arrCalc(ages, maxHeartRate);
    console.log(ages, fullAges, rates);

    function interviewQuestion(job) {
        if (job === 'designer') {
            return (name) => {
                console.log(name + ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            return (name) => {
                console.log('What subject do you teach, ' + name + '?');
            }
        } else {
            return (name) => {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }
    let teacherQuestion = interviewQuestion('teacher');
    let designerQuestion = interviewQuestion('designer');
    teacherQuestion('John');
    designerQuestion('John');
    interviewQuestion('developer')('Mark');
}