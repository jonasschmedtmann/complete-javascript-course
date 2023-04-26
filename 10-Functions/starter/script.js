'use strict';

//problem 1

/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.

TODO:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �
 }
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  displayResults(type) {
    if (type == "string") {
      console.log("Poll results are ", this.answers.join(", "));
    } else if ("array") {
      console.log(this.answers);
    } else {
      console.log("enter a valid type");
    }
  },
  registerNewAnswer() {
    let solution;

    solution = Number(
      prompt(`
   ${this.question}
   ${this.options.join("\n")}
   (write option number)
    `)
    );

    switch (solution) {
      case 0:
        this.answers[solution] += 1;
        console.log(solution);
        break;
      case 1:
        this.answers[solution] += 1;
        break;
      case 2:
        this.answers[solution] += 1;
        break;
      case 3:
        this.answers[solution] += 1;
        break;
      default:
        solution = Number(
          prompt(`
    What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
    `)
        );
        break;
    }

    return this.displayResults("string");
  },
};

document.body.append(document.createElement("button"));
const btn =
  document.getElementsByTagName("button")[
    document.getElementsByTagName("button").length - 1
  ];
btn.innerHTML = "Answer the poll";
btn.addEventListener("click", poll.registerNewAnswer.bind(poll));

//problem 2

/*
This is more of a thinking challenge than a coding challenge �
TODO:
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example.
GOOD LUCK �

*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
