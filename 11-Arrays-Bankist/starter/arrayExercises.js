const people = [
  {
    firstName: 'Sam',
    lastName: 'Hughes',
    DOB: '07/07/1978',
    department: 'Development',
    salary: '45000',
  },
  {
    firstName: 'Terri',
    lastName: 'Bishop',
    DOB: '02/04/1989',
    department: 'Development',
    salary: '35000',
  },
  {
    firstName: 'Jar',
    lastName: 'Burke',
    DOB: '11/01/1985',
    department: 'Marketing',
    salary: '38000',
  },
  {
    firstName: 'Julio',
    lastName: 'Miller',
    DOB: '12/07/1991',
    department: 'Sales',
    salary: '40000',
  },
  {
    firstName: 'Chester',
    lastName: 'Flores',
    DOB: '03/15/1988',
    department: 'Development',
    salary: '41000',
  },
  {
    firstName: 'Madison',
    lastName: 'Marshall',
    DOB: '09/22/1980',
    department: 'Sales',
    salary: '32000',
  },
  {
    firstName: 'Ava',
    lastName: 'Pena',
    DOB: '11/02/1986',
    department: 'Development',
    salary: '38000',
  },
  {
    firstName: 'Gabriella',
    lastName: 'Steward',
    DOB: '08/26/1994',
    department: 'Marketing',
    salary: '46000',
  },
  {
    firstName: 'Charles',
    lastName: 'Campbell',
    DOB: '09/04/1977',
    department: 'Sales',
    salary: '42000',
  },
  {
    firstName: 'Tiffany',
    lastName: 'Lambert',
    DOB: '05/11/1990',
    department: 'Development',
    salary: '34000',
  },
  {
    firstName: 'Antonio',
    lastName: 'Gonzalez',
    DOB: '03/24/1985',
    department: 'Office Management',
    salary: '49000',
  },
  {
    firstName: 'Aaron',
    lastName: 'Garrett',
    DOB: '09/04/1985',
    department: 'Development',
    salary: '39000',
  },
];

// Exercises

// 1) What is the average income of all the people in the array?
const salaries = people.map(val=> Number(val.salary));

const averageSalary = salaries.reduce((acc, val) => acc + val, 0) / salaries.length;

console.log(averageSalary);

// 2) Who are the people that are currently older than 30?
const calcAge = function (person) {
    const birthYear = new Date(person.DOB);
    const now = new Date();
    const age = Math.trunc((now - birthYear) / (1000 * 60 * 60 * 24 * 365));
    return age;
}

const peopleOlder30 = people.filter(person => calcAge(person) > 30);
console.log(peopleOlder30);

// 3) Get a list of the people's full name (firstName and lastName).
const fullName = person => `${person.firstName} ${person.lastName}`;

const fullNameList = people.map(fullName);

console.log(fullNameList);

// 4) Get a list of people in the array ordered from youngest to oldest.
const youngestToOldest = people.sort((person1, person2) => calcAge(person1) - calcAge(person2))
console.log(youngestToOldest);

// 5) How many people are there in each department?
const department = people.map(person => person.department);

const occurrences = department.reduce(function (acc, curr) {
  acc[curr] ? ++acc[curr] : acc[curr] = 1;
  return acc;
}, {});


