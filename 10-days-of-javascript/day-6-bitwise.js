"use strict"

/**
 * Day 6: Bitwise
 * Input:
 * The first line contains an integer q, denoting the number
 * of function calls. Each of the q subsequent lines defines
 * a dataset for a function call in the form of two space-separated
 * integers describing the respective values of n and k.
 *
 * Output:
 * Return the maximum possible value of a & b < k
 * for any a < b in sequence S.
 */

function getMaxLessThanK(n, k) {
  let h = 2;
  let max = 0;
  for (let i = 1; i < n; i++, h++) {
    for (let j = h; j < n + 1; j++) {
      if ((i & j) < k) {
        max = Math.max(max, i & j);
      }
    }
  }
  return max;
}

function main() {
  const q = [
    [5, 2], // 1
    [8, 5], // 4
    [2, 2], // 0
    [9, 2], // 1
    [8, 3] // 2
  ];

  for (let i = 0; i < q.length; i++) {
    let [n, k] = q[i];
    console.log(getMaxLessThanK(n, k));
  }
}
main();