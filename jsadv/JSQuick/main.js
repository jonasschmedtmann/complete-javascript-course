// 1. summ all the values from array
var numbers = [3, 5, 7, 2];
var sum = numbers.reduce((x, y) => x + y);
console.log(sum);

// 2. Using length to resize an array
var array = [11, 12, 13, 14, 15];
console.log(array.length); // 5

array.length = 3;
console.log(array.length); // 3
console.log(array); // [11, 12, 13]

array.length = 0;
console.log(array.length); // 0
console.log(array); // []

// 3. Shuffle elements from array
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  list.sort(function () {
    return Math.random() - 0.5;
  })
);
// [7, 5, 3, 6, 2, 4, 1, 9, 8]

// 4. Filtering for unique values
const my_array = [1, 2, 2, 3, 3, 4, 5, 5];
const unique_array = [...new Set(my_array)];
console.log(unique_array); // [1, 2, 3, 4, 5]

// 5. Comma operator
let x = 1;
x = (x++, x);
console.log(x); // 2

x = (2, 3);
console.log(x); // 3

// 6. Swap values
let a = 1,
  b = ((2)[(a, b)] = [b, a]); // TODO
console.log(a);
console.log(b);

// Short circuit conditionals
if (hungry) {
  goToFridge();
}

hungry && goToFridge();
