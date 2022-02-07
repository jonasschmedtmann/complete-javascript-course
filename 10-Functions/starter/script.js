'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 5);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2904386534,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH000';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2904386534) {
    alert('Check in');
  } else {
    alert('Check out');
  }
};

//flight es un  string y se hará una copia por lo que no se modifica. Con objectos 'passenger' "se pasa" el objeto por lo que si que se modifica.
checkIn(flight, jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);

checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

//upperFirstWord y oneword son call-back function
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('Hi');
};

//Se ha utilizado en otras ocasiones como en event listener
document.body.addEventListener('click', high5);

//Itera por cada elemento
['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//CHallenge. Otra manera de llamar
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function () {
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//book(23, 'Sarah Williams'); //Uncaught TypeError: Cannot read properties of undefined (reading 'airline')
//Este eerror lo da porque copiamos el método book, pero no la función. Al intentar acceder a iataCode y flightNum no puede porque no tiene acceso.

// Call method
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'John Smith');

console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Es lo mismo que con apply, pero como ya no se usa apply mejor hacerlo de esta manera.
//Lo que hacemos es llamar al objeto pero metiéndole nosotros los datos en vez de pillar los que haya en el objeto this
book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');
// Se usa para usar los datos del objeto que le pasemos, en ve de pillar del de por defecto(book.luftansa)
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams1');
bookLH(33, 'Steven Williams2');
bookLX(56, 'Steven Williams3');

//El cópdigo está ya predefinido.
const bookEW23 = book.bind(eurowings, 23);

//Sólo hace falta el nombre, sólo se registrarán para ese vuelo
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //bind devolverá otra función, que es lo que queremos que devuelva, lufthansa.

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//Como hacemos bind a la misma función no hace falta pasarle nada al principio, por eso el null
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Otra manera de hacer que devuelva una función y con un valoe predefinido.
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
