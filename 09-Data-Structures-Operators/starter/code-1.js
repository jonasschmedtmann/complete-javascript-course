const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

let [players1, players2] = game.players;

//   console.log(players1);

let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

let allPlayers = [...players1, ...players2];

// console.log(allPlayers);

let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// console.log(players1Final);

let {team1, x: draw, team2} = game.odds;

// console.log(team1, draw, team2);

const printGoals = (...players) => {
console.log(players.length + " Goals were scored!");
}

// printGoals(game.scored);

for (const [i, player] of game.scored.entries()){
  console.log(`Goal ${i+1} scored by ${player}`);
}

let total = 0;
const odds = Object.values(game.odds)
for (const odd of odds ){
total += odd;
}
console.log(total/odds.length);

for(const [team, odd] of Object.entries(game.odds))
  team === "x" ? console.log(`Odd of draw: ${odd}`) : console.log(`Odd of victory ${game[team]}: ${odd}`);;




// Sets and Maps, new data types from ES6
const myArr = [1,1,2,2,3,3,4,4,5,5];
const uniqueArr = [...new Set(myArr)];

console.log(uniqueArr); // returns [1,2,3,4,5]

const myMap = new Map();
myMap.set(1, "one").set(2, "two").set(3, "three").set("four", 4);

// quickly convert an object to a map
const myObj = {
  1: "one",
  2: "two",
  three: 3
}

const objToMapConversion = new Map(Object.entries(myObj))

console.log(objToMapConversion);

const question1 = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [false, "That is not the right answer"],
  [true, "that is the right answer"]
]);

// an object that stores questions and answers for a quiz
const quiz = {
  questOne: new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "Javascript"],
    ["correct", 3],
    [false, "That is not the right answer"],
    [true, "that is the right answer"]
  ]),
  questTwo: new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "Javascript"],
    ["correct", 3],
    [false, "That is not the right answer"],
    [true, "that is the right answer"]
  ]),
  questThree: new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "Javascript"],
    ["correct", 3],
    [false, "That is not the right answer"],
    [true, "that is the right answer"]
  ]),

}

// a loop that will ask all of the questions from the "quiz" object
// for(const question of Object.values(quiz)){
//   console.log(question);
//   const answer = Number(prompt(`${question.get("question")}
//   1. ${question.get(1)}
//   2. ${question.get(2)}
//   3. ${question.get(3)}
//   `))

//   alert(question.get(question.get("correct") === answer));
// }


// code challenge #4
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

let events = [...new Set(gameEvents.values())]
console.log(events);

gameEvents.delete(64);

console.log(gameEvents);

let eventTimes = [...gameEvents.keys()]

console.log("next");

let differenceTotal = 0
for (let i = eventTimes.length - 1; i > 0; i--) {
  const num1 = eventTimes[i];
  const num2 = eventTimes[i-1];
  differenceTotal += num1-num2
  
}

console.log(90/eventTimes.length);

for(const [time, event] of gameEvents.entries()){
  console.log(`${time < 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${time}: ${event}`);
}

let message = "hello you all, you all are so great. you all have a nice day."

console.log(message.replaceAll("you", "me"));
// before replaceAll existed
console.log(message.replaceAll(/you/g, "oldWay"));

// code challenge #4:
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const userInput = document.querySelector("textarea");
// const button = document.querySelector("button");

// button.addEventListener("click", function(){
//   let word = userInput.value;
//   let wordArr = word.split("\n")
//   wordArr.forEach((word, i) => {
//     let lowerCase = word.toLowerCase().split("");
//     lowerCase[lowerCase.indexOf("_")+1] = lowerCase[lowerCase.indexOf("_")+1].toUpperCase();
//     let finishedWord = lowerCase.join("").replace("_","").trim().padEnd(20, " ") + "✅".repeat(i+1)
//     console.log(finishedWord);
//   })
// })

// button.addEventListener("click", function(){
//   let text = userInput.value;
//   let rows = text.split("\n");

//   rows.forEach((row, i) => {
//     const [first, second] = row.trim().toLowerCase().split("_");
//     const finalWord = (first+second.replace(second[0], second[0].toUpperCase())).padEnd(20, " ") + "✅".repeat(i+1)
//     console.log(finalWord);
//   })
// })

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


const flightsArr = flights.split("+");
console.log(flightsArr);
flightsArr.forEach(flight => {
  const [event, from, to, time] = flight.split(";");
  const formattedEvent = event.replaceAll("_"," ");
  const formattedFrom = from.slice(0,3).toUpperCase();
  const formattedTo = to.slice(0,3).toUpperCase();
  const formattedTime = time.replace(":","h");
  const isDelayed = formattedEvent.includes("Delayed") ? "🛑" : "";
  const message = `${isDelayed} ${formattedEvent} from ${formattedFrom} to ${formattedTo} (${formattedTime})`.padStart(50," ")
  console.log(message);
});





























