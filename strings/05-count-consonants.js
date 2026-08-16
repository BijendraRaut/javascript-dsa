/*

Input:  "hello"
Output: 3

*/

function countConsonants(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isAlphabet = char >= "a" && char <= "z";
    let isNotVowel =
      char !== "a" &&
      char !== "e" &&
      char !== "i" &&
      char !== "o" &&
      char !== "u";

    if (isAlphabet && isNotVowel) {
      count++;
    }
  }
  return count;
}

console.log(countConsonants("hellm. "));
