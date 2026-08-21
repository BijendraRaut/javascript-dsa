/*

Input:
"Hello World"

Output:
{
  vowels: 3,
  consonants: 7
}

*/

function lowerCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

function countVowelsConsonants(str) {
  let vowels = 0;
  let consonants = 0;

  str = lowerCase(str);
  for (let i = 0; i < str.length; i++) {
    let isAlphabet = str[i] >= "a" && str[i] <= "z";

    if (isAlphabet) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return { vowels, consonants };
}

console.log(countVowelsConsonants("Hello World"));
