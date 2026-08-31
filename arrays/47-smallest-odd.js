/*

Input:
[10, 5, 20, 8, 15, 12]

Output:
20

*/

function findSmallestOdd(arr) {
  let smallestOdd;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] % 2 !== 0 &&
      (arr[i] < smallestOdd || smallestOdd === undefined)
    ) {
      smallestOdd = arr[i];
    }
  }
  return smallestOdd;
}

console.log(findSmallestOdd([10, 5, 20, 8, 15, 12]));
// 5

console.log(findSmallestOdd([1, 3, 5, 7]));
// 1

console.log(findSmallestOdd([-10, -5, -2, -8]));
// -5

console.log(findSmallestOdd([]));
// undefined
