/*

Input:
[-5, 10, -2, 20, 3]

Output:
-7

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

console.log(sumNegative([1, 2, 3, 4])); // 0
console.log(sumNegative([-1, -2, -3])); // -6
console.log(sumNegative([-5, 10, -2, 20, 3])); // -7
console.log(sumNegative([0, 5, -2])); // -2
console.log(sumNegative([])); // 0
