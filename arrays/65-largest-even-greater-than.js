/*

Input:
[2, 8, 11, 14, 17, 20]

Target:
10

Output:
20

*/

function findLargestEvenGreaterThan(arr, target) {
  let largest;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] % 2 === 0 &&
      arr[i] > target &&
      (largest === undefined || arr[i] > largest)
    ) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestEvenGreaterThan([2, 8, 11, 14, 17, 20], 10)); // 20
console.log(findLargestEvenGreaterThan([2, 4, 6], 10)); // undefined
console.log(findLargestEvenGreaterThan([12, 8, 20, 6], 10)); // 20
console.log(findLargestEvenGreaterThan([], 5)); // undefined)
