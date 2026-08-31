/*

Input:
[10, 5, 20, 8, 15]

Output:
2

*/

function largestIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }

  let largest = 0;
  let largestItem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestItem) {
      largestItem = arr[i];
      largest = i;
    }
  }
  return largest;
}

console.log(largestIndex([10, 5, 20, 8, 15]));
