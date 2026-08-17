/*
Input:  "hello"
Output: "HELLO"
*/

function convertUppercase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0);
    result += String.fromCharCode(code - 32);
  }
  return result;
}

console.log(convertUppercase("hello"));
