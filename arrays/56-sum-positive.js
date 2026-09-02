/*

Input:
[-5, 10, -2, 7, 3]

Output:
20

*/

function sumPositive(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumPositive([-5, 10, -2, 7, 3]));
