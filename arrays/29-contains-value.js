/*
Input:
[10, 20, 30, 40]
Target:
30

Output:
true

*/

function containsValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(containsValue([], 30));
