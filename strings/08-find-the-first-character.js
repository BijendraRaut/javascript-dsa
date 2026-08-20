/*

Input:  "JavaScript"
Output: "J"

*/

function firstChar(str) {
  if (str.length === 0) {
    return "";
  }
  return str[0];
}
console.log(firstChar("Hello")); // H
console.log(firstChar("JavaScript")); // J
console.log(firstChar("A")); // A
console.log(firstChar("")); // ?
console.log(firstChar(" Hello")); // ?
console.log(firstChar(" ")); // ?
