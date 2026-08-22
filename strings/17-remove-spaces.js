/*

Input:
"I love JavaScript"

Output:
"IloveJavaScript"

*/

function removeSpaces(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeSpaces("I love JavaScript"));
