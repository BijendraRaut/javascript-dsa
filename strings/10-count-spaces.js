/*

Input:  "I love JavaScript"
Output: 2

*/

function countSpaces(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  return count;
}

console.log(countSpaces("I love JavaScript"));
console.log(countSpaces("Hello World"));
console.log(countSpaces("   "));
console.log(countSpaces(""));
