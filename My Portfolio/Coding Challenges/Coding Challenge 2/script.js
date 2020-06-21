/**
 * 
 *  CODING CHALLENGE 2
 * 
 */

 /** 
 John and Mike both play basketball in different teams. In the latest 3 games,
 John's team scored 89, 120, and 103 points, 
 while Mike's team scored 116, 94, 123 points.

 1. Calculate the average score for each team. 

 2. Decide which teams win in average (highest avg score), 
 and print the winnner to the console.

 3. Then change the scores to show different winners. 
 Don't forget to take into account there might be a draw (the same avg score)

 4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. 
 Like before, log the average winner to the console. HINT: you will need the && operator
 to take the decision. 

 5. Like before, change the scores to generate different winners, keeping in mind
 there might be draws. 

 */

var teamJohn, teamMike, teamMary, highestAverageScore;
highestAverageScore = 0; 

teamJohn = (89 + 120 + 103) / 3;
teamMike = (116 + 94 + 123) / 3;
teamMary = (97, 134, 105) / 3; 

console.log(" John's Score: " + teamJohn + "\n Mike's Score: " + teamMike + "\n Mary's Score: " + teamMary);

switch(true){
    case teamJohn > teamMike && teamJohn > teamMary:
        console.log("Johns team has the highest average score.");
        break;
    case teamJohn === teamMike:
        console.log("John and Mike's team both TIED.");
        break;
    case teamJohn === teamMary: 
        console.log("John and Mary's team both TIED.");
        break;
    case teamMike > teamJohn && teamMike > teamMary:
        console.log("Mike's team has the highest average score.");
        break;
    case teamMike === teamJohn:
        console.log("John and Mike's team both TIED.");
        break;
    case teamMike === teamMary: 
        console.log("Mike and Mary's team both TIED.");
        break;
    case teamMary > teamJohn && teamMary > teamMike:
        console.log("Mary's team has the highest average score.");
        break;
    case teamMary === teamMike:
        console.log("Mary and Mike's team both TIED.");
        break;
    case teamMary === teamJohn: 
        console.log("Mary and John's team both TIED.");
        break;
    default: 
        console.log("Everyone Tied!")
        break;
}


