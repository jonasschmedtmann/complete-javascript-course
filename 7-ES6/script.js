

/******************************************************************************
 *                             Lecture 104: Let and Const
 *****************************************************************************/

//  //ES5
//  var name5 = 'Jane Smith';
//  var age5 = 23;
//  name5 = 'Jane Miller';
//  console.log(name5);

//  //ES6 
//  const name6 = 'Jane Smith';
//  let age6 = 23;
//  name6 = 'Jane Miller';
//  console.log(name6);

//  //ES5 
//  function driversLicense5(passedTest){
//      if(passedTest){
//          //console.log(firstName);
//          var firstName = 'John';
//          var yearOfBirth = 1990;
//      }
//      console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
//  }

//  driversLicense5(true);

//  //ES6 - Doesn't work
//  function driversLicense6(passedTest){
//     if(passedTest){
//         let firstName = 'John';
//         const yearOfBirth = 1990;
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
// }

// //ES6 - Propert
//  function driversLicense6(passedTest){
    
//     console.log(firstName); // can not use - temporal dead zone
//     let firstName;
//     const yearOfBirth = 1990;
    
//     if(passedTest){
//         firstName = 'John';
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
// }

// driversLicense6(true);

// let i = 23;

// for(let i = 0; i < 5; i++){
//     //console.log(i);
// }

// console.log(i);


/******************************************************************************
 *                       Lecture 105: Blocks and IIFEs
 *****************************************************************************/

// //ES5
// (function(){
//     var c = 3;
// })();

