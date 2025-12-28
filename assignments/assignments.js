"use strict";

/*
// Assignment 1 - Values and Variables
let country = "Egypt";
let continent = "Africa";
let population = 119;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
// Assignment 2 - Data Types
let country = "Egypt";
let continent = "Africa";
let population = 119;
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
// Assignment 3 - let, const and var
const country = "Egypt";
const continent = "Africa";
let population = 119;
const isIsland = false;
const language = "Arabic";
population = 120;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
// Assignment 4 - Basic Operators
const country = "Egypt";
const continent = "Africa";
let population = 119;
const isIsland = false;
const language = "Arabic";

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);

console.log(population < 33);

const describtion = country + " is in " + continent + ", and its " + population + " million people speak " + languagecountry, population and capitalCity;
console.log(describtion)country, population and capitalCity;
*/

/*
// Assignment 5 - Strings and Template Literals
const country = "Egypt";
const continent = "Africa";
let population = 119;
const isIsland = false;
const language = "Arabic";

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);

console.log(population < 33);

const describtion = `${country} is in ${continent}, and its ${population} million people speak ${language}`country, population and capitalCity;
console.log(describtion)country, population and capitalCity;
*/

/*
// Assignment 6 - Taking Decisions: if / else Statements
const country = "Egypt";
const continent = "Africa";
let population = 130;
const isIsland = false;
const language = "Arabic";

if (population < 33) {
  console.log(`${country}'s population is ${33 - population} million below average`);
} else {
  console.log(`${country}'s population is ${population - 33} million above average`);
}
*/

/*
// Assignment 7 - Type Conversion and Coercion
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> "617"
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143
*/

/*
// Assignment 8 - Equality Operators: == vs. ===
const numNeighbours = Number(prompt("How many neighbour countries does your contry have?"));
if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");
*/

/*
// Assignment 9 - Logical Operators
const country = "Egypt";
const continent = "Africa";
let population = 130;
const isIsland = false;
const language = "Arabic";

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/

/*
// Assignment 9 - Logical Operators
const language = "arabic";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

/*
// Assignment 10 - The Conditional (Ternary) Operator
const country = "Egypt";
let population = 130;

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);
*/

/*
// Assignment 11 - Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeEgypt = describeCountry("Egypt", 119, "Cairo");
const describeSpain = describeCountry("Spain", 47, "Madrid");
const describeQatar = describeCountry("Qatar", 3, "Doha");

console.log(describeEgypt);
console.log(describeSpain);
console.log(describeQatar);
*/

/*
// Assignment 12 - Functions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageEgypt1 = percentageOfWorld1(119);
const percentageSpain1 = percentageOfWorld1(47);
const percentageQatar1 = percentageOfWorld1(3);

console.log(percentageEgypt1);
console.log(percentageSpain1);
console.log(percentageQatar1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percentageEgypt2 = percentageOfWorld2(119);
const percentageSpain2 = percentageOfWorld2(47);
const percentageQatar2 = percentageOfWorld2(3);

console.log(percentageEgypt2);
console.log(percentageSpain2);
console.log(percentageQatar2);
*/

/*
// Assignment 13 - Arrow Functions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageEgypt1 = percentageOfWorld1(119);
const percentageSpain1 = percentageOfWorld1(47);
const percentageQatar1 = percentageOfWorld1(3);

console.log(percentageEgypt1);
console.log(percentageSpain1);
console.log(percentageQatar1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percentageEgypt2 = percentageOfWorld2(119);
const percentageSpain2 = percentageOfWorld2(47);
const percentageQatar2 = percentageOfWorld2(3);

console.log(percentageEgypt2);
console.log(percentageSpain2);
console.log(percentageQatar2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentageEgypt3 = percentageOfWorld2(119);
const percentageSpain3 = percentageOfWorld2(47);
const percentageQatar3 = percentageOfWorld2(3);

console.log(percentageEgypt3);
console.log(percentageSpain3);
console.log(percentageQatar3);
*/

