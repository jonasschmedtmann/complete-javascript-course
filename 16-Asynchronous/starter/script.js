'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getJson = function (url, errorMsg) {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} (${res.status})`);
    } else {
      return res.json();
    }
  });
};
// Old way of making xml requests
const getCountryData = function (country) {
  //const request = new XMLHttpRequest();
  //request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  //request.send();
  getJson(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) {
        throw new Error(`No neighbour found`);
      }
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      renderError(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  //fetch(`https://restcountries.com/v3.1/name/${country}`)
  //  .then(function (res) {
  //    if (!res.ok) {
  //      throw new Error(`Country not found (${res.status})`);
  //    }
  //    return res.json();
  //  })
  //  .then(function (data) {
  //    renderCountry(data[0]);
  //    const neighbour = data[0].borders?.[0];
  //    return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
  //  })
  //  .then(res => res.json())
  //  .then(data => {
  //    renderCountry(data[0], 'neighbour');
  //  })
  //  .catch(err => {
  //    renderError(`Something went wrong 💥💥 ${err.message} 💥💥 try again.`);
  //  })
  //  .finally(() => {
  //    countriesContainer.style.opacity = 1;
  //  });

  //request.addEventListener('load', function () {
  //  const [countryData] = JSON.parse(this.responseText);
  //  renderCountry(countryData);

  //  const [neighbour] = countryData.borders;
  //  if (!neighbour) return;

  //  const request = new XMLHttpRequest();
  //  request.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
  //  request.send();

  //  request.addEventListener('load', function () {
  //    const [countryData] = JSON.parse(this.responseText);
  //    renderCountry(countryData, 'neighbour');
  //  });
  //});
};

const renderCountry = function (countryData, className = '') {
  let html = `
        <article class="country${' ' + className}">
          <img class="country__img" src="${countryData.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${countryData.name.common}</h3>
            <h4 class="country__region">${countryData.region}</h4>
            <p class="country__row"><span>👫</span>${countryData.population.toLocaleString(
              'en-US'
            )} people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(countryData.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.keys(countryData.currencies)[0]
            }</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeEnd', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (error) {
  countriesContainer.insertAdjacentText('beforeend', error);
  countriesContainer.style.opacity = 1;
};
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const renderCountryFromCoords = function (lat, lng) {
  return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`fetch unsuccessful (${res.status})`);
      }
      return res.json();
    })
    .then(data => {
      if (data.error) {
        throw new Error(`Country not found 🔍`);
      }
      getCountryData(data.country);
    })
    .catch(err => {
      countriesContainer.insertAdjacentText('beforeend', err);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
/* btn.addEventListener('click', function (e) {
  e.preventDefault();
  getPosition().then(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    return renderCountryFromCoords(lat, lng);
  });
}); */

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country 
ONLY based on GPS coordinates. For that, you will use a second API to geocode 
coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) 
and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means 
to convert coordinates to a meaningful location, like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to 
get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the 
attributes that you recieved about the provided location. Then, using this data,
 log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the 
console
5. This API allows you to make only 3 requests per second. If you reload fast, 
you will get this error with code 403. This is an error with the request. 
Remember, fetch() does NOT reject the promise in this case. So create an error 
to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the 
relevant attribute from the geocoding API result, and plug it into the countries 
API that we have been using.
7. Render the country and catch any errors, just like we have done in the last 
lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

//const getMyCoords = new Promise(function () {
//  navigator.geolocation.getCurrentPosition(position => {
//    const { latitude, longitude } = position.coords;
//    return [latitude, longitude];
//  });
//});
//const whereAmI = function (lat, lng) {
//  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    .then(res => {
//      return res.json();
//    })
//    .then(data => {
//      if (data.error) {
//        throw new Error(`Location could not be found. 🤷`);
//      }
//      if (Object.values(data)[1].includes('Throttled'))
//        throw new Error(`Max requests reached, on cooldown. 💯`);
//      console.log(`You are in ${data.city}, ${data.country}`);
//    })
//    .catch(err => console.warn(err));
//};
//
//const renderCountryFromCoords = function (lat, lng) {
//  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    .then(res => {
//      if (!res.ok) {
//        throw new Error(`fetch unsuccessful (${res.status})`);
//      }
//      return res.json();
//    })
//    .then(data => {
//      console.log(data);
//      if (data.error) {
//        throw new Error(`Country not found 🔍`);
//      }
//      getCountryData(data.country);
//    })
//    .catch(err => {
//      countriesContainer.insertAdjacentText('beforeend', err);
//    })
//    .finally(() => (countriesContainer.style.opacity = 1));
//};
//
//renderCountryFromCoords(52.508, 13.381);
//renderCountryFromCoords(19.037, 72.873);
//renderCountryFromCoords(-33933, -4444);
//console.log('Test Start');
//setTimeout(() => console.log('0 sec timer'), 0);
//
//Promise.resolve('Resolved promise 1').then(res => console.log(res));
//console.log('Test end');
//
//const lotteryPromise = new Promise(function (resolve, reject) {
//  setTimeout(function () {
//    if (Math.random() >= 0.5) {
//      resolve('You win 💰');
//    } else {
//      reject(new Error('You lost ❌'));
//    }
//  }, 2000);
//});
//
//lotteryPromise
//  .then(result => console.log(result))
//  .catch(result => console.log(result));
//
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log(`Wait of ${seconds}sec complete`);
      return resolve();
    }, seconds * 1000);
  });
};
//setTimeout(() => console.log('3sec Timeout complete'), 3000);
//wait(3)
//  .then(() => {
//    console.log('I waited 3 seconds');
//    return wait(1);
//  })
//  .then(() => console.log('I waited 3 + 1 seconds'));
//
//navigator.geolocation.getCurrentPosition(
//  position => {
//    console.log(position);
//  },
//  err => {
//    new Error(err);
//  }
//);
//
//
//getPosition().then(res => console.log(res));

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff
 on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This 
function returns a promise which creates a new image 
(use document.createElement('img')) and sets the .src attribute to the provided 
image path. When the image is done loading, append it to the DOM element with 
the 'images' class, and resolve the promise. The fulfilled value should be the 
image element itself. In case there is an error loading the image 
('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait 
function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 
'none'), and load a second image (HINT: Use the image element returned by the 
createImage promise to hide the current image. You will need a global variable 
for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong 
image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, 
otherwise images load too fast.

GOOD LUCK 😀
*/
//const numOfImages = 3;

//console.log(numOfImages);
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      console.log('loaded ', img.src);
      document.querySelector('.images').insertAdjacentElement('beforeend', img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Invalid image path'));
    });
  });
};
//btn.addEventListener('click', function () {
//  createImage('./img/img-1.jpg')
//    .then(() => wait(2))
//    .then(() => (img.style.display = 'none'))
//    .then(() => wait(2))
//    .then(() => {
//      img.src = './img/img-2.jpg';
//    })
//    .then(() => wait(2))
//    .then(() => (img.style.display = 'flex'))
//    .then(() => wait(2))
//    .then(() => (img.style.display = 'none'))
//    .then(() => wait(2))
//    .then(() => (img.src = './img/img-3.jpg'))
//    .then(() => wait(2))
//    .then(() => (img.style.display = 'flex'))
//    .then(() => wait(2))
//    .catch(err => console.error(err))
//    .finally(() => (img.style.display = 'none'));
//  //.finally(() => (document.querySelector('.img').style.display = 'none'));
//});

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this 
time using async/await (only the part where the promise is consumed). Compare 
the two versions, think about the big differences, and see which one you like 
more.
Don't forget to test the error handler, and to set the network speed to 
'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 
'imgArr';
2. Use .map to loop over the array, to load all the images with the 
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the 
array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn 
off the 'loadNPause' function.

GOOD LUCK 😀
*/
const loadNPause = async function (imgPath) {
  let image;
  try {
    image = await createImage(imgPath);
    await wait(0.5);
    image.style.display = 'none';
    image.src = './img/img-2.jpg';
    await wait(0.5);
    image.style.display = 'flex';
    await wait(0.5);
    image.style.display = 'none';
    image.src = './img/img-3.jpg';
    await wait(0.5);
    image.style.display = 'flex';
    await wait(0.5);
  } catch (err) {
    console.error(err);
  }
  image.style.display = 'none';
};
const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(imgArr.map(path => createImage(path)));
    imgs.forEach(img => img.classList.add('parallel'));
    console.log('imgs: ', imgs);
  } catch (err) {
    console.error(` ❌ ${err}`);
  }
};
loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);
btn.addEventListener('click', function () {
  loadNPause('./img/img-1.jpg');
});
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Could not get location`);
    const dataGeo = await resGeo.json();
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Could not retrieve country data');
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}`;
  } catch (err) {
    console.error(`❌${err}`);
    renderError(err);
  }
};

console.log('First');
/* (async function () {
  try {
    const whereAmIOutput = await whereAmI();
    if (!whereAmIOutput) throw new Error('Had a problem locating you.');
    console.log(whereAmIOutput);
  } catch (err) {
    console.error(` ❌ ${err} ❌`);
  }
  console.log('Third');
})(); */

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(country => country[0].capital));
  } catch (err) {
    console.error(` ❌ ${err} ❌`);
  }
};
//get3Countries(`usa`, `canada`, `mexico`);

(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/ital`),
    getJson(`https://restcountries.com/v3.1/name/egypt`),
    getJson(`https://restcountries.com/v3.1/name/spain`),
  ]);
  console.log(`💯`, res[0].name.common);
})();

const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long...'));
    }, sec * 1000);
  });
};
Promise.race([
  getJson(`https://restcountries.com/v3.1/name/egypt`),
  timeOut(0.08),
])
  .then(data => console.log('Race Winner: ', data))
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve('1. Success'),
  Promise.reject('2. Error'),
  Promise.resolve('3. Success'),
]).then(res => console.log(res));

Promise.allSettled([
  Promise.resolve('1. Success'),
  Promise.reject('2. Error'),
  Promise.resolve('3. Success'),
]).then(res => console.log(res));
