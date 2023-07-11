/*
// write a function to check if a given number is prime
const isPrime = (number) => {
  if (number <= 1 || number % 2 === 0) {
    return false;
  } else {
    return true;
  }

}

console.log(isPrime(3));
console.log(isPrime(0));
console.log(isPrime(30));
console.log(isPrime(33));
*/

/*
// write a function that returns the largest number in an array

const largestNum = (nums) => {
  let largestNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
      largestNum = nums[i];
    }
  }
  return largestNum;
};


console.log(largestNum([2, 39, 804, 4200]));
*/

/*
// write a function to reverse a string in JS
function revString(str) {
  const reversedString = str.split('').reverse().join('');
  return reversedString;
};

console.log(revString('hello'));
revString('onion');
revString('jam');

function revString(str) {
  let newString = '';
  
  for (i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
  
}

console.log(revString('hello'));
*/

/*

//  write a function to remove duplicates from any array

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

function removeDuplicates(arr) {
  const newSet = new Set(arr);
  console.log(Array.from(newSet));
}

removeDuplicates(['a', 'a', 'c', 'd', 'a']);
*/

/*
// write a function to check if two strings are anagrams in js
// anagram
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
function compare(word1, word2) {
  const sortedW1 = word1.split('').sort().join('');
  const sortedW2 = word2.split('').sort().join('');

  if (sortedW1 === sortedW2) {
    console.log(`${word1} and ${word2} are anagrams`);
  } else {
    console.log(`${word1} and ${word2} are not anagrams`);
  }
}


compare('iceman', 'cinema')
*/

/*
// write a function to find the factorial of a given number in js
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = num;
  for (let i = num - 1; i >= 1; i--) {
    result *= i;
    console.log(result, i);
  }
  return result;
}

console.log(factorial(5));
*/

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(`i: ${i}`);
//   }, i * 1000)
// };

// for (let j = 0; j < 5; j++) {
//   setTimeout(() => {
//     console.log(`j: ${j}`);
//   }, j * 1000)
// };

// for (let a = 1; a < 200; a++) {
//   if (a % 3 === 0) {
//     console.log(a)
//   }
// }

/*
function timeConversion(str) {
  const timeOnly = str.substring(0, str.length - 2);
  const modifier = str.substring(str.length - 2,);
  let [hours, mins, secs] = timeOnly.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier.toUpperCase() === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${mins}:${secs}`;

};

console.log(timeConversion('12:05:45PM'));
console.log(timeConversion('01:05:45PM'));
console.log(timeConversion('08:05:45PM'));
*/

/*
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  let rightLeftDiag = 0;
  let leftRightDiag = 0;
  let j = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    rightLeftDiag += arr[i][i];
    leftRightDiag += arr[i][j];
    j--;
  }

  return Math.abs(rightLeftDiag - leftRightDiag);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
*/

// Given a list of integers, count and return the number of times each value appears as an array of integers.

function countingSort(arr) {
  const zeroArray = new Array(100).fill(0);
  for (const num of arr) {
    if (arr.includes(num)) {
      zeroArray[num] = zeroArray[num] + 1;
    }
  }
  // return console.log(zeroArray);
}

countingSort([
  63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
  99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44,
  89,
]);

/* Convert 12 hour time to miliary time
function timeConversion(s) {
  const timeOnly = s.substring(0, s.length - 2);
  const modifier = s.substring(s.length - 2);
  let [hours, mins, secs] = timeOnly.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier.toUpperCase() === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${mins}:${secs}`;
}

console.log(timeConversion("01:15:20am"));
*/
// Given an array of integers, where all elements but one occur twice, find the unique element.
function lonelyinteger(a) {
  // Write your code here
  for (let i = 0; i < a.length; i++) {
    let comparisonElement = a[i];
    let hasRepeat = false;
    for (let j = 0; j < a.length; j++) {
      if (comparisonElement == a[j] && i != j) {
        hasRepeat = true;
      }
    }
    if (!hasRepeat) {
      return comparisonElement;
    }
  }
}

