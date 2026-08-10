/*
2. Reverse Each Word in a String

Input:
"I love JavaScript"

Output:
"I evol tpircSavaJ"

Approach:
1. Extract each word.
2. Reverse each word.
3. Append it to the result.

Time Complexity: O(n)
Space Complexity: O(n)


*/
function reverseStr(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function normaliseSpaces(str) {
  let result = "";
  let i = 0;

  while (i < str.length) {
    // Skip spaces
    while (i < str.length && str[i] === " ") {
      i++;
    }

    // Add a space before every word except the first
    if (result.length > 0 && i < str.length) {
      result += " ";
    }

    // Copy the word
    while (i < str.length && str[i] !== " ") {
      result += str[i];
      i++;
    }
  }
  return result;
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
  return normaliseSpaces(result);
}

function reverseWord(str) {
  let result = str
    .trim()
    .split(/\s+/)
    // we can't built-in reverse funtion here instead we map each word and reverse
    .map((word) => reverseStr(word))
    // if we will not join it give response in array instead only join it will give array separated and when you give " " then comes
    .join(" ");
  return result;
}

console.log(reverseWordStr("I  love JavaScript"));
