/*
Input:     "banana"
Character: "a"

Output: 3

*/

function countSpecialChar(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      count++;
    }
  }
  return count;
}

console.log(countSpecialChar("hello", "l"));
console.log(countSpecialChar("banana", "a"));
