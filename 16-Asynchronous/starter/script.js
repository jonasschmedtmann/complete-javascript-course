'use strict';

/*
API: Application Programming Interface

https://countries-api-836d.onrender.com/countries

PROMISE: An object that is used as a placeholder for future result of asynchronous operation
    -AKA: a container for an asynchronously delivered value
    -AKAA: a container for a future value
*/


// OLD SCHOOL AJAX: XMLHttpRequest()
/*
const getCountryandNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // responseText coming in as [{}], so we use destructing to just get the responseText[0]
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    
    renderCountry(data);
    
    // get neighbour country
    const neighbor = data.borders?.[0];
    
    if (!neighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha?codes=${neighbor}`);
    request2.send();
    
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2)
      renderCountry(data2, 'neighbour');
    })
  })
};

// getCountryandNeighbor('portugal');
getCountryandNeighbor('usa');
*/

/*
DO NOT NEST .THEN AFTER THE secondFetch LIKE THIS:

1 firstFetch
2 .then(res => res.json())
3 .then(data => {
  
  4 secondFetch(url)
  5 .then(res => res.json())
  6 .then(data => renderCountry(data))
  
})

You are in callback hell again ^^
---------------------------------
Instead DO THIS: 

1 firstFetch
2 .then(res => res.json()
3 .then(data => {
  4 secondFetch(url)
})
5 .then(res => res.json())
6 .then(data => renderCountry(data));
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = (country, className = '') => {
  const flag = country.flags.png;
  const [_, officialName] = Object.values(country.name);
  const region = country.region;
  const population = (+country.population / 1000000).toFixed(2);
  const language = Object.values(country.languages)[0];
  // console.log(Object.values(country.currencies)[0]);
  const currency = Object.values(country.currencies)[0].name;

  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${flag}" />
    <div class="country__data">
        <h3 class="country__name">${officialName}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${population}M people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
    </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const errMsg = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSONData = (url, errMsg = 'Something went wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) {
      // in .catch(err ...): this new Error is now the 'err'
      throw new Error(`${errMsg} (${response.status})`);
    }
    return response.json();
  });
};

// new way of fetching data-- PROMISES, using helper function
const getCountryData = country => {
  const mainCountryUrl = `https://restcountries.com/v3.1/name/${country}`;
  getJSONData(mainCountryUrl, 'Country not found')
    .then(data => {
      // render main country
      renderCountry(data[0]);

      // get border country data
      const borderCountry = data[0]?.borders?.[0];
      const borderCountryUrl = `https://restcountries.com/v3.1/alpha?codes=${borderCountry}`;

      if (!borderCountry) {
        throw new Error('No bordering country found')
      };

      return getJSONData(borderCountryUrl, 'Bordering country not found');
    })
    // render border country
    .then(data => renderCountry(data[0], 'neighbour'))
    // error handling for all errors
    .catch(err => {
      console.error(`💥💥💥 ${err}`);
      errMsg(`Something went wrong: ${err.message}`);
    })
  // .finally(() => {
  //   countriesContainer.style.opacity = 1;
  // });
};


// // GET COUNTRY DATA WITHOUT HELPER FUNCTION
// const getCountryData = country => {
//   const mainCountryUrl = `https://restcountries.com/v3.1/name/${country}`;
//   fetch(mainCountryUrl)
//     .then(response => {
//       if (!response.ok) {
//         // in .catch(err ...): this new Error is now the 'err'
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json()
//     })
//     .then(data => {
//       // render main country
//       renderCountry(data[0]);

//       // get border country data
//       const borderCountry = data[0].borders?.[0];
//       const borderCountryUrl = `https://restcountries.com/v3.1/alpha?codes=${borderCountry}`;

//       if (!borderCountry) {
//         errMsg('This country has no neighbour country')
//       };

//       return fetch(borderCountryUrl);
//     })
//     .then(res => {
//       if (!response.ok) {
//         // in .catch(err ...): this new Error is now the 'err'
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return res.json()
//     })
//     // render border country
//     .then(data => renderCountry(data[0], 'neighbour'))
//     // error handling for all errors
//     .catch(err => {
//       console.error(`💥💥💥 ${err}`);
//       errMsg(`Something went wrong: ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('United States of America');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   error => reject(new Error(error))
//     // )
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   })
// };

// const whereAmI = () => {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`)
//       }
//       return res.json()
//     })
//     .then(data => {
//       console.log(`You are in ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`)
//       }
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.error(err.message))
// };




/*
// What order will these print in???
console.log('test start'); //1
setTimeout(() => console.log('0 sec timer'), 0); //3
Promise.resolve('Resolved promise 1').then(res => console.log(res)); //2
console.log('test end'); //1


Promise.resolve('Resolved promise 2')
  .then(res => {
    for (let i = 0; i < 100000000; i++) { }
    console.log(res)
  })

// Building Promises
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery draw happening...');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🎉')
    } else {
      reject(new Error('You LOSE ⛈'))
    }
  }, 2000);
});

// consuming the promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))

// Promisifying = turning callback based behavior into promises
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000)
  });
};

// // LET'S PROMISIFY THIS
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

wait(1)
  //nothing is being returned from the resolved promise hence why we aren't passing anything into this .then()
  .then(() => {
    console.log('1 SECOND PASSED');
    return wait(1);
  })
  .then(() => {
    console.log('2 SECONDS PASSED');
    return wait(1);
  })
  .then(() => {
    console.log('3 SECONDS PASSED');
    return wait(1);
  })
  .then(() => {
    console.log('4 SECONDS PASSED');
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('def')).catch(x => console.error(x));

*/

