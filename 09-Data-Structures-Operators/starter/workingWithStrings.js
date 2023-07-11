const airline = 'US Airlines';
const plane = 'A320';

const [first, second, ...rest] = plane.split('');
first, second, rest

airline.indexOf('i'); // 4 gives only first occurence of value
airline.lastIndexOf('i'); // 7 gives last occurence of i
airline.indexOf('air'); // -1 case sensitive, will return -1 if not found
airline.indexOf('Air'); // 3, where "Air" starts


airline.slice(4); // irlines slices starting at position 4, returning a substring
airline.slice(4, 7); // irl returns substring BETWEEN [4, 5, 6,] 7

airline.slice(airline.lastIndexOf(' ') + 1); // Airlines +1 is to get rid of the space output at the beginning of 'Airlines'
airline.slice(-5); // lines starts from end of strong and moves to start
airline.slice(1, -2); // S Airlin 



// check to see if seat is a middle seat: B and E are middle seats
const checkMiddleSeat = (seat) => {
  const seatIdentifier = seat.slice(-1).toUpperCase();

  if (seatIdentifier === 'B' || seatIdentifier === 'E') {
    console.log(`Your seat ${seat}, is a middle seat`)
  } else {
    console.log(`Your seat ${seat} is not a middle seat`)
  }
};

// checkMiddleSeat('11b');
// checkMiddleSeat('3E');
// checkMiddleSeat('23c');



// fixing capitalizaion in name
const fixCapitalization = function (name) {
  const [firstName, lastName] = name.split(' ');
  const firstNameFixed = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const lastNameFixed = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  // const fullNameFixed = `${firstNameFixed} ${lastNameFixed}`; // this works!
  const fullNameFixed = [firstNameFixed, lastNameFixed].join(' '); // this also works!
  console.log(fullNameFixed);
};
// fixCapitalization('JoNaS SmitH');



const capitalizeAnyName = function (name) {
  const namesArr = name.trim().toLowerCase().split(' ');
  const capitalizedName = [];

  for (const singleName of namesArr) {
    // capitalizedName.push(singleName[0].toUpperCase() + singleName.slice(1)); // this works!
    const upperUsingReplace = singleName.replace(singleName[0], singleName[0].toUpperCase()); // this also works!
    capitalizedName.push(upperUsingReplace);
  }

  return console.log(capitalizedName.join(' '));
};
// capitalizeAnyName('jeSsica ann smith dAvis');
// capitalizeAnyName('ilse kassandra rojAS laZETTE');



// Comparing Emails
const validateSameEmail = (ogEmail, checkedEmail) => {
  const regularEmail = checkedEmail.toLowerCase().trim();
  console.log(ogEmail === regularEmail);
};

// trimStart() and trimEnd() also exist
const email = 'hello@email.com';
const loginEmail = '  Hello@Email.Com \n';

// validateSameEmail(email, loginEmail);



// convert pounds to USD
const priceGB = '288,97€';
const priceUSD = priceGB.replace('€', 'USD').replace(',', '.');
// console.log(priceUSD);



const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
const replace = announcement.replace('door', 'gate'); // only replaces the FIRST instance of 'door'
const regexReplace = announcement.replace(/door/g, 'gate'); // old way to replace all instances using /regex/ with 'g' -global- flag
const replaceAll = announcement.replaceAll('door', 'gate'); // new way: built in js method replaceAll() targets all instances of 'door'
// console.log(`${replace} \n ${regexReplace} \n ${replaceAll}`);




const plane2 = 'A320neo Airbus';
// console.log(plane2.includes('A320')); // true
// console.log(plane2.startsWith('Air')); // false

// if (plane2.endsWith('Airbus') && plane2.includes('neo')) {
//   console.log('Part of the new Airbus family')
// }




// check if baggage can be allowed on plane
// weapons are not allowed on plane
const checkBaggage = function (passenger, items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    return console.log(`${passenger}, one or more of your items is not allowed on the plane 🫣`)
  }
  console.log(`${passenger}, all your items are allowed on the plane. You may board 👏`)
};

// checkBaggage('Hannah Smith', 'I have a laptop, some Food and a pocket Knife');
// checkBaggage('Rob Swan', 'Socks and camera');
// checkBaggage('Art Hugh', 'got some snacks and a gUn for protection');




// PADDING a string
const message = 'Go to gate 23!';
// padStart( totalCharactersInFinalOutputString, whatCharacter(s)YouWantPaddingYourString )
const paddedMsg = message.padStart(message.length + 5, '+');

// console.log(paddedMsg)

// use padding to mask credit card numbers


// maskCreditCard(23546843);
// maskCreditCard('85554632169924235');

// REPEAT string method
const warningMessage = 'Bad weather-- stay indoors!';
// console.log(warningMessage.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️ '.repeat(n)}`);
}

planesInLine(4);
planesInLine(12);
