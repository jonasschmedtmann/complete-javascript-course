"use strict"

/**
 * Day 5: Template Literals
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function sides(literals, ...expressions) {
  const root = Math.sqrt((expressions[1] * expressions[1]) - (16 * expressions[0]))
  const s1 = (expressions[1] + root) / 4;
  const s2 = (expressions[1] - root) / 4;
  return ([s2, s1]);
}

let s1 = 1;
let s2 = 14;
[s1, s2] = [s1, s2].sort();
const [x, y] = sides `The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);