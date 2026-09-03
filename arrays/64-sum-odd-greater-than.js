/*

Input:
[2, 5, 7, 8, 11, 14, 15]

Target:
6

Output:
33

*/

function sumOddGreaterThan(arr, target) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > target) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumOddGreaterThan([2, 5, 7, 8, 11, 14, 15], 6));
