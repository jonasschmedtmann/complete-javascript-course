'use strict';
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent='Start guessing'

document.querySelector('.guess').value=23;

let number=Math.trunc (Math.random()*20+1)
let score=0;
let highscore=0;
 const displayMessage= function(message){
    document.querySelector('.message').textContent='message'
 }

document.querySelector('.check').addEventListener('click',function(){
const guess=document.querySelector('.guess').value
console.log(guess);
if(!guess){
   displayMessage('No number')
}else if(guess=== number){
   displayMessage('Correct number')
   document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent=number;

   if(score>highscore){
      highscore=score
      document.querySelector('.highscore').textContent='highscore';
   }

else if(guess !== number){
   if(score>1){
      //document.querySelector('.message').textContent= guess > number? 'Too high':'Too low'
      displayMessage(guess > number? 'Too high':'Too low')
   score--;
   document.querySelector('.score').textContent=score;
   
   }else{
    //  document.querySelector('.message').textContent='You lost the game'
    displayMessage('You lost the game')
      document.querySelector('.score').textContent=0;
   }}
});
document.querySelector('.again').addEventListener('click',function(){
   score=20;
   number=Math.trunc (Math.random()*20)+1;
   displayMessage('Start guessing')
   document.querySelector('.score').textContent='0';
   document.querySelector('.number').textContent='?';
   document.querySelector('.guess').value='';
   document.querySelector('.score').textContent=0;

   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
 

});





/*else if(guess>number){
   if(score>1){
      document.querySelector('.message').textContent='Too high'
      score--;
      document.querySelector('.score').textContent=score;    
   }else{
      document.querySelector('.score').textContent='You lost the game'    
  
   }
   
}else if(guess< number){
   if(score>1){
   document.querySelector('.message').textContent='Too low'
score--;
document.querySelector('.score').textContent=score;

}else{
   document.querySelector('.score').textContent='You lost the game'  
  
}
}*/