/*

Input:
[-5, 10, -2, 20, 3]

Output:
3

*/
function countPositive(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  return count;
}

console.log(countPositive([1, 2, 3])); // 3
console.log(countPositive([-1, -2, -3])); // 0
console.log(countPositive([-5, 10, -2, 20, 3])); // 3
console.log(countPositive([0, 5, -2])); // 1
console.log(countPositive([])); // 0
