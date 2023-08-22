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

// fetching data based off user's current location
const getCurrentLocation = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // using code to improve accuracy
      const countryCode = data.address.country_code;
      return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    })
    .then(res => res.json())
    .then(data => getCountryData(data[0].name.official))
    .catch(err => console.error(err));
};

// // using navigator to get current Country via openStreetMap API
btn.addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(pos => {
    const currPosUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
    getCurrentLocation(currPosUrl);
  });
});

// getCountryData('United States of America');