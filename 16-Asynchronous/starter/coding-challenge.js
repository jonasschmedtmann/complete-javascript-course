// coding challenge: use reverse geocoding api to generate information on a country based on its coordinates


const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Problem with geocoding ${res.status}`)
      }
      return res.json()
    })
    .then(data => {
      console.log(`You are in ${data.country}`)
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Problem with geocoding ${res.status}`)
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      renderCountry(data[0])
    })
    .catch(err => console.error(err.message))
};

whereAmI(52.508, 13.381);