'use strict';

// Data Structures, Modern Operators and Strings

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
//     1. Create one player array for each team (variables 'players1' and 'players2')
//     2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
//     3. Create an array 'allPlayers' containing all players of both teams (22 players)
//     4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
//     5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//     6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
//     7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK 😀

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
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// // 1
// // const [team1, team2] = [game.players[0], game.players[1]];

// const { players } = game;
// console.log('Team1: ' + players[0]);
// console.log('Team2: ' + players[1]);

// //Respuesta curso:
// const [players1, players2] = game.players;
// console.log(players1, players2);

// /******************************************************* */

// //2
// const [gk, ...fieldPlayers] = players[0];
// console.log('GoalKeeper: ' + gk);
// console.log('FieldPlayers: ' + fieldPlayers);

// //Respuesta curso:
// //Igual

// /******************************************************* */

// //3
// //const allPlayers = [...game.players[0], ...game.players[1]];
// let allPlayers = game.players[0].concat(game.players[1]);
// console.log('All Players: ' + allPlayers);

// //Respuesta curso
// const allPlayers2 = [...players1, ...players2];
// console.log(allPlayers2);

// /******************************************************* */

// //4
// const player1Final = [];

// player1Final.push(...players[0]);
// player1Final.push('Thiago', 'Coutinho', 'Perisic');
// console.log('Final players: ' + player1Final);

// //REspuesta curso
// const players1Final_2 = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final_2);

// /*********************** */

// //5
// //game = { Team1: game.odds };
// game.team1 = 'Team1aaaaa';
// console.log(game);

// //Respuesta curso
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// /******************************************************* */

// //6
// const printGoals = function (...namePlayers) {
//   let sum = 0;
//   for (let i = 0; i < namePlayers.length; i++) {
//     console.log(namePlayers[i]);
//     sum++;
//   }
//   console.log('Total goals: ' + sum); //Hacerlo así es tontería porque el total de goles es el tamaño del array.
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //Respuest curso

// const printGoals2 = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// /******************************************************* */

// //7

// // Respuesta curso.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//   Odd of victory Bayern Munich: 1.33
//   Odd of draw: 3.25
//   Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//   {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2
//   }

//   GOOD LUCK 😀

/** (1) */

// for (const [name, value] of game.scored.entries()) {
//   // const open = restaurant.openingHours[day]?.open ?? 'close';
//   console.log(`Goal ${name + 1}: ${value}`);
//   // console.log(`${score}`);
// }

// /** (2) */

// let average = 0;

// for (const odd of Object.values(game.odds)) average += odd;

// average /= Object.values(game.odds).length;
// console.log('Average Odd: ' + average);

// /** (3) */

// for (const [team, odd] of Object.entries(game.odds)) {
//   let resultName = team === 'x' ? 'draw:' : `victory ${game[team]}`;

//   console.log(`Odd of ${resultName} ${odd}`);
// }

// /** (Bonus 4) */

// //Esto es chungo de cojones
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: ⚽ [FIRST HALF] 17: GOAL

// GOOD LUCK 😀

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// /**  //////////////  (1) /////////////////////// */

// const setEvents = new Set(gameEvents.values());
// //const setEvents = [...new Set(gameEvents.values())];

// console.log(setEvents);
// const events = [...setEvents];
// console.log(events);

// /**  //////////////  (2) /////////////////////// */

// gameEvents.delete(64);
// console.log(gameEvents);

// /**  //////////////  (3) /////////////////////// */

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(`An event happened, on average, every ${time / gameEvents.size}`);

// /**  //////////////  (4) /////////////////////// */

// for (const [key, value] of gameEvents) {
//   let str = '';

//   str = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';

//   console.log(`${str} ${key}: ${value}`);
// }

/************************************* ***********/
/*Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
  first_name
Some_Variable
  calculate_AGE
  delayed_departure

  Should produce this output (5 separate console.log outputs):
  underscoreCase ✅
  firstName ✅✅
  someVariable ✅✅✅
  calculateAge ✅✅✅✅
  delayedDeparture ✅✅✅✅✅

  Hints:
    § Remember which character defines a new line in the textarea 😉
    § The solution only needs to work for a variable made out of 2 words, like a_b
    § Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
    § This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

    Afterwards, test with your own test data!

    GOOD LUCK 😀*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// let textName = document.querySelector('textarea');
// const convertButton = document.querySelector('button');

// textName.value = `underscore_case
//   first_name
// Some_Variable
//   calculate_AGE
//   delayed_departure`;

// let textArray = [];

// //Funciona al darle al botón
// const convertText = function () {
//   //console.log(textName);

//   if (textName.value) {
//     let newText = transformText();

//     for (const [i, row] of newText.entries()) {
//       console.log(row.padEnd(20, ' ') + ` ${'#'.repeat(i + 1)}`);
//     }
//   } else {
//     console.log('No hay nada!!');
//   }
// };

// const transformLowerCase = function (textTotransform) {
//   return textTotransform.toLowerCase();
// };

// const transformText = function () {
//   let newText = [];

//   // let rows = transformLowerCase(textName.value);
//   const rows = textName.value.split('\n');

//   for (const row of rows) {
//     //let formatedWord = [];

//     //formatedWord = row.toLowerCase().trim();

//     let [firstPart, secondPart] = row.toLowerCase().trim().split('_');

//     //Primer cáracter en mayúsculas
//     secondPart = secondPart[0].toUpperCase() + secondPart.slice(1);
//     //secondPart = secondPart.replace(secondPart[0], secondPart[0].toUpperCase());

//     newText.push(firstPart + secondPart);
//   }

//   return newText;
// };

// convertButton.addEventListener('click', convertText);

/**
 // String exercise /////////////////
 * //////////////////////////////////////
 */

// Result
// @ Delayed Departure from FAO to TXL (11h25)
//            Arrival from BRU to FAO (11h45)
// @ Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const get_Flights = function () {
  for (const flight of flights.split('+')) {
    getData(flight);
  }
};

const getCode = str => str.slice(0, 3).toUpperCase();

const getData = function (flight) {
  let [status, from, to, time] = flight.split(';');

  if (status[0] === '_') status = status.slice(1);

  status = status.replace('_', ' ');

  from = getCode(from);

  to = getCode(to);

  time = time.replace(':', 'h');

  let formatedFlight = '';

  formatedFlight = `${
    status.includes('Delayed') ? '@' : ''
  } ${status} from ${from} to ${to} (${time})`.padStart(45);

  console.log(formatedFlight);
};

get_Flights();
