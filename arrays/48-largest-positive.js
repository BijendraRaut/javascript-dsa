/*

Input:
[10, 5, 20, 8, 15, 12]

Output:
20

*/
function findLargestPositive(arr) {
  let largestPositive;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] > 0 &&
      (arr[i] > largestPositive || largestPositive === undefined)
    ) {
      largestPositive = arr[i];
    }
  }
  return largestPositive;
}

console.log(findLargestPositive([10, 5, 20, 8, 15]));
// 20

console.log(findLargestPositive([-10, -5, -2]));
// undefined

console.log(findLargestPositive([-5, 3, 10, -2, 7]));
// 10

console.log(findLargestPositive([]));
// undefined
