/*

Input:
"banana", "a"

Output:
"bnn"

*/

function removeCharacter(str, target) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== target) {
      newStr += str[i];
    }
  }
  return newStr;
}

let soap = "banana";
console.log(removeCharacter(soap, "a"));
