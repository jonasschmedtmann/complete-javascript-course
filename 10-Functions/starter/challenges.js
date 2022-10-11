'use strict';

//Challenge 1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options[0]} \n ${this.options[1]} \n ${this.options[2]} \n ${this.options[3]} \n (write option number)`
      )
    );
    if (answer >= this.options.length || isNaN(answer)) {
      alert('Not a valid number');
    } else {
      this.answers[answer]++;
    }
    this.displayResults();
  },
  displayResults(type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//Challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  })
})();


