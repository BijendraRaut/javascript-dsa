/*
Input:     "javascript"
Character: "v"

Output: true

Input:     "javascript"
Character: "z"

Output: false

*/

function containsCharacter(str, target) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(containsCharacter("javascript", "z"));