/* 
    aysnc/await is just syntactic sugar for consuming promises 
    fetch(url).then(res => res.json())
*/

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!geoRes.ok) {
      throw new Error('Problem getting current location')
    }
    const geoData = await geoRes.json();
    const countryRes = await fetch(`https://restcountries.com/v3.1/name/${geoData.country}`);
    if (!countryRes.ok) {
      throw new Error('Problem getting country data')
    }
    const countryData = await countryRes.json();
    renderCountry(countryData[0]);

    return `you are in ${geoData.city}`
  } catch (err) {
    console.error(err);
    errMsg(`something went wrong, ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1');
// whereAmI() // consuming promises
//   .then(city => console.log(`3: ${city}`))
//   .catch(err => console.error(`3: ${err.message}`))
//   .finally(() => console.log('4'));
console.log('2');

// immediately invoked function using async/await 
// ( function(){} )();
(async function () {
  try {
    const city = await whereAmI();
    console.log(`3: ${city}`)
  } catch (err) {
    console.error(`3: ${err.message}`);
  }
  console.log('4')
})();
*/

// whereAmI();

// const whereAmI = () => {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`)
//       }
//       return res.json()
//     })
//     .then(data => {
//       console.log(`You are in ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`)
//       }
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.error(err.message))
// };

// btn.addEventListener('click', whereAmI);


// /////////// running promises in parallel (when data doesnt depend on other data, do this) ////////

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSONData(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSONData(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSONData(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital)

    //  Promise.all() short circuits when one promise rejects-- one rejected promise is enough to reject the entire Promise.all()
    const data = await Promise.all([
      getJSONData(`https://restcountries.com/v3.1/name/${c1}`),
      getJSONData(`https://restcountries.com/v3.1/name/${c2}`),
      getJSONData(`https://restcountries.com/v3.1/name/${c3}`)
    ]);
    console.log(data.map(d => d[0].capital))
  } catch (err) {
    console.error(err);
  }
};

// get3Countries('portugal', 'canada', 'tanzania');


/*
 Promise.race()
-promise concurrency method
-takes in an array of promises and returns the first *settled* (not necessarily fulfilled/resolved) promise
-The promise settles as fulfilled if the first promise is resolved, and settles as rejectted (and caught in the error handling) if the first promise to settle is rejected
*/

// example 1
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one'); // resolve this promise after 500ms with the return value of 'one'
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2])
//   .then(value => console.log(value)); // expect 'two' because that promise is resolved first

// // example 2
// const sleep = (time, value, state) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === 'fulfill') {
//         return resolve(value);
//       } else {
//         return reject(new Error(value));
//       }
//     }, time)
//   })
// };

// const p1 = sleep(500, 'p1', 'fulfill');
// const p2 = sleep(100, 'p2', 'reject');
// const p3 = sleep(400, 'p3', 'fulfill');

// Promise.race([p1, p2, p3])
//   .then(response => console.log(response))
//   .catch(err => console.error(err)); // expected 'error: p2' bc a rejected promise was settled first

// (async function () {
//   const response = await Promise.race([p1, p2, p3]);
//   console.log(response);
// })();


// /*
//  Promise.allSettled()
//  - takes in array of promises and returns an array of all settled promises
//  - similar to Promise.all() but promise.all() short circuits as soon as one promise rejects, Promise.allSettled() returns all promises regardless of how they settled
//  */

// Promise.allSettled([p1, p2, p3]).then(value => console.log(value));

// Promise.allSettled([
//   Promise.resolve('succes'),
//   Promise.reject('error'),
//   Promise.resolve('another success')
// ]).then(res => console.log(res))
//   .catch(err => console.error(err));


// /* 
// Promise.any()
// - takes in array of promises and returns first fulfilled promise, ignores rejected promises
// - key: rejected promises are ignored
// - will always return a resolved promise unless *all* promises are rejected
// */

// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success')
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
