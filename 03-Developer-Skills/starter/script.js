// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C. FIX
    value: prompt("Degree celsius : "),
  };

  console.log(measurement);
  // B. FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A. identify the bug;
console.log(measureKelvin());
