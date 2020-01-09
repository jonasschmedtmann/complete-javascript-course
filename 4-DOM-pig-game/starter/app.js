/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/









// First DOM Access and Manipulation, LESSON 18
// 1. declare variables
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// 2. we will need to declare a random number
// 3. Math.floor means the number inside the parenthesis will be rounded to the whole number (rounding down to the floor)
// 4. Math.random means it will create a random number between 0 and 1
// 5. multiplying * Math.random * 6 will get us a random number between 0 and 6
// 6. Adding +1 one will make sure our dice never has 0 rolled, because there is no 0 on any normal dice
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice); // 7. It randomizes in the console. Now it is time for some DOM manipulation

// 8. The Object that will give us access to the DOM is the Document object
// 9. querySelector allows us to grab a specific HTML element by the ID name we gave it, in this case it is score-0
// 10. if we want to change the text in this element, then we need another method... which is the textContent method and set it defined to the dice 
document.querySelector('#score-0').textContent = dice;
document.querySelector('#score-1').textContent = dice;