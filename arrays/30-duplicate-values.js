/**

Input:
[1, 2, 3, 2, 4, 1]

Output:
[1, 2]

Input:
[1, 2, 3, 4]

Output:
[]

[1, 1, 1, 2, 2, 3]

Output:
[1, 2]

*/
function containsValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

function duplicateValues(arr) {
  let newArr = [];
  let b = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !containsValue(newArr, arr[i])) {
        newArr[b] = arr[i];
        b++;
      }
    }
  }
  return newArr;
}

console.log(duplicateValues([1, 2, 3, 2, 4, 1, 6, 6]));