// const occurrences = people.reduce(function (acc, curr) {
//   acc[curr.department] ? ++acc[curr.department] : acc[curr.department] = 1;
//   return acc;
// }, {});
// console.log(occurrences);
/*

////////Exercises 2 /////////

const orders = [
  {
    orderId: '123',
    customerId: '123',
    deliveryDate: '01-01-2020',
    delivered: true,
    items: [
      { productId: '123', price: 55 },
      { productId: '234', price: 30 },
    ],
  },
  {
    orderId: '234',
    customerId: '234',
    deliveryDate: '01-02-2020',
    delivered: false,
    items: [{ productId: '234', price: 30 }],
  },
  {
    orderId: '345',
    customerId: '234',
    deliveryDate: '05-01-2020',
    delivered: true,
    items: [
      { productId: '567', price: 30 },
      { productId: '678', price: 80 },
    ],
  },
  {
    orderId: '456',
    customerId: '345',
    deliveryDate: '12-01-2020',
    delivered: true,
    items: [
      { productId: '789', price: 12 },
      { productId: '890', price: 90 },
    ],
  },
  {
    orderId: '578',
    customerId: '456',
    deliveryDate: '12-01-2020',
    delivered: true,
    items: [
      { productId: '901', price: 43 },
      { productId: '123', price: 55 },
    ],
  },
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
const orderID234 = orders.filter(order => order.customerId === '234');

console.log(orderID234);

// 2) Create a new property on each order with the total price of items ordered.
const totalPrice = orders.forEach(order => {
  order.totalPrice = order.items.reduce((acc, order) => acc + order.price, 0);
});

console.log(orders);

// 3) Have all the orders been delivered?
const allDelievered = orders.every(order => order.delivered);
console.log(allDelievered);

// 4) Has the customer with ID '123' made any orders?
const order123 = orders.some(order => order.customerId === '123');
console.log(order123);

// 5) Have any products with an id of 123 been sold?
const sold123 = orders.some(order => order.orderId === '123');
console.log(sold123);


//Exercises 3

const users = [
  {
    id: '88f24bea-3825-4237-a0d1-efb6b92d37a4',
    firstName: 'Sam',
    lastName: 'Hughes',
  },
  {
    id: '2a35032d-e02b-4508-b3b5-6393aff75a53',
    firstName: 'Terri',
    lastName: 'Bishop',
  },
  {
    id: '7f053852-7440-4e44-838c-ddac24611050',
    firstName: 'Jar',
    lastName: 'Burke',
  },
  {
    id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf',
    firstName: 'Julio',
    lastName: 'Miller',
  },
  {
    id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64',
    firstName: 'Chester',
    lastName: 'Flores',
  },
  {
    id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985',
    firstName: 'Madison',
    lastName: 'Marshall',
  },
  {
    id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c',
    firstName: 'Ava',
    lastName: 'Pena',
  },
  {
    id: '7f0ce45a-bdca-4067-968b-d908e79276ce',
    firstName: 'Gabriella',
    lastName: 'Steward',
  },
  {
    id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6',
    firstName: 'Charles',
    lastName: 'Campbell',
  },
  {
    id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be',
    firstName: 'Madison',
    lastName: 'Lambert',
  },
];

const comments = [
  { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
  {
    userId: '7f053852-7440-4e44-838c-ddac24611050',
    text: 'Well done, I think I understand now!',
  },
  {
    userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be',
    text: 'How do you do that? 😲',
  },
  { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
  { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
  { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
  { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
  { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
  { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
  { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];

// Exercises 
// 1) What is Madison Marshall's user id?
const marshal = users.find(
  user => user.firstName === 'Madison' && user.lastName === 'Marshall'
).id;
console.log(marshal);

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)
const firstComment = users.find(user => {
  if (comments[0].userId === user.id) {
    console.log(
      `The first comment was written by ${user.firstName} ${user.lastName}`
    );
  }
});

// 3) Which user commented 'OK great thanks'?
const findCommentByText = text =>
  comments.find(comment => comment.text === text);

let okGreatThanksComment = findCommentByText('OK great thanks');

const findUserbyID = id => users.find(user => user.id === id);

findUserbyID(okGreatThanksComment.userId);

// 4) Add the user's first and last name to each comment in the comments array
// const mapedComments = comments.map(comment => {
//   const user = findUserbyID(comment.userId);
//   comment.firstName = user.firstName;
//   comment.lastName = user.lastName;
//   return comment;
// });
const mapedComments = comments.map(comment => {
  const user = findUserbyID(comment.userId);
  // comment.firstName = user.firstName;
  // comment.lastName = user.lastName;
  //return comment;
  const lastName = user.lastName;
  return {...comment, firstName: user.firstName, lastName};
});

console.log(mapedComments);

// 5) Get a list of the users who haven't commented
const peopleCommentsId = comments.map(comment => comment.userId);
console.log(peopleCommentsId);

const notCommentPeople = users.filter(user => !peopleCommentsId.includes(user.id))

console.log(notCommentPeople);
*/

