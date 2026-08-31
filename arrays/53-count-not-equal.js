/*

Input:
[10, 20, 10, 30, 10, 40]

Target:
10

Output:
3

*/

function countNotEqual(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      count++;
    }
  }
  return count;
}

console.log(countNotEqual([10, 20, 10, 30, 10, 40], 10));
