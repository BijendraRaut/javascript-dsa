/*

Input:
[-5, 10, -2, 20, 3]

Output:
33

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

console.log(sumPositive([1, 2, 3, 4])); // 10
console.log(sumPositive([-1, -2, -3])); // 0
console.log(sumPositive([-5, 10, -2, 20, 3])); // 33
console.log(sumPositive([0, 5, -2])); // 5
console.log(sumPositive([])); // 0
