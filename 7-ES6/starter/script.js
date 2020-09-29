// let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/* 
// Blocks and IIFEs
{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(c);
// console.log(a + b);

(function () {
    var d = 4;
})();
// console.log(d);
*/

/*
// Strings
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 Template Literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName}\n`.repeat(5));
*/

/*
// Arrow Functions
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

// ES6
const ages6 = years.map(el => 2016 - el);
console.log(ages6);

// Arrow functions 2 *this keyword

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    },
    clickMe2: function() {
        var self = this; // Delegate 'this' to inner function
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
// box5.clickMe();
// Output: This is box number undefined and it is undefined
// Because, this keyword in object method points to parent object 
// but, this keyword in inner function always points to global object

// box5.clickMe2();
// Output: This is box number 1 and it is green

// ES6
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
// box6.clickMe();
// Output: This is box number 1 and it is green
// In ES6, this in inner function of method always points to 
// surrounding object lexically that is inner -> outer direction 

var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
// box66.clickMe();
// Output: This is box number undefined and it is undefined
// this keyword for object method written in arrow function points to
// global object, that is surrounding object = global object

// this keyword assigned using bind
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends(friends);

// ES6
// Lexical this keyword
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}
new Person('Mary').myFriends6(friends);
*/

/*
let john = ['John', 26];
const [name, age] = john;
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName: var1, lastName: var2} = obj;
console.log(var1);
console.log(var2);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirementAge] = calcAgeRetirement(1985);
console.log(age2, retirementAge);
*/

// Arrays
const boxes = document.querySelectorAll('.box');

// ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(el => {
    el.style.background = 'dodgerblue';
});
*/

/*
// ES6
const boxes6 = Array.from(boxes);
for(let i of boxes6) {
    i.style.background = 'burlywood';
}
console.log(boxes6);
*/

// ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        // skip this iteration
        break;
    }

    boxesArr5[i].textContent = 'I changed to blue';
}
*/

/*
// ES6
const boxesArr6 = Array.prototype.slice.call(boxes);
for(const cur of boxesArr6) {
    if(cur.className === 'box blue') {
        continue;
    }
    cur.textContent = 'I changed to orange';
}
*/

/*
// Spread operator
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5 Pass array to this function
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, [18, 30, 12, 22]);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box');
const all = [h, ...boxes1];
Array.from(all).forEach(cur => cur.style.color = 'purple');
// console.log(all);
*/

// Rest parameters

/*
// ES5
function isFullAge5() {
    console.log(arguments);

    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(cur => {
        console.log((2016 - cur) >= 18);
    });
}

// isFullAge5(1990, 1999, 1965); // Returns Array like structure

// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));

}

isFullAge6(1990, 1999, 1965, 2016, 1987); // Returns Array


// ES5
function isFullAge5(limit) {
    console.log(arguments);

    // Get all elements except the first one
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(cur => {
        console.log((2016 - cur) >= limit);
    });
}

// isFullAge5(16, 1990, 1999, 1965); // Returns Array like structure

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));

}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987); // Returns Array
*/

/*
// Maps

const question = new Map();
question.set('question', 'What is the official name pf the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

for(const [key, value] of question.entries()) {
    if(typeof key === 'number') {
        console.log(`${key} is set to value ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

// No need of if else condition
console.log(question.get(ans === question.get('correct')));

*/

// Classes
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    console.log(this.yearOfBirth);
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        console.log('//ES6');
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
*/

/*
// Sub class

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    console.log(this.yearOfBirth);
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

// Sub class
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        console.log('//ES6');
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
};

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/

// ES6 Challenge
class Infra {
    constructor(name, yearOfBuild) {
        this.name = name;
        this.yearOfBuild = yearOfBuild;
    }
}
class Park extends Infra {
    constructor(name, yearOfBuild, numberOfTrees, parkArea) {
        super(name, yearOfBuild);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }

    treeDensity() {
        const treeDensity = this.numberOfTrees / this.parkArea;
        console.log(`${this.name} has a tree density of ${treeDensity} trees per square km`);
    }    
}

class Street extends Infra {
    constructor(name, yearOfBuild, streetLength) {
        super(name, yearOfBuild);
        this.streetLength = streetLength;
    }
}

const averageAgeOfParks = (...numberOfParks) => {
    let totalAge = 0;
    numberOfParks.forEach(cur => {
        totalAge += ((new Date().getFullYear()) - cur.yearOfBuild);
    });

    const averageAge =  totalAge / numberOfParks.length;

    console.log(`Our ${numberOfParks.length} parks have an average age of ${averageAge} years.`);
}

const parkWithThousandTrees = (...numberOfParks) => {
    const parksWithThousandTrees =  numberOfParks.filter((value) => {
        return value.numberOfTrees > 1000;
    });
    const names = parksWithThousandTrees.map(cur => cur.name);

    if(parksWithThousandTrees.length > 1) {
        console.log(`${names.join(', ')} have more than 1000 trees.`);
    } else {
        console.log(`${names.toString()} has more than 1000 trees.`);
    }
}

const streetTotalAverage = (...numberOfStreets) => {
    let totalLength = 0;
    numberOfStreets.forEach(cur => {
        totalLength += cur.streetLength;
    });

    let averageLength = totalLength / numberOfStreets.length;
    console.log(`Our ${numberOfStreets.length} streets have a total length of ${totalLength} km, with an average of ${averageLength} km.`);
    
}

const streetDetails = (...numberOfStreets) => {
    numberOfStreets.forEach(cur => {
        let size =  (cur.streetLength > 10) ? 'huge' : 
                    (cur.streetLength > 5) ? 'big' : 
                    (cur.streetLength > 2) ? 'normal' : 'small';

        console.log(`${cur.name}, built in ${cur.yearOfBuild}, is a ${size} street.`);
    });
}

// Parks
const p1 = new Park('Green Park', 1990, 950, 2);
const p2 = new Park('National Park', 1975, 7500, 4);
const p3 = new Park('Oak Park', 2003, 5800, 3);

// Streets
const s1 = new Street('Ocean Avenue', 1999, 8);
const s2 = new Street('Evergreen Street', 2000, 1);
const s3 = new Street('4th Street', 2015, 4.5);
const s4 = new Street('Sunset Boulevard', 1982, 12);

// Parks Report
console.log(`----PARKS REPORT----`);
averageAgeOfParks(p1, p2, p3);
p1.treeDensity();
p2.treeDensity();
p3.treeDensity();
parkWithThousandTrees(p1, p2, p3);

// Streets Report
console.log(`----STREETS REPORT----`);
streetTotalAverage(s1, s2, s3, s4);
streetDetails(s1, s2, s3, s4);























