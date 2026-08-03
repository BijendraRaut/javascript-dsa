/*
Question:
Reverse a String

Input:
"hello"

Output:
"olleh"

Approach:
Using split(), reverse(), and join()

Time Complexity:
O(n)

Space Complexity:
O(n)
*/

function reverseStr(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseStr("hello"));
