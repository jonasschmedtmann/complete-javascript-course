(function (){
    function Question(ques,  ansArr, ans){
        this.ques = ques;
        this.ansArr = ansArr;
        this.ans = ans;
    }
    var q1 = new Question("Is js the best course?", ["YES","NO"], "YES");
    var q2 = new Question("Who is the course instructor?", ["Jonas","Micheal", "Max"], "Jonas");
    var q3 = new Question("What is the Full form of JS? ", ["Jonasscript","Javascript", "Jumboscript"], "Javascript");
    
    var quesArr = [q1, q2, q3];
    
    currQuesNo = Math.floor(Math.random() * quesArr.length);
    
    Question.prototype.displayQuestion = function() {
        console.log(this.ques);
        for (var i = 0; i < this.ansArr.length ; i++){
            console.log(i + " " + this.ansArr[i])
        }
    };
    
    Question.prototype.checkAnswer = function(userAns){
        if(userAns === this.ans || userAns == this.ansArr.indexOf(this.ans)){
            console.log("You entered Correct Answer !");
        } else{
            console.log("You entered Wrong Answer !");
        }
    };
    quesArr[currQuesNo].displayQuestion();
    userAns = prompt("Please enter the answer or the number : ");
    quesArr[currQuesNo].checkAnswer(userAns);
    
})();