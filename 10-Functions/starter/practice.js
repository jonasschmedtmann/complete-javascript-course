'use strict';
const pollBtn = document.querySelector('.poll');
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userChoice = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (
      isNaN(userChoice) ||
      userChoice < 0 ||
      userChoice > this.options.length - 1
    )
      return;

    this.answers[userChoice]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    const lowercaseType = type.toLowerCase();
    const isValid = lowercaseType === 'array' || lowercaseType === 'string';
    if (!isValid)
      console.log("Please call method with either type 'string' or 'array'");
    if (isValid) {
      if (lowercaseType === 'array') {
        console.log(this.answers);
      } else {
        console.log(`Poll results are ${this.answers.join(', ')}.`);
      }
    }
  },
};
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//-------------------------- Code Challenge # 2 ---------------------- //

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