/*
//Exercises 4
const users = [{
  id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
  email: "tcasaletto0@soundcloud.com",
  ip_address: "53.215.156.73"
}, {
  id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
  email: "nmoffett1@paginegialle.it",
  ip_address: "34.81.219.4"
}, {
  id: "1019b52c-db9d-45a2-975f-404455925a6a",
  email: "rcrampin2@yale.edu",
  ip_address: "65.181.114.151"
}, {
  id: "e8637c3b-645d-4742-a463-d2006742606f",
  email: "ddreinan3@smugmug.com",
  ip_address: "136.171.217.116"
}, {
  id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
  email: "gdorkin4@taobao.com",
  ip_address: "220.228.4.97"
}, {
  id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
  email: "vhucquart5@typepad.com",
  ip_address: "101.212.0.49"
}, {
  id: "74120248-03b5-4888-84c0-d1a459c6273b",
  email: "vsircombe6@marriott.com",
  ip_address: "28.180.205.167"
}, {
  id: "412a0669-7171-48b4-95eb-e898993ec1dc",
  email: "kdesouza7@t.co",
  ip_address: "61.44.195.62"
}, {
  id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
  email: "sbehnke8@booking.com",
  ip_address: "1.176.238.27"
}, {
  id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
  email: "clindsell9@nymag.com",
  ip_address: "44.37.119.76"
}];
*/
/**
 * Exercise 01
 *
 * Check whether every email address in the list of users is valid (get a true or false value)
 */
// const validEmail = users.every(email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

// console.log(validEmail);

// /**
// * Exercise 02
// *
// * Find out how many users have an IP address in a Class A network
// * https://en.wikipedia.org/wiki/Classful_network
// */

// console.log(users.filter(user => user.ip_address.split('.')[0] < 128).length);

// /**
// * Exercise 03
// *
// * Find the position in the array of the first  user object that has a Class B IP address
// */
// console.log(users.findIndex(user => user.ip_address.split('.')[0] < 193 && user.ip_address.split('.')[0] > 127));

// /**
// * Exercise 04
// *
// * Find the user object that has the 'soundcloud' email address
// */
// const soundcloudUser = users.find(user => {
//   //const emailAdress = user.email.split('@')[1].split('.')[0];
//   //return emailAdress === 'soundcloud';
//   return user.email.includes('soundcloud')
// });

// console.log(soundcloudUser);

