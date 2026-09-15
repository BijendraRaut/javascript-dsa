/*
Problem: Given a string, find the first non-repeating character and return its index. If none exists, return -1.
Example: "leetcode" → 2 (the l at index 2... actually check l,e,e,t,c,o,d,e — work it out yourself, don't verify against memory).
*/

function firstNonRepeating(str) {
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        index++;
      }
    }
    if (index === 1) {
      return i;
    } else {
      index = 0;
    }
  }
  return -1;
}

console.log(firstNonRepeating("leetcode"));
console.log(firstNonRepeating("aabbc"));
console.log(firstNonRepeating("abc"));
console.log(firstNonRepeating("a"));
