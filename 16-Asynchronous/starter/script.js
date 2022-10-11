'use strict';
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class= "country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages[0].name
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies[0].name
                    }</p>
                </div>
            </article> `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then(response => {
    //console.log(response);
    //throw terminates the current function and the promise will reject
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

///////////////////////////////////////
/*
//Old school way to do it
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  //Sending the request, and fetching the data
  request.send();

  //After the load
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class= "country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
                ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article> `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
*/
/////Creating a sequence of ajax call//////

/*
const getCountryAndNeighbour = function (country) {
  //Ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //render country 1
    renderCountry(data);

    //Get neighbour country
    const [neighbour] = data.borders;
    console.log(neighbour);
    if (!neighbour) return;

    //Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');

//Callback Hell - having callback functions inside of callback functions. It's not readable code and it can create a lot of bugs
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

///////////Modern  Way to AJAX//////////
// const getJSON = (url, errorMsg = 'Something went wrong') => {
//   return fetch(url).then(response => {
//     console.log(response);
//     //throw terminates the current function and the promise will reject
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });

// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       //throw terminates the current function and the promise will reject
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       //Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     //Sucess
//     .then(data => renderCountry(data, 'neighbour'))
//     //error
//     .catch(err => {
//       //console.log(`${err}`);
//       renderError(`Something went wrong! ${err.message}. Try again!`);
//     })
//     //Used to always needing to happen no matter if it's sucess or fail
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/*
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data);
      console.log(data[0].borders === true);
      renderCountry(data[0]);
      const neighbour = data[0].borders;
      console.log(neighbour);
      if (!neighbour) throw new Error('No neighbour found!');
      //Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    //Sucess
    .then(data => renderCountry(data, 'neighbour'))
    //error
    .catch(err => {
      console.log(`${err}`);
      renderError(`Something went wrong! ${err.message}. Try again!`);
    })
    //Used to always needing to happen no matter if it's sucess or fail
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//////////Challenge 1 /////////

const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error(`Geocoding problem!`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err}`));
};

whereAmI(52.508, 13.381);


//////Event Loop in Practice

console.log('Test Start'); //1
setTimeout(() => console.log('0 sec have passed'), 0); //4
Promise.resolve('Resolved Promise 1').then(res => console.log(res)); //3

Promise.resolve('Resolved Promise 2').then(res => {
    for(let i = 0; i < 1000000000; i++) {}
    console.log(res);
});
console.log('Test end'); //2


///////Building a promise//////
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      //fullfilled promise with the resolve
      resolve('You WIN!');
    } else {
      //rejected promise
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeOut
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited 1 second');
    return wait(2);
  })
  .then(() => {
    console.log('I waited for 2 second');
    return wait(3);
  })
  .then(() => {
    console.log('I waited for 3 second');
    return wait(4);
  });

//Always fullfilled
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x))
*/
/*
console.log('Getting Position');

const getPosition = () =>
  new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

getPosition().then(pos => console.log(pos));

const whereAmI = () => {
  getPosition()
    .then(pos => {
      const {latitude : lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Geocoding problem!`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err}`));
};

whereAmI(52.508, 13.381);

btn.addEventListener('click', whereAmI);
*/
/*
//////Challenge 2 //////
const imgContainer = document.querySelector('.images');
let currentImg;
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found!'));
    });
  });
};

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 load');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(err => console.log(err));
*/

////////ASYNC / AWAIT

//try....catch
// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch (err) {
//     alert(err.message);
// }
/*
const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

const whereAmI = async () => {
  //Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    //Country data
    //await will stop the execution of the function untill the data is fetch
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();

    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(`Something went wrong ${err.message}`);

    //Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI(); //Always returns a promise!
// console.log(city);

//Mixing the old and new way is not ideal!
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3. Finished getting location'));

//Better way!
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2. ${city}`);
  } catch (err) {
    renderError(console.log(`2. ${err.message}`));
  }
  console.log('3. Finished getting location');
})();


const get3Countries = async (c1, c2, c3) => {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    //Promise.all - receivesan array and gives an array
    //!!!!! If one promise rejects all of them reject!
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');


/////////Promise.race///// the first settled promise wins the race
//even if it's rejected it will win the race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

//if the user has really slow internet stop the loading
const timeout = seconds => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, seconds * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

///////Promise.allSettled - returns an array of all the settled promises
Promise.allSettled([
  Promise.resolve('Sucess'),
  Promise.reject('Error'),
  Promise.resolve('Another sucess'),
]).then(res => console.log(res));

//here we would get an error because one rejected promise throws all away
Promise.all([
  Promise.resolve('Sucess'),
  Promise.reject('Error'),
  Promise.resolve('Another sucess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

  ///////Promise.any - return the first fullfilled sucess result
  Promise.any([
    Promise.resolve('Sucess'),
    Promise.reject('Error'),
    Promise.resolve('Another sucess'),
  ])
    .then(res => console.log(res))
    .catch(err => console.error(err));
*/
/*
///////Challenge 3 ///////
const imgContainer = document.querySelector('.images');
let currentImg;
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found!'));
    });
  });
};

const loadnPause = async () => {
  try {
    let img1 = true;

    while (true) {
      const img = `img/img-${img1 ? 1 : 2}.jpg`;
      currentImg = await createImage(img);
      await wait(2);
      currentImg.style.display = 'none';
      img1 = !img1;
    }
  } catch (err) {
    err => console.error(err);
  }
};


//loadnPause();

*/