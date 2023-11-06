// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18 + " Poo"); 
// console.log(Number('Jonas'));
// console.log(typeof NaN);
// console.log(String(23),23);
// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('i am ' + String(23) +  ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1;
// n=n-1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)");
// }else{
//     console.log('You should get a job!')
// }

// let height = 10;
// if(height) {
//     console.log("YAY! Height is defined");
// }else{
//     console.log('Not defined');
// }

// const age = '18';
// if(age === 18) console.log('Yes (strict)');
// if(age == 18) console.log('Yes (loose)');

// const favorite = Number(prompt("??"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('👌👌');
// }else if (favorite === 7){
//     console.log('👍🙌')
// }else{
//     console.log('NO')
// }

 const hasDriversLicense = true; //A
 const hasGoodVision = true; //B

 console.log(hasDriversLicense && hasGoodVision);
 console.log(!hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense);

 const shouldDrive = hasDriversLicense && hasGoodVision

 if(shouldDrive){
    console.log('Sarah is able to drive!')
 }else{
    console.log('Someone else should drive.')
 }