/*
// Assignment 14 - Functions Calling Other Functions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world`;
}

const describeEgypt = describePopulation("Egypt", 119);
const describeSpain = describePopulation("Spain", 47);
const describeQatar = describePopulation("Qatar", 3);

console.log(describeEgypt);
console.log(describeSpain);
console.log(describeQatar);
*/

/*
// Assignment 15 - Introduction to Arrays
const populations = [119, 47, 3, 57];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/

/*
// Assignment 16 - Basic Array Operations (Methods)
const neighbours = ["Greece", "KSA", "Sudan", "Libya"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

neighbours[neighbours.indexOf("KSA")] = "Kingdom of Saudi Arabia";
*/

/*
// Assignment 17 - Introduction to Objects
const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 119,
  neighbours: ["Greece", "KSA", "Sudan", "Libya"],
};
*/

/*
// Assignment 18 - Dot vs. Bracket Notation
const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "arabic",
  population: 119,
  neighbours: ["Greece", "KSA", "Sudan", "Libya"],
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry["population"] -= 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
*/

/*
// Assignment 19 - Object Methods
const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "arabic",
  population: 119,
  neighbours: ["Greece", "KSA", "Sudan", "Libya"],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },
  // checkIsland: function () {
  //   this.isIsland = this.neighbours.length === 0;
  // },
  // !=======================================================================
  // !============================== IMPORTANT ==============================
  // !=======================================================================
  checkIsland: function () {
    this.isIsland = !Boolean(this.neighbours.length);
  },
  // !=======================================================================
  // !============================== IMPORTANT ==============================
  // !=======================================================================
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/

/*
// Assignment 20 - Iteration: The for Loop
for (let rep = 1; rep <= 50; rep++) {
  console.log(`Voter number ${rep} is currently voting`);
}
*/

/*
// Assignment 21 - Looping Arrays, Breaking and Continuing
const populations = [119, 47, 3, 57];

const percentages = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]));
}

console.log(percentages);
*/

/*
// Assignment 22 - Looping Backwards and Loops in Loops
const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/

/*
// Assignment 23 - The while Loop
const populations = [119, 47, 3, 57];

const percentages = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let i = 0;
while (i < populations.length) {
  percentages.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages);
*/

/* Coding Challenge #1 Section 5
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days . . . 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

Brainstorming
1) Understanding The Problem
  1. What is the repeated value? Answer: "... [temp]°C in [day] days "

2) Breaking up into sub-problems
  1. Make an empty string
  2. Loop on the array
  3. Add the iterating value to the empty string
  4. End up with "..."

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
function printForecast(temps) {
  let forecast = "";
  for (let i = 0; i < temps.length; i++) {
    forecast += `... ${temps[i]}°C in ${i + 1} days `;
  }
  forecast += "...";
  console.log(forecast);
}
printForecast(temps1);
printForecast(temps2);
*/

/* Coding Challenge #2 Section 5
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]

Brainstorming
1) Breaking up into sub-problems
  - Declare a variable called totalHours.
  - Declare a variable called max.
  - Declare a variable called workedDays.
  - Make a loop to calculate the total of hours [1], the max value [3], and no zero days [4].
  - Use this sum variable to calculate the average [2] and whether the week was full-time [5].
*/

/*
const hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

function calculations(arr) {
  if (arr.length !== 7) return "Please enter 7 days";

  let totalHours = 0;
  let mostHours = arr[0];
  let workedDays = 0;

  for (let i = 0; i < arr.length; i++) {
    totalHours += arr[i];
    if (arr[i] > mostHours) mostHours = arr[i];
    if (arr[i] !== 0) workedDays++;
  }

  const average = (totalHours / arr.length).toFixed(1);
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const maxDay = weekDays[arr.indexOf(mostHours)];
  const fullTime = totalHours >= 35;

  return {
    totalHours: totalHours,
    averageDailyHours: average,
    theDayMostHoursWorked: maxDay,
    daysWorked: workedDays,
    fullTime: fullTime,
  };
}

console.table(calculations(hours));
*/

