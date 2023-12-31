'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class idWorkout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
  _setDescription() {
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(
      1
    )} on ${this.date.toLocaleString('default', {
      month: 'long',
    })} ${this.date.getDate()}`;
  }
}
class idRunning extends idWorkout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
  }
}
class idCycling extends idWorkout {
  type = 'cycling';
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.duration / this.distance;
  }
}

class idApp {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();
    // Reset form fields
    this._toggleElevationField();
    // display local storage workouts
    this._displayLocalStorage();
    // Event Handler for when form is submitted
    form.addEventListener('submit', this._newWorkout.bind(this));
    // Event Handler for changing form from running to cycling
    inputType.addEventListener('change', this._toggleElevationField);
    // Event Handler for moveing map to selected workout
    containerWorkouts.addEventListener('click', this._moveToWorkout.bind(this));
  }
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert('Could not get geolocation.');
      }
    );
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(workout => {
      this._renderWorkoutMarker(workout);
    });
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _hideForm() {
    // Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.classList.add('hidden');
  }
  _toggleElevationField() {
    if (inputType.value === 'running') {
      inputCadence.closest('.form__row').classList.remove('form__row--hidden');
      inputElevation.closest('.form__row').classList.add('form__row--hidden');
    } else if (inputType.value === 'cycling') {
      inputElevation
        .closest('.form__row')
        .classList.remove('form__row--hidden');
      inputCadence.closest('.form__row').classList.add('form__row--hidden');
    }
  }
  _newWorkout(e) {
    const validateInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const isPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();
    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // Check if data is valid

    // If workout running, create running object

    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validateInputs(distance, duration, cadence) ||
        !isPositive(distance, duration, cadence)
      )
        return alert('Inputs must be numbers');

      workout = new idRunning([lat, lng], distance, duration, cadence);
      // if workout is cycling, create cycling object
    } else if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validateInputs(distance, duration, elevation) ||
        !isPositive(distance, duration)
      )
        return alert('Inputs must be numbers');
      workout = new idCycling([lat, lng], distance, duration, elevation);
    }
    // Add new object to workout array
    this.#workouts.push(workout);
    // Render workout on map
    this._renderWorkoutMarker(workout);
    this._renderWorkoutCard(workout);

    // Hide form
    this._hideForm();
    // Set local storage to all workouts
    this._setLocalStorage();
  }
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃' : '🚴'} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkoutCard(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃' : '🚴'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;
    if (workout.type === 'running') {
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
      `;
    } else if (workout.type === 'cycling') {
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
        `;
    }
    form.insertAdjacentHTML('afterend', html);
  }
  _findWorkoutByID(id) {
    return this.#workouts.find(wo => wo.id === id);
  }

  _moveToWorkout(e) {
    const clickedWorkout = e.target.closest('.workout');
    if (!clickedWorkout) return;
    const workout = this._findWorkoutByID(clickedWorkout.dataset.id);
    if (!workout) return;
    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  _displayLocalStorage() {
    const workouts = JSON.parse(localStorage.getItem('workouts'));
    if (!workouts) return;

    this.#workouts = workouts;

    this.#workouts.forEach(workout => {
      workout;
      this._renderWorkoutCard(workout);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new idApp();