// console.log(lonelyinteger([0, 0, 2, 2, 5]));

/*
function findMedian(arr) {
  // Write your code here
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(Math.floor(7 / 2)); // 3 -- floor rounds to the nearest integer existing in the number
  //ex; 3.9999 = 3 ex: 43,454.32910934093 rounds to 4, so 3.5 rounds to 3
  console.log(Math.round(7 / 2)); // 43,454-- normal rounding rules, 3.5 rounds up to 4
  const middleNum = sortedArr[Math.floor(sortedArr.length / 2)];
  return middleNum;
}

console.log(findMedian([12, 90, 50, 203, 504, 93, 21]));
*/

//Given a square matrix, calculate the absolute difference between the sums of its diagonal

const diagonalDifference = (arr) => {
  let leftRightDiag = 0;
  let RightLeftDiag = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      console.log(`arr[j]: ${arr[j]} \n`);
    }
  }
};

// diagonalDifference([
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ]);

/*
// Given a string, reverse each word in the sentence
const reverseWordInString = (str) => {
  const reverseSentence = str.split(' ').reverse().join(' ');
  const reverseEachWord = reverseSentence.split('').reverse().join('');
  return reverseEachWord;
}

let string = 'Welcome to this Javascript Guide!';
string = "Ilse Kassandra Rojas Lazette"
console.log(reverseWordInString(string));
*/

/*
// How would you check if a number is an integer?
const checkIfInt = (num) => {
  return num % 1 === 0;
}

console.log(checkIfInt(12))
console.log(checkIfInt(12.2))
*/


/*
// Make this work: duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]))


/*
// Remove duplicates from an array
*/

// function removeDuplicates(arr) {
//   const output = new Set(arr); // new Set(arr) removes duplucates from arr and returns it as an object
//   return [...output]; // [...] spreads output OBJ into an array
// }


// function removeDupsWithFilter(arr) {
//   arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   })
// }

// let testArr = [1, 2, 3, 4, 5, 1, 2, 2, 3];
// // console.log(removeDuplicates(testArr))

// removeDupsWithFilter(testArr)




// let newMatrix = [];
// let numberRun = 0;

// function flippingMatrix(matrix) {

//   for (let i = 0; i < matrix.length; i++) {
//     const rows = matrix[i];
//     const columns = matrix.map((column) => {
//       return column[i];
//     });

//     // console.log(columns)
//     newMatrix.push(logic(columns));
//     // console.log(newMatrix);

//     // console.log(logic((columns)));
//   }
//   //numberRun++;
//   //console.log(newMatrix)
//   check(matrix)
//   //flippingMatrix(newMatrix);

// }

// function check(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     const rows = matrix[i];
//     for (let j = 0; j < rows.length; j++) {
//       const val = rows[j];
//       console.log(rows.sort(val))
//       // console.log(sort(val))
//     }
//   }
// }
// function logic(col) {
//   if ((col[0] + col[1]) < (col[2] + col[3])) {
//     return col.reverse();
//   }
//   // if ((rows[0] + rows[1]) < (rows[2] + rows[3])) {
//   //   rows.reverse();
//   // }

//   return col;
// }


// flippingMatrix([
//   [112, 42, 83, 119],
//   [56, 125, 56, 49],
//   [15, 78, 101, 43],
//   [62, 98, 114, 108],
// ]);


// function getTeams(year, k) {
//   let page = 0;

//   const teamsURL = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League
//     &year=${year}
//     &page=${page}`;

//   fetch(teamsURL)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// }

// function findK(data) {
//   console.log(data)
// }

// getTeams(2015, 13);

// // return new object literal with the same properties and their values as obj excluding the property named prop if it exists
// function stripProperty(obj, prop) {
//   let objCopy = { ...obj };

//   if (prop) {
//     const { [prop]: omitted, ...rest } = objCopy;
//     return rest;
//   }
//   return objCopy;
// }


const obj = new String('1');
console.log(obj === '1')