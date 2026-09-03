/*

Input:
[2, 4, 7, 8, 10, 12]

Target:
6

Output:
30

*/

function sumEvenGreaterThan(arr, target) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > target) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumEvenGreaterThan([2, 4, 7, 8, 10, 12], 6));
