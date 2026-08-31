/*

Input:
[10, 5, 20, 8, 15]
target = 10

Output:
2

*/

function countGreaterThan(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      count++;
    }
  }
  return count;
}

console.log(countGreaterThan([10, 5, 20, 8, 15], 10));
