/* 

Input:
[10, 5, 20, 8, 15]

Output:
20

*/

function findLargest(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([10, 5, 20, 8, 15]));
console.log(findLargest([5]));
console.log(findLargest([-10, -5, -20]));
console.log(findLargest([3, 3, 3]));
console.log([]);
