'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in mins
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
};

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    // this.type = type;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
};

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycle1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycle1)

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  // private instance properties
  #map;
  #mapEvent;
  #workouts = [];

  // immediately called when creating a new instance of App
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
        alert('Could not get position')
      })
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const currCoords = [latitude, longitude];

    // L is the namespace for Leaflet
    this.#map = L.map('map').setView(currCoords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    L.marker(currCoords).addTo(this.#map).bindPopup('Your Location').openPopup();

    // Handling click on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField(e) {
    e.preventDefault();
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    const validateInput = (...inputs) => inputs.every(value => Number.isFinite(value));
    const allPositive = (...inputs) => inputs.every(value => value > 0);

    // Get data from form
    const workType = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If running, create running object
    if (workType === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validateInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Input must be positive number!')
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // If cycling, create cycling object
    if (workType === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validateInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('Input must be positive number!')
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout)
    // render workout on map as marker
    this.renderWorkoutMarker(workout);

    // hide form and clear input fields
    inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';

  }

  renderWorkoutMarker(workout) {
    console.log(workout)
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent(`${workout.type.charAt(0).toUpperCase() + workout.type.slice(1)} Workout`)
      .openPopup();

  }
};

// App constructor immediately invoked upon creating a new instance
const app = new App();
