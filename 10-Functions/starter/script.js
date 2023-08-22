'use strict';

// default parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) { 
    const booking = {
        flightNum,
        numPassengers,
        price,
    }; 
    console.log(booking); 
    bookings.push(booking); 
} 

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 2, 3);
createBooking('LH123', 3);

// passing arguments (values vs references)
const flight = 'LH234';

const jonas = {
    name: 'Jonas Ro',
    passport: 1213423432,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;
    if (passenger.passport === 1213423432) {
        console.log('Checked in');
    } else {
        console.log('Wrong passport!');
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;

console.log(flightNum);
console.log(passenger);

// functions returning functions

const greet = function(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet("Hey");
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greete = (greeting) => name => 
    console.log(`${greeting} ${name}`);

greete('Hello')('Joey');

const tax = rate => value => value + value * rate;

const incomeTax = tax(0.23);
console.log(incomeTax(100));

//coding challenge 1

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question} 
        ${this.options[0]}
        ${this.options[1]}
        ${this.options[2]}
        ${this.options[3]}
        (Write option number)`));
        typeof answer === "number" && answer >=0 && answer < 4
        && this.answers[answer]++;  
        this.displayResults();
        this.displayResults('string');
    }, 
    displayResults (type = 'array') {
        if(type === "string") {
            console.log(`Poll results are ${this.answers[0]},  ${this.answers[1]},  ${this.answers[2]},  ${this.answers[3]}`);
        } else {
            console.log(this.answers);
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.call({answers: data1});
poll.displayResults.call({answers: data2});

