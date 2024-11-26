'use strict';

//Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],



  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    }
  },
    order (starterIndex, mainIndex ){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex] ];
   },
   orderPasta: function(ing1, ing2, ing3){
     console.log(`Here's is your favourite pasta ${ing1}, ${ing2},${ing3}`);

   },

   orderPizza:function(mainIngredient,...otherIngredients){
             console.log(mainIngredient);
             console.log(otherIngredients);
   }
  };


const { openingHours,name,categories} = restaurant

 console.log(openingHours,name,categories);

 const { openingHours:availability ,name:restaurantName,categories:tags} = restaurant

 console.log(availability,restaurantName,tags);
//Default values 
 const{menuu =[], 
categories:lags=[] }= restaurant
  
console.log(menuu,lags)
  
/*let [main, ,secondary]=restaurant.categories
console.log(main, secondary);
[main, secondary]=[secondary, main];

console.log(main, secondary);

const [starter,main]=restaurant.order(2,0);
console.log([starter,main]);

const menuu =[...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menuu)


//const ingredients=[//prompt("Let's make ingredient one"), 
                  // prompt('ingredient 2'),
                  // prompt('ingredient 3')];

//console.log(ingredients)

//orderPasta.restaurant(...ingredients);

// Spread-Operators 

const newRestaurants ={founder: 'Tobi', ...restaurant,
         foundedIn:1998    
}
console.log(newRestaurants);

const restaurantCopy={...restaurant}
restaurantCopy.name='Risterant'

console.log(restaurant.name)
console.log(restaurantCopy.name)

// Rest Pattern does not the opposite of spread of operators---Collect multiple elements and condense them into an array.
//const [a,b,...others]=[1,2,3,4,5]
//console.log(a,b, others)

const [pizza,,rissoto,...others]=[...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza,rissoto,others)

// Objects
const { sat, ...weekdays}=restaurant.openingHours
console.log(weekdays)

restaurant.orderPizza('mushroom','leaf','ororo','epo');

const add= function(...numbers){
  let sum= 0
  for(let i=0; i< numbers.length;i++ ) sum+= numbers[i]
  console.log(sum)
}
const x= [1,9,3,4,5]
const y= [1,8,3,4,5]
const z= [1,7,3,4,5]
const k= [1,4,3,4,5]

add(...x)

// Rest patterns can be used to write variable name seperated by commas
//Spread patterns can be used where we'll otherwise write values by comma

console.log(3 || 'Jonas')
const guest1= restaurant.Guest? restaurant.Child :10
console.log(guest1)

restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach')
//|| will return the first truthy value
// && will move to the next,till it get to the end.It'll return the first falsy value.

// Nullish -----Does not see "" and 0 as a falsy value.
restaurant.orderKizza=0;
const guests2=restaurant.orderKizza ?? 10;
console.log(guests2)

     // OR OPERATOR
const rest1={
  name:'Capri',
  numGuests:20
}
const rest2={
  name: 'La pizza',
  owner:'Gionni' 
}
//OR OPERATOR
//rest1.numGuests=rest1.numGuests|| 10;
//rest2.numGuests=rest2.numGuests|| 10;
//rest1.numGuests||10;
//rest1.numGuests||10;

// nullish assignment operator--(null or undefined)It'll assign a variable to it if it's nullish.
rest1.numGuests ??10;
rest1.numGuests ??10;
rest1.owner= rest1.owner && '<Anonymous>'
rest2.owner= rest2.owner && '<Anonymous>'
//Assigns a value to a variable if it's truthy.
rest1.owner &&= '<Anonymous>'
rest2.owner &&= '<Anonymous>'



console.log(rest1)
console.log(rest2)*/


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



const [player1,player2]=game.players;
console.log(player1, player2)

const[gk,...fieldPlayers]=player1;
console.log(gk,...fieldPlayers)

const allPlayers=[...player1,...player2]
console.log(allPlayers)

const players1Final=['Thiago', 'Coutinho','Perisic',...player1];
console.log(players1Final)

const {odds:{team1, x:draw,team2},
}=game
console.log(team1,draw,team2)

