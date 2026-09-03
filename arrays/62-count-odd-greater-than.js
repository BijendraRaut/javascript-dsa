/*

Input:
[2, 5, 7, 8, 11, 14]

Target:
6

Output:
2

*/

function countOddGreaterThan(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > target) {
      count++;
    }
  }
  return count;
}

console.log(countOddGreaterThan([2, 5, 7, 8, 11, 14], 5));
