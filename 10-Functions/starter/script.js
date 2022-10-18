"use strict";

// functions that return functions
const multiplyByNum = num1 => num2 => console.log(num1 * num2);


const multiplyBy5 = multiplyByNum(5);

multiplyBy5(5);

// we can re-use a method from an object by assigning it to a variable and using the .call() or .apply() and passing in a reference to the object you want to use it on with the necessary arguments

const agentJ = {
    name: "J",
    yearsOfExp: 13,
    grumpy: false,
    quotes: ["That's disgusting", "something else"],
    talk: function(name){
        console.log(`${this.quotes} ${name}`);
    }
}

const agentK = {
    name: "K",
    yearsOfExp: 40,
    grumpy: true,
    quote: "Come on, Slick!"
}

const talk = agentJ.talk;

talk.call(agentK, agentJ.name)
agentJ.talk(agentJ.name)

// code challenge #1
const poleBtn = document.querySelector(".poll")

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer: function(){
        let response = Number(prompt(`${this.question}
        ${this.options[0]}
        ${this.options[1]}
        ${this.options[2]}
        ${this.options[3]}
        (Write option number)`))
        typeof response === "number" && response < this.options.length && this.answers[response]++;
        this.displayResults();
    },
    displayResults(){
        alert(`Poll Results:
        ${this.options[0].slice(3)} - ${this.answers[0]}
        ${this.options[1].slice(3)} - ${this.answers[1]}
        ${this.options[2].slice(3)} - ${this.answers[2]}
        ${this.options[3].slice(3)} - ${this.answers[3]}`);
    }
}

poleBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));


// code challenge #2:
(function(){
    const header = document.querySelector('h1');
    header.style.color ='red';

    header.addEventListener("click", function(){
        header.style.color = "blue"
    })
})()