'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function _renderCountry(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
}

function _renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}

function _getJSON(url, errorMsg = 'Something went wrong.') {
  return fetch(url).then(response => {
    if (!response.ok) _throwError(errorMsg);
    return response.json();
  });
}
function _throwError() {
  throw new Error(`${errorMsg} (${response.status})`);
}

function getCountryData(country) {
  _getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found.'
  )
    .then(data => {
      _renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error(`No neighbour found!`);
      return _getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found.'
      );
    })
    .then(data => {
      _renderCountry(data, 'neighbour');
    })
    .catch(err => {
      // catches errors everywhere
      console.error(`${err} 💥💥💥`);
      _renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      // this only works on promises
      countriesContainer.style.opacity = 1;
    });
}

// btn.addEventListener('click', () => getCountryData('portugal'));

///////////////////////////////////////
// 254. The Event Loop in Pracitce

// console.log('Test Start'); // 1st Log
// setTimeout(() => console.log('0 Second Timer'), 0); // Last Log
// Promise.resolve('Resolved Promise #1') // Create a promise that is immediately resolved
//   .then(res => console.log(res)); // 3rd Log

// console.log('Test End'); // 2nd Log

///////////////////////////////////////
// 255. Building a Simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery is drawing numbers...');
//   const lottoNumber = Math.random();
//   setTimeout(() => {
//     if (lottoNumber >= 0.5) {
//       resolve('You Win!');
//     }
//     if (lottoNumber <= 0.5) {
//       resolve('You lose....');
//     } else {
//       reject(new Error('Are you sure you bought a ticket?'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// 'Promisifying' is to wrap callback functions into promises

// wait() takes ms and returns
// // Promise thats calls resolve function
// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
// wait(2000)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1000);
//   })
//   .then(() => console.log('I waited for 1 second after the first wait().'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.log(x));

///////////////////////////////////////
// 256. Promisifying the Geolocation API

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }
// getPosition().then(pos => console.log(pos));

// function whereAmI() {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok || response.status === 403)
//         throw new Errror('Something went wrong.');
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return getCountryData(`${data.country}`);
//     })

//     .catch(err => console.log(err));
// }

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// 258. Consuming Prmises with Async/Await

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// // Async/Await is simply Syntactic Sugar
// const whereAmI = async function () {
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;
//   const geo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   console.log(geo);
//   const geoRes = await geo.json();
//   console.log(geoRes);
//   getCountryData(geoRes.country);
// };
// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// 259. Error Handling with try...catch

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// // Async/Await is simply Syntactic Sugar
// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const geo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!geo.ok) throw new Error('Problem getting location data.');
//     const geoRes = await geo.json();
//     getCountryData(geoRes.country);
//   } catch (err) {
//     console.error(err);
//     renderError(`${err.message}`);
//   }
// };

///////////////////////////////////////////////
// 260. Returning Values from Async Functions

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Async/Await is simply Syntactic Sugar
async function whereAmI() {
  // async always returns promises
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const geo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!geo.ok) throw new Error('Problem getting location data.');
    const geoRes = await geo.json();
    getCountryData(geoRes.country);
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);

    // Reject Promise returned from async function
    throw err;
  }
}

// console.log(`1: Will get location.`);

// (async function () {
//   try {
//     const resp = await whereAmI();
//     console.log(resp);
//     console.log(`You are in ${resp}.`);
//   } catch (err) {
//     console.log(`2: ${err.message}`);
//   }
//   console.log(`3: Finished getting location.`);
// })();

///////////////////////////////////////////////
// 261. Runing Promises in Parallel

// async function get3Countries(c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       // short circuits if 1 promise rejects
//       _getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       _getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       _getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// }
// get3Countries('portugal', 'canada', 'tanzania');

///////////////////////////////////////
// 262. Other Promise Combinators

// Promise.race returns first
// (async function () {
//   const res = await Promise.race([
//     _getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     _getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     _getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = sec =>
//   new Promise((_, reject) =>
//     setTimeout(() => reject(new Error('Request took too long!')), sec * 1000)
//   );

// Promise.race([
//   _getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
//   timeout(0.01),
// ])
//   .then(data => console.log(data[0]))
//   .catch(err => console.log(err));
// Returns winning API call
// Short circuits whenever a Promise is settled (regardless of fulfilled/fail)

// Promise.allSettled like Promise.all but never short-circuits
// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.resolve('success 2'),
//   Promise.reject('ERROR'),
// ]).then(data => console.log(data));

// // Promise.any (ES2021)
// // returns value of first *fulfilled* promise (ignores failures) as a string
// Promise.any([
//   Promise.resolve('success'),
//   Promise.resolve('success 2'),
//   Promise.reject('ERROR'),
// ]).then(data => console.log(data));

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// function whereAmI(lat, lng) {
//   countriesContainer.style.opacity = 1;
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok || response.status === 403)
//         throw new Errror('Something went wrong.');
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return getCountryData(`${data.country}`);
//     })
//     .catch(err => console.log(err));
// }

// whereAmI(52.508, 13.381); // test 1
// whereAmI(19.037, 72.873); // test 2
// whereAmI(-33.933, 18.474); // test 3

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const imgContainer = document.querySelector('.images');
// function createImage(imgPath) {
//   return new Promise(function (resolve, reject) {
//     const newImage = document.createElement('img');
//     newImage.src = imgPath;

//     newImage.addEventListener('load', () => {
//       imgContainer.append(newImage);
//       resolve(newImage);
//     }),
//       newImage.addEventListener('error', () =>
//         reject(new Error('Someone broke something somewhere.'))
//       );
//   });
// }
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2000);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2000);
//   })
//   .then(() => {
//     currentImg.style.display = 'block';
//     return wait(2000);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.log(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
