/*

Input:
[5, -2, 10, -7, 3, -4]

Output:
-13

*/

function sumNegative(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumNegative([-5, 10, -2, 7, 3]));
