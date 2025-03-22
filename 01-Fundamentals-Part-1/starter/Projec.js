

let length = Number(prompt("Enter Length of rectangle"));
let width = Number(prompt("Enter width of rectangle"));

length = parseInt(length);
width = parseInt(width);

if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    console.log("Please enter valid positive numbers for length and width.");
} else {
    // Calculate area
    let area = length * width;
    console.log(`The area of the rectangle is ${area} square units.`);
}