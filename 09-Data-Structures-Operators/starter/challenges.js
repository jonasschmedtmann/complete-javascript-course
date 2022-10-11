'use strict';

//Challenge 1
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
  printGoals(...players) {
    console.log(
      `A total of ${game.scored.length} goals were scored by ${players}`
    );
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, draw, team2 } = game.odds;

//Challenge 2

for (const [goal, name] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${name}`);
}

const gameOddsValues = Object.values(game.odds);
let averageOdd = 0;
for (const odd of gameOddsValues) averageOdd += odd;

averageOdd /= gameOddsValues.length;
console.log(averageOdd);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

//Challenge 3
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

const events = new Set(gameEvents.values());

gameEvents.delete(64);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [time, event] of gameEvents) {
  time <= 45
    ? console.log([`FIRST HALF ${time}: ${event}`])
    : console.log([`SECOND HALF ${time}: ${event}`]);
}

//Challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', function () {
    // separate strings by lines
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for(const [i, row] of rows.entries()) {
      const [first, second] = row.toLowerCase().trim().split('_');
      const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
      console.log(`${output.padEnd(20)}${'❌'.repeat(i + 1)}`);
    }
})