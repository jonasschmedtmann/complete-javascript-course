/*****
   Challenge 1

var johnWt, markWt, johnHt, markHt;
johnWt = prompt ('John Weight');
markWt = prompt ('mark Weight');
johnHt = prompt ('John Height');
markHt = prompt ('mark Height');

console.log('Is John BMI > Mark BMI' + (johnWt/johnHt^2) > (markWt / markHt^2));
*/

function findAge(birthYear){
    return 2018 - birthYear;
}

var getAge = function (bYear){
    return 2020 - bYear;
}

console.log('Age is ' + findAge(1990));
console.log('Updated Age = ' + getAge(1990));