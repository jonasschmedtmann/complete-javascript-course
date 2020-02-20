(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; ++i) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log("Good choice.");
    } else {
      console.log("Try again.");
    }
  };
  var question1 = new Question("Are you THE ONE?", ["Yes", "No"], 0);

  var question2 = new Question("Red Pill or Blue Pill?", ["Red", "Blue"], 0);

  question1.displayQuestion();
  var answer1 = parseInt(prompt("Answer: "));
  question1.checkAnswer(answer1);

  question2.displayQuestion();
  var answer2 = parseInt(prompt("Answer: "));
  question2.checkAnswer(answer2);
})();
