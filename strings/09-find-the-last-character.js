/*

Input:  "JavaScript"
Output: "t"

*/
function lastChar(str) {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1];
}

console.log(lastChar("Hello")); // o
console.log(lastChar("JavaScript")); // t
console.log(lastChar("A")); // A
console.log(lastChar("")); // ""
console.log(lastChar("Hello ")); // " "
