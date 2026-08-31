/*

Input:
[10, 5, 20, 8, 15, 12]

Output:
20

*/

function findLargestEven(arr) {
  let largestEven;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] % 2 === 0 &&
      (arr[i] > largestEven || largestEven === undefined)
    ) {
      largestEven = arr[i];
    }
  }
  return largestEven;
}

console.log(findLargestEven([10, 5, 20, 8, 15, 12]));
// 20

console.log(findLargestEven([1, 3, 5, 7]));
// undefined

console.log(findLargestEven([-10, -5, -2, -8]));
// -2

console.log(findLargestEven([]));
// undefined