const playerGoals= function(...players){
  console.log(`${players.length} goals were scored`)
}
playerGoals(...game.scored);


team1< team2 && console.log('Team one is likely to win');
team1> team2 && console.log('Team two is likely to win');

const menu=[...restaurant.starterMenu, ...restaurant.mainMenu]
for(const item of menu) console.log(item);
// Need to ask questions on this.
for(const [i,el]of menu.entries()){
  console.log(`${i+1}:${el}`)
}

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀'

*/
// Optinal chaining
const days= ['mon','tuesday','wed','thur','fri'];
for(const day of days){
  const open=restaurant.openingHours[day]?.open ??'closed';
  console.log(open)
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRilla?.(0,1) ?? 'Method does not exist');

// Array Optional chaining tests if the value on the left exist
const tee=[{name:'Jonas', age:15,sex:'female'}]
console.log(tee[0]?.name ?? 'Does not exist')

// Property names
const properties=Object.keys(openingHours);
let openStr= `We open at ${properties.length} days:`;

for(const day of properties){
  openStr += `${day},`
}
console.log(openStr);
// Property Values
const values= Object.values(openingHours)
console.log(values)
// Property entries 
// For a more simpler value, we destructure [key,values]
const entries= Object.entries(openingHours)
for( const[key,{open,close} ] of entries){
  console.log(`On ${key}, we open at ${open} and close at ${close}`)
}



/* 
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
*
for(const [i,player]of game.scored.entries()){
  console.log(`Goal:${i+1} ${player}`)
}
const odds= Object.values(game.odds);
let average=0;
for(const odd of odds)
  average+= odd;
  average/=odds.length
  console.log(average);*/
  for(const [team,odd] of Object.entries(game.odds)){
    const teamVic = team=== 'x'? 'draw': `victory ${game[team]}`;
    console.log(`Odd of ${teamVic} ${odd}`);
  }


  // Sets to remove duplicate value in an array.
  const orderT= new Set(['Waiter', 'Cashier','Cashier', 'Waiter', 'Usher', 'Usher','Teacher', 'Teacher'])
  console.log(orderT.add('teeth'))
  console.log(orderT.size)
  const staff=['Waiter', 'Cashier','Cashier', 'Waiter', 'Usher', 'Usher','Teacher', 'Teacher']
  // To change it to an array: const staffUnique= [...new Set (staff)];
 // console.log(staffUnique);
  //staffUnique.add('Addict');
  // add,delete,clear,has /

  console.log(new Set(['Waiter', 'Cashier','Cashier', 'Waiter', 'Usher', 'Usher','Teacher', 'Teacher']).size)
  console.log(new Set("KIbnjjjsj").size)

  // Maps can be used to map values to keys.
  const rest= new Map();
  rest
  .set('Tobi','Good girl')
  .set(1,'Baby')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
  console.log(rest.delete('close'))

  console.log(rest)
  const time=15;
  console.log(rest.get(time>rest.get(open)&& time < rest.get(close) ))
  //rest.size,delete,clear.
rest.set(document.querySelector('h1'),'headings');
const arr=[1,2]
rest.set(arr,'g')
console.log(rest.get(arr[0]))
// Creating a new map without having to add so many sets
// Objects are not iterables do we use objects.entries to convert it.
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


/*const question=new Map([
  ['question','What is the best programming language'],
  [1,'Javascript'],
  [2,'C'],
  [3, 'Java'],
  ['correct',3],
  [true,'You got it right'],
  [false,'Try again later'],
]);
console.log(question.get('question'))
for(const [key,value] of question)
{if(typeof key === 'number')
  console.log(`Answer is ${key} : ${value}`)}

  //const answer= Number(prompt('Your answer'));
  //console.log(answer)

 console.log(question.get(question.get('correct')===answer));

 //Convert Map to arrys
 //console.log(...questions,.keys(),.values())

 // Coding Challenge #3

 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

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

const events=[...new Set(gameEvents.values())]
console.log(events)
gameEvents.delete[64];
console.log(events)
const tiime=[...gameEvents.keys()].pop();
console.log(tiime)

console.log(`An event happens every on average of  ${tiime/ gameEvents.size}`)
console.log(gameEvents.size)


