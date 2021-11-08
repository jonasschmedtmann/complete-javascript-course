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

// 1
// const [team1, team2] = [game.players[0], game.players[1]];

const { players } = game;
console.log('Team1: ' + players[0]);
console.log('Team2: ' + players[1]);

//Respuesta curso:
const [players1, players2] = game.players;
console.log(players1, players2);

/*********************** */

//2
const [gk, ...fieldPlayers] = players[0];
console.log('GoalKeeper: ' + gk);
console.log('FieldPlayers: ' + fieldPlayers);

//Respuesta curso:
//Igual

/*********************** */

//3
//const allPlayers = [...game.players[0], ...game.players[1]];
let allPlayers = game.players[0].concat(game.players[1]);
console.log('All Players: ' + allPlayers);

//Respuesta curso
const allPlayers2 = [...players1, ...players2];
console.log(allPlayers2);

/*********************** */

//4
const player1Final = [];

player1Final.push(...players[0]);
player1Final.push('Thiago', 'Coutinho', 'Perisic');
console.log('Final players: ' + player1Final);

//REspuesta curso
const players1Final_2 = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final_2);

/*********************** */

//5
//game = { Team1: game.odds };
game.team1 = 'Team1aaaaa';
console.log(game);

//Respuesta curso
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

/*********************** */

//6
const printGoals = function (...namePlayers) {
  let sum = 0;
  for (let i = 0; i < namePlayers.length; i++) {
    // if (playerGoal.includes(namePlayers[i])) {
    //   playerGoal.push(namePlayers[i]);
    // }
    console.log(namePlayers[i]);
    sum++;
  }
  console.log('Total goals: ' + sum);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//Respuest curso

const printGoals2 = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

/*********************** */

//7

// Respuesta curso.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
