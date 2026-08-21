/*

Input:
"hello"

Output:
o
l
l
e
h

*/

function printCharactersReverse(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}

printCharactersReverse("Hello");
