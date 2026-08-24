/* 

Input:
[10, 5, 20, 8, 15]

Output:
20

*/

function findSmallest(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallest([10, 5, 20, 8, 15]));
console.log(findSmallest([5]));
console.log(findSmallest([-10, -5, -20]));
console.log(findSmallest([3, 3, 3]));
console.log([]);