// /**
// * Exercise 05
// *
// * Replace all the items in the array with a string value of 'deleted'
// */
// console.log(users.fill('deleted'));
/*
//Exercises 5
const accounts1 = [
  {
    _id: '5e56d5f5c00d45b8f1125ef4',
    index: 0,
    guid: '955310d3-45df-47e7-bc9c-92504d5e92d2',
    isActive: true,
    balance: '$3,926',
    picture: 'http://placehold.it/32x32',
    age: 26,
    eyeColor: 'green',
    name: 'George Bond',
    gender: 'male',
    company: 'GEEKOL',
    email: 'georgebond@geekol.com',
    phone: '+1 (862) 591-2584',
    address: '677 Rost Place, Brandermill, Virgin Islands, 854',
    about:
      'Est deserunt incididunt incididunt et. Et reprehenderit labore officia fugiat deserunt et non consequat velit et laboris duis. Reprehenderit dolore dolor reprehenderit culpa. Nulla duis do dolore magna cupidatat mollit quis ullamco duis.',
    registered: '2014-05-31T09:59:01 -01:00',
    latitude: -30.600915,
    longitude: -83.795214,
    tags: [
      'nostrud',
      'aliquip',
      'est',
      'laboris',
      'voluptate',
      'do',
      'dolor',
      ['deserunt', 'ipsum'],
      ['consectetur', 'quis', 'commodo'],
    ],
    friends: [
      { id: 0, name: 'Alisa Ford' },
      { id: 1, name: 'Hess Howell' },
      { id: 2, name: 'Gwendolyn Hendrix' },
    ],
    greeting: 'Hello, George Bond! You have 2 unread messages.',
    favoriteFruit: 'banana',
  },
  {
    _id: '5e56d5f51837c78c32ed16ef',
    index: 1,
    guid: '416d3864-dc91-45e3-817c-07562b04b512',
    isActive: false,
    balance: '$1,273',
    picture: 'http://placehold.it/32x32',
    age: 25,
    eyeColor: 'green',
    name: 'Fay Carlson',
    gender: 'female',
    company: 'SIGNIDYNE',
    email: 'faycarlson@signidyne.com',
    phone: '+1 (922) 529-2437',
    address: '786 Belvidere Street, Carbonville, South Dakota, 3020',
    about:
      'Ullamco deserunt nostrud minim consectetur ad enim ipsum consectetur. Excepteur ad eiusmod ut quis in magna cillum qui commodo ad do eu. Nulla aliquip Lorem excepteur laboris elit.',
    registered: '2017-04-18T02:00:02 -01:00',
    latitude: 74.274128,
    longitude: -119.604152,
    tags: ['et', 'ut', 'mollit', 'occaecat', 'ipsum', 'mollit', 'pariatur'],
    friends: [
      { id: 0, name: 'Miranda Little' },
      { id: 1, name: 'Ellen Burks' },
      { id: 2, name: 'Shanna Logan' },
    ],
    greeting: 'Hello, Fay Carlson! You have 10 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '5e56d5f54b9a9491ba37fec9',
    index: 2,
    guid: '46839c30-0b7e-4009-98f1-9b8d770a0c88',
    isActive: false,
    balance: '$3,455',
    picture: 'http://placehold.it/32x32',
    age: 35,
    eyeColor: 'blue',
    name: 'French Bennett',
    gender: 'male',
    company: 'PASTURIA',
    email: 'frenchbennett@pasturia.com',
    phone: '+1 (883) 501-3963',
    address: '856 Hemlock Street, Alfarata, Nevada, 5261',
    about:
      'Nulla sunt ea sunt labore id excepteur elit incididunt et irure. Ut pariatur ad eu ut qui est consectetur labore enim fugiat. Occaecat incididunt ex sunt cillum Lorem in aliquip est voluptate aliquip pariatur reprehenderit ad. Aute nisi et enim enim. In voluptate eu minim duis.',
    registered: '2015-04-16T11:53:33 -01:00',
    latitude: 85.491905,
    longitude: 90.342252,
    tags: ['laboris', 'reprehenderit', 'est', 'in', 'duis', 'voluptate', 'non'],
    friends: [
      { id: 0, name: 'Mayer Sullivan' },
      { id: 1, name: 'Wiggins Hudson' },
      { id: 2, name: 'Jacqueline Gibbs' },
    ],
    greeting: 'Hello, French Bennett! You have 10 unread messages.',
    favoriteFruit: 'apple',
  },
  {
    _id: '5e56d5f55dd72bb06144c70c',
    index: 3,
    guid: '52b94117-bd93-4d8f-b8e3-f2fd1c3988fc',
    isActive: false,
    balance: '$1,733',
    picture: 'http://placehold.it/32x32',
    age: 30,
    eyeColor: 'blue',
    name: 'Shannon Mitchell',
    gender: 'male',
    company: 'DECRATEX',
    email: 'shannonmitchell@decratex.com',
    phone: '+1 (876) 447-3381',
    address: '870 Tillary Street, Aurora, Vermont, 8055',
    about:
      'Occaecat adipisicing tempor ut enim consectetur enim sit ea qui consequat sint anim sint. Sint elit occaecat eiusmod consectetur veniam ad do. Voluptate reprehenderit pariatur id deserunt sunt reprehenderit eiusmod. Aute incididunt aliquip ad aliquip. Commodo cupidatat nisi velit eiusmod qui quis tempor eiusmod sit velit ex. Ad tempor cillum incididunt aliqua labore eu voluptate voluptate cillum aute amet veniam. Velit elit occaecat esse fugiat minim deserunt sit amet et non ea sit cupidatat.',
    registered: '2014-01-29T04:55:04 -00:00',
    latitude: 77.845921,
    longitude: -137.754911,
    tags: ['consequat', 'non', 'dolore', 'cupidatat', 'irure', 'ipsum', 'quis'],
    friends: [
      { id: 0, name: 'Isabelle Luna' },
      { id: 1, name: 'Marissa Beach' },
      { id: 2, name: 'Sarah Simmons' },
    ],
    greeting: 'Hello, Shannon Mitchell! You have 4 unread messages.',
    favoriteFruit: 'banana',
  },
  {
    _id: '5e56d5f5bb33b3df103cbfb9',
    index: 4,
    guid: '2fc0bb48-ad7f-4c91-a655-6fcb761a1e8f',
    isActive: true,
    balance: '$1,839',
    picture: 'http://placehold.it/32x32',
    age: 35,
    eyeColor: 'brown',
    name: 'Johns Hooper',
    gender: 'male',
    company: 'ZENTHALL',
    email: 'johnshooper@zenthall.com',
    phone: '+1 (868) 432-2105',
    address: '446 Emmons Avenue, Tyro, South Carolina, 3627',
    about:
      'Ipsum ullamco reprehenderit nulla sint. Deserunt reprehenderit excepteur dolore quis et culpa in. Adipisicing consectetur amet reprehenderit ex velit incididunt quis ipsum reprehenderit in irure. Adipisicing Lorem minim eu laborum ex ullamco nostrud reprehenderit ullamco minim minim non. Magna id fugiat duis officia deserunt ullamco est esse.',
    registered: '2017-09-06T09:24:11 -01:00',
    latitude: -33.444624,
    longitude: 99.697197,
    tags: ['et', 'minim', 'sunt', 'irure', 'et', 'esse', 'consectetur'],
    friends: [
      { id: 0, name: 'Cynthia Hays' },
      { id: 1, name: 'Estela Walton' },
      { id: 2, name: 'Christy Ball' },
    ],
    greeting: 'Hello, Johns Hooper! You have 1 unread messages.',
    favoriteFruit: 'apple',
  },
];

//Exercise 01
//The first account has nested arrays of tags in it's tag property.  Get a list of all tags for this account as a one-dimensional array.
console.log(accounts1[0].tags.flat(2));

//Exercise 02
//Check whether the tags for the first account includes the "consectetur" tag
console.log(accounts1[0].tags.flat(2).includes('consectetur'));

//Exercise 03
//Get a list of all the tags for all the accounts and join them together as a string separated by commas.
const allTags = accounts1
  .map(acc => acc.tags)
  .flat(2)
  .join(',');
console.log(allTags);

//Exercise 04
//Get a list of all the friends for all the user's accounts as an array (don't worry about duplicates)
const usersFriends = accounts1
  .flatMap(user => user.friends)
  .map(user => user.name);

console.log(usersFriends);

//Exercise 05
//Get a list of all the friends for all users who are younger than 30 AND have a balance more than $1500
/*const youngAndRich = accounts1.filter(
  user => user.age < 30 && parseInt(accounts1[0].balance.) > 1500
);
console.log(youngAndRich);
*/