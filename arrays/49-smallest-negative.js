/*

Input:
[5, -2, 10, -7, 3, -4]

Output:
-7

*/

function findSmallestNegative(arr) {
  let smallestNegative;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] < 0 &&
      (arr[i] < smallestNegative || smallestNegative === undefined)
    ) {
      smallestNegative = arr[i];
    }
  }
  return smallestNegative;
}

console.log(findSmallestNegative([10, 5, 20, 8, 15]));
// undefined

console.log(findSmallestNegative([-10, -5, -2]));
// -10

console.log(findSmallestNegative([-5, 3, 10, -2, 7]));
// -5

console.log(findSmallestNegative([]));
// undefined