// //ES6
//  {
//      const a = 1;
//      let b = 2;
//  }


 /*****************************************************************************
 *                         Lecture 106: Strings
 *****************************************************************************/

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calcAge(year){
//     return 2019 - year;;
// }

// //ES5 
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// //ES6 
// console.log(`this is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.startsWith('j'));
// console.log(n.endsWith('h'));
// console.log(n.includes('hn S'));


 /*****************************************************************************
 *                      Lecture 107 Arrow Functions: 
 *****************************************************************************/

// const years = [1990, 1965, 1982, 1937];

// //ES5
// var ages5 = years.map(function(el){
//     return 2016 - el;
// });

// console.log(ages5);

// //ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) =>{
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`;
// });
// console.log(ages6);

  /****************************************************************************
 *                 Lecture 108: Arrow Functions 2 - Lexical 'this'
 *****************************************************************************/

// //ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         })
//     }
// }

// box5.clickMe();

// //ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.green').addEventListener('click', () =>{
//             alert(`This is box number ${this.position} and it is ${this.color}`);
//         })
//     }
// }

// box6.clickMe();

// function Person(name){
//     this.name = name;
// }

// //ES5
// Person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends5 = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends5);

// //ES6
// Person.prototype.myFriends6 = function(friends){
//     var arr = friends.map( el => `${this.name} is friends with ${el}`);
//     console.log(arr);
// }

// var friends6 = ['Sally', 'Sue', 'Linda'];
// new Person('George').myFriends6(friends6);

 /****************************************************************************
 *                       Lecture 109: Destructuring
 *****************************************************************************/

//  var john = ['John', 26];

// // ES5
// var name5 = john[0];
// var age5 = john[1];
// console.log(name5);
// console.log(age5);

// // ES6
// const [name6, age6] = john;
// console.log(name6);
// console.log(age6);

// const obj = { 
//     firstName: 'John',
//     lastName: 'Smith',
// };

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);

// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [c, d] = calcAgeRetirement(1992);
// console.log(c);
// console.log(d);

  /****************************************************************************
 *                         Lecture 110: Arrays
 *****************************************************************************/

//const boxes = document.querySelectorAll(`.box`);

// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// });

// for(var i = 0; i < boxesArr5.length; i++){

//   if(boxesArr5[i].className === 'box blue'){
//     continue;
//   } else{
//     boxesArr5[i].textContent = 'I changed to blue';
//   }

// }

// // ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(element => {
//   element.style.backgroundColor = 'dodgerblue';
// });

// for(const cur of boxesArr6){
//   if(cur.className.includes('blue')){
//     continue
//   }
//   cur.textContent = 'I changed to blue!';
// }

// var ages = [12, 17, 8, 21, 14, 11];

// //ES5
// var full = ages.map(function(cur){
//   return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));


  /****************************************************************************
 *                      Lecture 111: Spread Operator
 *****************************************************************************/

//  function addFourAges(a,b,c,d){
//    return a + b + c + d;
//  }

//  var sum1 = addFourAges(18, 30, 12, 21);
//  console.log(sum1);

//  var ages = [18, 30, 12, 21];

// // ES5
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

//const h = document.querySelector('h1');
//const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes];
// var allArray = Array.from(all);
// allArray.forEach(element => {
//   element.style.color = `purple`;
// });

  /****************************************************************************
 *                      Lecture 112: Rest Parameters 
 *****************************************************************************/

//  // ES5
//  function isFullAge5(){
//   var argsArr = Array.prototype.slice.call(arguments);
//   argsArr.forEach(function(cur){
//     console.log((2016 - cur) >= 18);
//   });
// }
// isFullAge5(1990, 1999, 1965);2
//  isFullAge5(1990, 1999, 1965, 2016, 1987);

// //ES6
// function isFullAge6(...years){
//  years.forEach(el => {
//   console.log((new Date().getFullYear() - el) >= 18);
//  });
// }

// isFullAge6(1990,1999,1965,2016,1987);

  /****************************************************************************
 *                     Lecture 113: Default Parameters
 *****************************************************************************/

  /****************************************************************************
 *                          Lecture 114: Maps
 *****************************************************************************/

 // const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer!');
// question.set(false, 'Wrong, please try again!');

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

  /****************************************************************************
 *                          Lecture 115: Classes
 *****************************************************************************/

// class Person {
  
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calculateAge(){
//     return new Date().getFullYear() - this.yearOfBirth;
//   }

//   static greeting(){
//     console.log('Hey There');
//   }
// }

// const mine = new Person('Steve', 1992, 'Engineer');
// console.log(mine.calculateAge());
// Person.greeting();

 /****************************************************************************
 *                     Lecture 116: Classes with Subclasses
 *****************************************************************************/

//  // ES5 
//  var Person5 = function(name, yearOfBirth, job){
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//  }

//  Person5.prototype.calculateAge = function(){
//    return new Date().getFullYear() - this.yearOfBirth;
//  }

//  var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
//    Person5.call(this, name, yearOfBirth, job);
//    this.olympicGames = olympicGames;
//    this.medals = medals;
//  }

// Athlete5.prototype = Object.create(Person5.prototype);
// Athlete5.prototype.olympicGame = function(){
//   return this.olympicGames;
// }

// var steveAthlete5 = new Athlete5('Steve', 1992, 'Engineer', 'sportsball', 5);
// console.log(steveAthlete5.calculateAge());
// console.log(steveAthlete5.olympicGame());


// // ES6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name; 
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;    
//   }

//   calculateAge(){
//     return new Date().getFullYear() - yearOfBirth;
//   }

//   static greeting(){
//     console.log('Hey there!');
//   }
// }

// class Athlete6 extends Person6 {
//   constructor (name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job)
//     this.olympicGames = olympicGames;
//     this.medals = medals;      
//   }
    
//   olympicGame(){
//     return this.olympicGames;
//   }

//   medals(){
//     return this.medals;
//   }
// }  

// const steveAthlete6 = new Athlete6('Steve', 1992, 'Engineer', 'sportsball', 5);
// console.log(steveAthlete6.olympicGame());

  /****************************************************************************
 *                    Lecture 117: Coding Challenge 8
 *****************************************************************************/

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElement {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }

  getName(){
    return this.name;
  }

  getBuildYear(){
    return this.buildYear;
  }
}

class Park extends TownElement {
  constructor(name, buildYear, numberOfTrees, parkArea){
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.parkArea = parkArea;
  }

  getNumberOfTrees(){
    return this.numberOfTrees;
  }

  getParkArea(){
    return this.parkArea;
  }
}

const StreetClassification = Object.freeze({
  TINY:   { name: "tiny" },
  SMALL:  { name: "small" },
  NORMAL: { name: "normal" },
  BIG:    { name: "big" },
  HUGE:   { name: "huge" },
});

class Street extends TownElement {
  constructor(name, buildYear, length, classification = StreetClassification.NORMAL){
    super(name, buildYear);
    this.name = name;
    this.buildYear = buildYear;
    this.length = length;
    this.classification = classification;
  }

  getLength(){
    return this.length;
  }

  getClassification(){
    return this.classification;
  }
}

const parks = [
  new Park('Point Pleasent', 1866, 465, 4665),
  new Park('Halifax Common', 1749, 816, 524),
  new Park('Frog Pond', 1908, 1230, 652)
];

const streets = [
  new Street('Robie', 1882, 7, StreetClassification.BIG),
  new Street('Bayers', 1958, 3),
  new Street('Mica', 2016, 1, StreetClassification.SMALL),
  new Street('Alabaster', 2014, 3, StreetClassification.SMALL),
  new Street('Titanium', 2017, 2, StreetClassification.TINY)
];

console.log(`----------------------------------------------------------------`)
console.log('                      Town Report');
console.log(`----------------------------------------------------------------`)
console.log('1. Parks');
let totalParkAge = 0;
let over1000 = [];
parks.forEach(p => {
  console.log(`Name: ${p.getName()}, Tree Density: ${p.getNumberOfTrees() / p.getParkArea()}`);
  totalParkAge += (new Date().getFullYear() - p.getBuildYear());
  if(p.getNumberOfTrees() > 1000){
    over1000.push(p);
  }
});
console.log(`Average Park Age: ${totalParkAge / parks.length}`);
console.log(`Park(s) with over 1000 trees:`);
over1000.forEach(e => {
  console.log(e.getName());
});
console.log(`________________________________________________________________`);
console.log('2. Streets');
let totalLength = 0;
streets.forEach(s => {
  console.log(`Name: ${s.getName()}, Size: ${s.getClassification().name}`);
  totalLength += s.getLength();
});
console.log(`Streets Average Length: ${totalLength / streets.length}`)
console.log(`Streets Total Length: ${totalLength}`)
console.log(`________________________________________________________________`)

  /****************************************************************************
 *                             Lecture 118: 
 *****************************************************************************/
