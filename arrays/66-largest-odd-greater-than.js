/*

Input:
[2, 8, 11, 14, 17, 20]

Target:
10

Output:
20

*/

function findSmallestOddGreaterThan(arr, target) {
  let smallest;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] % 2 !== 0 &&
      arr[i] > target &&
      (smallest === undefined || arr[i] < smallest)
    ) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallestOddGreaterThan([2, 8, 11, 14, 17, 20], 10)); // 20
console.log(findSmallestOddGreaterThan([2, 4, 6], 10)); // undefined
console.log(findSmallestOddGreaterThan([12, 8, 20, 19, 6], 10)); // 20
console.log(findSmallestOddGreaterThan([], 5)); // undefined)
