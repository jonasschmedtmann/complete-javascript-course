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
var scores, roundScore, activePlayer, dice;

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
// document.querySelector('#score-' + activePlayer).textContent = dice;
// 11. If we want to insert some HTML, we cant use textContent, instead we use .innerHTML and set it equal to a string '' and can write html inside
document.querySelector('#score-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// 12. we can use the querySelector to actually only read from our webpage as well... and then store it in a variable for example
// 13. create a random variable and put querySelector inside (store)
// 14. Dont set textContent equal to anything, then console.log the variable it was stored in (x)
var x = document.querySelector('#score-0').textContent;
console.log(x);

// 15. Not only can we use querySelector to change the HTML of an element... we can also use it to change the CSS! We are selecting by class, not id, so instead of a # we need a .
// 16. now we need to use the .style method, and then the CSS property that we want to change
// 17. the CSS property that we want to change is the display property, we want to set it to none
document.querySelector('.dice').style.display = 'none';




