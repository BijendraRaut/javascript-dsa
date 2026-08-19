/*
Input:  "HELLO"
Output: "hello"
*/

function convertLowercase(str) {
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

console.log(convertLowercase("@"));
console.log(convertLowercase("A"));
console.log(convertLowercase("Z"));
console.log(convertLowercase("["));
