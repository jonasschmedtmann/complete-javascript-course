// string method practice: format string to look correct
const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

/* expect output: 
      Delayed Departure from FAO to TXL (11h25)
                Arrival from BRU to FAO (11h45)
        Delayed Arrival from HEL to FAO (12h05)
              Departure from FAO to LIS (12h30)
*/

const displayFlights = function (flightData) {
  for (const flight of flightData.split('+')) {
    let [action, from, to, time] = flight.split(';');

    time = time.replace(':', 'h');

    action = action.replaceAll('_', ' ').trimStart();
    if (action.includes('Delayed')) {
      action = `🛑 Delayed`
    }

    const getCode = (flightCode) => flightCode.slice(0, 3).toUpperCase();

    const output = `${action} from ${getCode(from)} to ${getCode(to)} (${time})`.padStart(40);

    console.log(output)
  }
}

displayFlights(flights)



/*  // Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

const underCamelTextArea = () => {
  const text = document.querySelector('textarea').value.toLowerCase();
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.trim().split('_');
    const camelString = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    const finalOutput = camelString.padEnd(20) + '✅'.repeat(i + 1);
    console.log(finalOutput);
  }
}

document.querySelector('button').addEventListener('click', underCamelTextArea);

// const underToCamel = (...arrOfStrings) => {
//   for (const strings of arrOfStrings) {
//     for (let i = 0; i < strings.length; i++) {
//       const str = strings[i];
//       let [firstUnder, secondUnder] = str.toLowerCase().split('_');
//       const firstWord = firstUnder[0].toLowerCase() + firstUnder.slice(1);
//       const secondWord = secondUnder[0].toUpperCase() + secondUnder.slice(1);
//       const camel = firstWord + secondWord + ' ' + '✅'.repeat(i + 1);
//       console.log(camel);
//     }
//   }
// }

// const tests = ['underscore_case', 'first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure'];

// underToCamel(tests);




/*  // Coding Challenge #3


Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


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

// 1. Create array 'events' with no duplicates
const events = [...new Set(gameEvents.values())];
console.log(events)

// 2. remove yellow card from min 64
gameEvents.delete(64);

// 3. determine how often an event happened and log it to console
const totalTimePlayed = [...gameEvents.keys()].sort().pop();

console.log(`An event happened, on average, every ${totalTimePlayed / gameEvents.size} minutes`);

// 4. log whether each event was part of the first or second half of the game
for (const [mins, event] of gameEvents) {
  const whichHalf = mins <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${whichHalf} HALF] : ${event}`)
}


*/

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

/*  // Coding Challenge #2


Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
// 1. print each player name to console along with the goal number from game.scored array
const printScored = (...players) => {
  for (let i = 0; i < players.length; i++) {
    console.log(`Goal ${i + 1} by: ${players[i]}`);
  }
}

printScored(...game.scored);

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// 2. use loop to calculate avg odd and log to console
const odds = Object.values(game.odds);
let total = 0;
for (const odd of odds) {
  total += odd;
}
const avgOdd = total / odds.length;

// another solution using += and /=
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;


// 3. Print the 3 odds to the console in formatted way:
for (const [teamN, odd] of Object.entries(game.odds)) {
  const teamString = teamN === 'x' ? 'draw' : `victory ${game[teamN]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}


// BONUS: create obj 'scorers' contianing names of players who scored as props and # of goals scored as values. 
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};

for (const player of game.scored) {
  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}

console.log(scorers);
// console.log(Object.entries(game.scored))[ [0: __], [1: __], ...etc ]
// console.log(game.scored); [ _, _, ...etc ]

*/

/* // Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (above). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


// 1. Player array for each team 
const [players1, players2] = game.players;

// 2. assign first player in each team as goalkeeper
const [gkTeam1, ...fieldPlayersTeam1] = players1;

// 3. create array with all players from both teams
const allPlayers = [...players1, ...players2];

// 4. create array players1Final with all team1 players + 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = players1.push('Thiago', 'Coutinho', 'Perisic');

// 5. using games.odds object, create one variable for each odd (called 'team1', 'draw', 'team2')
const { team1, x: draw, team2 } = game.odds;

// 6. create function 'printGoals' that takes in player names and prints each to console along with # of goals scored in total by the team
const printGoals = (...players) => {
  const totalGoals = players.length;
  for (const player of players) {
    console.log(player);
  }
  console.log(totalGoals);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// 7. Print to console which team is more likely to win (team with LOWER odd is more liely to win)

team1 < team2 && console.log(`${game.team1} is more likely to win`); // game.odds.teamN already destructured on step 5
team2 < team1 && console.log(`${game.team2} is more likely to win`);
team1 === team2 && console.log('Tied odds of winning');
*/