// // let js = 'amazing';
// //       if (js === 'amazing') alert('javascript is fun!');
// //       40 + 8 + 23 - 10;
// //       console.log(40 + 8 + 23 - 10);

// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Alex')
// console.log(23)

// let firstName = 'ME';
// let first = "kim";
// let firstPersonName = 'Kim'
// console.log(firstName)
// console.log(first);
// console.log(firstPersonName);

// let myFirstJob = 'coder';
// let myCurrentJob = 'teacher';

// console.log(myFirstJob)
// console.log(myCurrentJob)

// let age = 27;     //number  decimals     and     integers
// console.log(age)

// let firstName2 = 'Kim';      //string    for text

// let fullAge = true   ;    //boolean      for taking decisions

// let children;       //undefined (empty value)


//                     //null      empty value

//                     // symbol    unique and cannot be changed


//                     //bigInt     for larger integers that Number type cannot hold

// //dynamic type

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 27);
// // console.log(typeof 'Kim');
// //green -> string

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);


// let year ;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(year)

// console.log(typeof null);


// let age = 30;                       //can be mutated
// age = 31;
// console.log(age)


// const birthYear = 1995;             //const cannot be mutated
// //birthYear = 1996

// //const job;                    //we need an itial value

// var job = 'coder';
// job = 'teacher';

// console.log(job);

// lastName = 'Kim';
// console.log(lastName);

// const now = 2035;


// const ageAlex = now - 2000;
// const ageKim = now - 2010;
// console.log(ageAlex);
// console.log(ageKim);

// console.log(ageAlex * 2, ageKim / 2, 2 ** 3);
// // 2 ** 3 в кубе

// const firstName = 'Alex';
// const lastName = 'Kim';
// console.log(firstName + ' ' +lastName);


// // assignment operators

// let x = 10 + 5; //15
// x += 10 // x = x+10 = 25
// x *= 4 // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);


// // comparison operators 
// console.log(ageAlex > ageKim);
// console.log(ageAlex < ageKim);
// console.log(ageAlex >= ageKim);
// console.log(ageAlex <= ageKim);
// console.log(ageAlex >= 40);

// console.log( now - 2000 > now - 2010)




// const now = 2035;
   
// const ageAlex = now - 2000;
// const ageKim = now - 2010;
// console.log( now - 2000 > now - 2010)

// // console.log(25 - 10 - 5)

// let x, y;
// x = y = 25-10-5; // x = y = 10
// console.log(x, y);


// const averageAge = (ageAlex + ageKim) / 2;
// console.log(ageAlex, ageKim, averageAge);




//template literals

// const firstName = 'Alex';
// const job = 'web developer';
// const birthYear = 1995;
// const year = 2037;

// const alex = "I'm " + firstName + ', a ' + (year  -  birthYear) + ' year old ' + job + '!';

// console.log(alex);

// const alexNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(alexNew);

// console.log(`Just a regular string...`)

// console.log('String with \n\multiple \n\lines');
// //multiline string
// console.log(`String
// multiple
// lines`);


// const age = 15;
// // const isOldEnough = age > 18;

// if(age >= 18) {
//     console.log('Sarah can start driving license🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wati another ${yearsLeft} years ;) `);
// }


// const birthYear = 2001;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);





//type of conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Alex'));
// console.log(typeof NaN);
// console.log(String(27), 27);



// // type of coercion
// console.log('I am ' + 27 + ' years old');
// console.log('I am ' + String(27) + ' years old');
// console.log('I am ' + '27' + ' years old');
// console.log(`I am 27 years old`);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');


// let n = '1' + 1;
// n = n - 1;
// console.log(n)

// console.log(Boolean(0));        //FALSY
// console.log(Boolean(undefined)); //FALSY
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean('')); //FALSY

// const money = 0.0000000001;
// if(money) {
//     console.log("Don't spend at all :)")
// }   else {
//     console.log("get a job)")
// }


// let height = {};
// if(height){
//     console.log('YAY!')
// }   else {
//     console.log(';(')
// }





// const age = '18';
// if(age === 18) console.log('ADULT (strict)')
// if(age == 18) console.log('ADULT(loose)')

// const favorite = Number(prompt("What's your favorite nnumber?"));
// console.log(favorite);
// console.log(typeof favorite);

// if(favorite === 23) { // 23 string === 23 number
//     console.log('Cool! 23 is an amazing number!')
// } else if (favorite === 7) {
//     console.log('7 is a cool number too!')
// } else if ( favorite === 11) {
//     console.log('NICE!')
// }   else {
//     console.log('Number is not 23 or 7')
// }

// if(favorite !== 23) console.log('Why not 23?');


// let age1 = 16


// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(shouldDrive) {
// //     console.log('Sarah is able to drive');    
// // } else {
// //     console.log('Someone else should drive...');
// // }

// const isTired = false; //C

// console.log( hasDriversLicense && hasGoodVision && isTired);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');    
// } else {
//     console.log('Someone else should drive...');
// }







// // SWITCH statement
// const day = 'friday ';

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup')
//         break;
//     case 'tuesday': 
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend!');
//         break;
//     default:
//         console.log('Not a valid day!');
    
// }

// if(day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding meetup')
// }   else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// }   else if (day === 'wednesday' || day === 'thursday'){
//     console.log('Write code examples');
// }   else if (day === 'friday'){
//     console.log('Record videos');
// }   else if (day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend!');
// }   else {
//     console.log('Not a valid day!');
// }


//STATEMENTS and EXPRESSIONS

// // expression
// 3 + 4
// 1991
// true && false && !false


// //statements
// if(23 > 10){
//     const str = '23 is bigger';
// } else if( 23 <= 10){
//     const str = '10 is bigger than 23'
// }

// console.log(`I'm ${2035-1995} years old`) //expects expression







// CONDITIONAL OPERATOR instead of if && if else

// const age = 15;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 🧊')

// const drink = age >= 18 ? 'can drink wine🍷' : 'only water🧊'
// console.log(drink);

// let drink2;
// if(age >= 18) {
//     drink2 = 'can drink wine';
// }  else {
//     drink2 = 'only water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water🧊'}`)