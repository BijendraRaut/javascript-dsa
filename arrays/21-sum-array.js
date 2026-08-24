/* 

Input:
[1, 2, 3, 4, 5]

Output:
15

*/

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([3, 5, 2, 1, 4]));
