/*
3. Find the Number of Characters in a String


Input:
"Hello"

Output:
5

*/

function countChars(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

console.log(countChars("Mane"));