// Data Structures, Modern Operators and Strings
const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: ["computer science", "programming", "algorithms", "data structures", "java", "math", "software", "engineering"],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman (Contributor)"],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: ["computer science", "programming", "javascript", "software", "engineering"],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: ["computer science", "computer systems", "programming", "software", "C", "engineering"],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: ["computer science", "operating systems", "programming", "software", "C", "Java", "engineering"],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: ["computer science", "compilers", "engineering", "interpreters", "software", "engineering"],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/*
// Assignment 24 - Destructuring Arrays
// 1
const [firstBook, secondBook] = books;

// 2
const [, , thirdBook] = books;

// 3
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
const [[, rating], [, ratingsCount]] = ratings;

// 4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
*/

/*
// Assignment 25 - Destructuring Objects
// 1
const { title, author, ISBN } = books[0];

// 2
const { keywords: tags } = books[0];

// 3
const { language, programmingLanguage = "Unknown" } = books[6];

// 4
let bookTitle = "unknown";
let bookAuthor = "unknown";
({ title: bookTitle, author: bookAuthor } = books[0]);

// 5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// 6
function printBookInfo({ title, author, year = "year unknown" }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({ title: "Algorithms", author: "Robert Sedgewick", year: "2011" });
printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });
*/

/*
// Assignment 26 - The Spread Operator

// 1
const bookAuthors = [...books[0].author, books[1].author];

//2
function spellWord(word) {
  console.log(...word);
}
spellWord("JavaScript");
*/

/*
// Assignment 27 - Rest Pattern and Parameters
// 1
const [mainKeyword, ...rest] = books[0].keywords;

// 2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// 3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}
printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
*/

/*
// Assignment 28 - Short Circuiting (&& and ||)
// 1
function hasExamplesInJava(book) {
  return book.programmingLanguage === "Java" || "no data available";
}
console.log(hasExamplesInJava(books[1]));

// 2
for (let i = 0; i < books.length; i++) {
  console.log(books[i].onlineContent && `"${books[i].title}" provides online content`); // ! not this way
  books[i].onlineContent && console.log(`"${books[i].title}" provides online content`); // but this way
}
*/

/*
// Assignment 29 - The Nullish Coalescing Operator (??)
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ?? console.log(`"${books[i].title}" provides no data about its online content`);
}
*/

/*
// Assignment 30 - Logical Assignments Operators
// 1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

// 2
console.log(books);
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2); // ! Very Important
}
console.log(books);
*/

/*
// Challenge 1 - Section 9
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
function printGoals(...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(players.length);
}
printGoals("Davis", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7
// * My solution
console.log((team1 < team2 && "Team 1 is more likely to win") || (team2 < team1 && "Team 2 is more likely to win"));

// * Jonas solution
team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");
*/

/*
// Assignment 31 - Looping Arrays: The for-of Loop
// 1
let pageSum = 0;
for (const { pages } of books) {
  pageSum += pages;
}
console.log(pageSum);

// 2
const allAuthors = [];
for (const { author } of books) {
  typeof author === "string" ? allAuthors.push(author) : allAuthors.push(...author);
}
console.log(allAuthors);

// 3
for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}
*/

/*
// Assignment 32 - Looping Arrays: The for-of Loop
// 1
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];
// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

// 2
const pages = 880;
const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};
console.log(newBook2);
*/

/*
// Assignment 33 - Optional Chaining (?.)
const pages = 880;
const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};

function getFirstKeyword(book) {
  return book.keywords?.[0];
}

console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2));
*/

// Assignment 34 - Looping Objects: Object Keys, Values and Entries
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}

for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
  entries[index].push(value);
}

console.log(entries);

const entries2 = Object.entries(books[0].thirdParty.goodreads);

console.log(entries2);
