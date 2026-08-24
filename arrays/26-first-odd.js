/*

Input:
[2, 4, 7, 8, 9]

Output:
7

*/

function findFirstOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findFirstOdd([2, 4, 7, 8, 9]));
