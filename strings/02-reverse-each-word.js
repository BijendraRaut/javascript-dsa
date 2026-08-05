/*
2. Reverse Each Word in a String

Input:
"I love JavaScript"

Output:
"I evol tpircSavaJ"

*/
function reverseStr(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reverseWordStr(str) {
  let currentWord = "";
  let result = "";
  for (let i of str) {
    if (i !== " ") {
      currentWord += i;
    } else {
      result += reverseStr(currentWord) + " ";
      currentWord = "";
    }
  }
  result += reverseStr(currentWord);
  return result;
}

console.log(reverseWordStr("I love JavaScript"));
