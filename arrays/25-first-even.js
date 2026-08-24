/*

Input:
[1, 3, 7, 8, 10]

Output:
8

*/

function findFirstEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findFirstEven([1, 3, 5]));
