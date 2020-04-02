/*
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year: number): number {
    return 2016 - year;
}

console.log(
    `This is ${firstName} ${lastName}. He is ${calcAge(yearOfBirth)} years old.`
);

const n = `${firstName} ${lastName}`;

console.log(n.includes("h"));
console.log(n);
console.log(`${firstName.repeat(5)}`);
*/
///////////////////
//Arrow Functions//
///////////////////
/*
const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el: number): number {
    return 2016 - el;
});
console.log(ages5);

//ES6
let ages6_arrow = years.map(el => 2016 - el);
console.log(ages6_arrow);

let ages6_arrow_1 = years.map(
    (el, index) => `Age element ${index + 1}: ${2016 - el}.`
);
console.log(ages6_arrow_1);

let ages6_arrow_2 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6_arrow_2);

//With arrow functions, the arrow function has access to the 'this' keyword, while the old ES5 way of doing things did not - we created an temporary variable to give the function access to 'this'.

//ES5
var box5 = {
    colour: "Green",
    position: 1,
    clickMe: function() {
        var self = this;

        document.querySelector(".green").addEventListener("click", function() {
            var str =
                "This is box number " +
                self.position +
                " and it is " +
                self.colour;
            alert(str);
        });
    }
};

box5.clickMe();

const box6 = {
    colour: "Blue",
    position: 2,
    clickMe: function() {
        document.querySelector(".blue").addEventListener("click", () => {
            var str =
                "This is box number " +
                this.position +
                " and it is " +
                this.colour;
            alert(str);
        });
    }
};

box6.clickMe();

function Person(name: string) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(
        function(el: number) {
            return this.name + " is friends with " + el;
        }.bind(this)
    );

    console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends: any) {
    const arr = friends.map((el: number) => {
        return `${this.name} is friends with ${el}`;
    });

    console.log(arr);
};

new Person("Mike").myFriends6(friends);
*/
///////////////////
//Destrucuturing///
///////////////////
/*
//ES5
var john = ["John", 26];
var name5 = john[0];
var age5 = john[1];

//ES6

const [name6, age6] = ["John", 26];
console.log(`${name6}, ${age6}.`);

const obj = {
    firstName: "John",
    lastName: "Smith"
};

const { firstName: a, lastName: b } = obj;

console.log(`${a}, ${b}.`);

function calcAgeRetirement(year: number) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(`age: ${age}, retirement in: ${retirement} years.`);
*/
///////////////
//Arrays///////
///////////////
/*
const boxes = document.querySelectorAll(".box");

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current: any) {
    current.style.backgroundColor = "dodgerblue";
});

//ES6
const boxesArr6 = Array.from(boxes);

Array.from(boxes).forEach(
    (current: HTMLElement) => (current.style.backgroundColor = "dodgerblue")
);

//ES5

for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === "box blue") {
        continue;
    }
    boxesArr5[i].textContent = "I change to blue!";
}

//ES6

for (const current of boxesArr6) {
    if (current.className.includes("blue")) {
        continue;
    }
    current.textContent = "I changed to blue";
}

//ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(current: number) {
    return current >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
const ages = [12, 17, 8, 21, 14, 11];

console.log(ages.findIndex(current => current >= 18));
console.log(ages.find(current => current >= 18));
*/
class TownElements {
    constructor(name, buildYear, id) {
        this.name = name;
        this.buildYear = buildYear;
        this.id = id;
    }
}
class Parks extends TownElements {
    constructor(name, buildYear, id, trees, area) {
        super(name, buildYear, id);
        this.area = area;
        this.trees = trees;
    }
    getTreeDensity() {
        return this.trees / this.area;
    }
    getAge() {
        const date = new Date();
        const currentYear = date.getFullYear();
        return currentYear - this.buildYear;
    }
    getName() {
        return this.name;
    }
    getNumberOfTrees() {
        return this.trees;
    }
    static getNum() {
        return this.num;
    }
}
Parks.num = 3;
class Streets extends TownElements {
    constructor(name, buildYear, id, length, classificationKey = 2) {
        super(name, buildYear, id);
        this.classificationList = new Map([
            [0, "tiny"],
            [1, "small"],
            [2, "normal"],
            [3, "big"],
            [4, "huge"]
        ]);
        if (classificationKey >= this.classificationList.size ||
            classificationKey < 0) {
            console.error(`entered size for ${this.name} is invalid`);
        }
        else {
            this.sizeClassification = this.classificationList.get(classificationKey);
            this.length = length;
        }
    }
    getLength() {
        return this.length;
    }
    getName() {
        return this.name;
    }
    getSizeClassification() {
        return this.sizeClassification;
    }
    static getNum() {
        return this.num;
    }
}
Streets.num = 4;
const parkList = [
    new Parks("Dude Chilling Park", 2012, 0, 42, 10000),
    new Parks("Stanley Park", 1888, 1, 500000, 43593837),
    new Parks("Queen Elizabeth Park", 1939, 2, 250000, 5662800)
];
const streetList = [
    new Streets("Commercial Drive", 1911, 0, 7, 3),
    new Streets("Hastings", 1885, 1, 13.4, 4),
    new Streets("Main", 1910, 2, 12, 4),
    new Streets("Davie", 1999, 3, 10, 3)
];
(() => {
    console.log(`---PARKS REPORT---`);
    console.log(`Tree Densities`);
    console.log(`=====`);
    parkList.forEach(park => {
        console.log(park.getName() +
            " has a tree density of " +
            park.getTreeDensity() +
            " per square foot \n");
    });
    console.log(`=====`);
    console.log(`Average Age of Parks: `);
    let totalAge = 0;
    parkList.forEach(park => {
        totalAge += park.getAge();
    });
    const averageStreetAge = totalAge / 4;
    console.log(averageStreetAge);
    console.log(`=====`);
    parkList.forEach(park => {
        park.getNumberOfTrees() > 1000
            ? console.log(`${park.getName()} has more than a thousand trees`)
            : console.log(`${park.getName()} has less than a thousand trees`);
    });
    console.log();
    console.log(`---STREETS REPORT---`);
    console.log(`=====`);
    console.log(`Total and Average length of the streets: `);
    console.log();
    let totalStreetLength = 0;
    streetList.forEach(street => {
        totalStreetLength += street.getLength();
    });
    console.log(`Total street length is ${totalStreetLength} kms`);
    console.log(`Average street length is ${totalStreetLength / streetList.length} kms`);
    console.log(`=====`);
    console.log(`The classifcations of the streets are`);
    console.log();
    streetList.forEach(street => {
        console.log(`${street.getName()} is a ${street.getSizeClassification()} street\n`);
    });
})();
