/*
Input:  "hello"
Output: "HELLO"
*/

function convertUppercase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(convertUppercase("hello"));
// HELLO

console.log(convertUppercase("mane"));
// MANE

console.log(convertUppercase("hello123"));
// HELLO123

console.log(convertUppercase("Hello World"));
// HELLO WORLD

console.log(convertUppercase("JavaScript is Awesome!"));
// JAVASCRIPT IS AWESOME!
