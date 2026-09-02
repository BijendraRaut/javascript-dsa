/*

Input:
[2, -1, 5, 0, -3, 7]

Output:
3

*/

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

console.log(countNegative([2, -1, 5, 0, -3, 7]));
