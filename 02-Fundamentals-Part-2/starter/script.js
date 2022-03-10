"use strict"; // All you have to do to activate it for the entire script. Has to be the first line, however.
// You can also use it for a specific function or block, but you might as well use it for the whole script.
// Makes it easier to avoid accidental errors because it forbids us to do certain things and shows errors that it otherwise would fail silently

// One of the most important changes strict mode uses
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // WITHOUT strict mode, this would not show the error
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio"; // Yields an error because interface is a reserved word that might be implemented in the future
const private = 534; // Same thing. Strict mode reserves these words so we can't use them as variables

// ----------------------------------------------------------------

// A function is code that can be used over and over again

// You can think of functions as a food processor: it takes something and returns something else
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
  // return can return any value from the function. That value can then be used anywhere in the code
}

// fruitProcessor(5, 0); // Logs just 5 0
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Logs the full "Juice with 5 apples and 0 oranges."
// console.log(fruitProcessor(5, 0)); // Logs the same thing, just doesn't create a variable

// The coding principle DRY: Don't Repeat Yourself

