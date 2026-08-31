/*

Input:
[-5, 10, 3, -2, 8, 4]

Output:
-2

*/

function findLastNegative(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findLastNegative([-5, 10, 3, -2, 8, 4]));
