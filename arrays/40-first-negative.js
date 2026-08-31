/*

Input:
[5, 10, -3, 8, -7]

Output:
-3

*/
function findFirstNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findFirstNegative([5, 10, -3, 8, -7]));
