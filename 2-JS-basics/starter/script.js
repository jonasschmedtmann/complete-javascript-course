/*************************
 CC #1
 *************************/
/*var markMass = 85;
var markHeight = 1.75;
var johnMass = 95;
var johnHeight = 2.05;

var markBMI = markMass / (markHeight*markHeight);
var johnBMI = johnMass / (johnHeight*johnHeight);

var higherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's BMI? " + higherBMI);*/
/*************************
 CC #2
 *************************/
teamJohn = (89 + 120 + 193)/3;
teamMike = (116 + 94+ 123)/3;
teamMary = (97 + 134+ 105)/3;

console.log(teamJohn, teamMike, teamMary);

if (teamJohn > teamMike && teamJohn > teamMary ) {
    console.log("John'\s team wins with the score " + teamJohn);
} else if (teamMike > teamJohn && teamMike > teamMary) {
    console.log("Mike'\s team wins with the score " + teamMike);
} else if (teamMary > teamJohn && teamMary > teamMike) {
    console.log("Mary'\s team wins with the score " + teamMary);
} else {
    console.log("It'\s a draw with the score " + teamJohn);
}