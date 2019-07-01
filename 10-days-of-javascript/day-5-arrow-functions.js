"use strict"

/**
 * Day 5: Arrow Functions
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * Parameter(s):
 * nums: An array of numbers.
 */

result = a.map(n => n * (n % 2 === 0 ? 2 : 3));
console.log(result);