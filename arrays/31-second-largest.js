/*
Input:
[10, 5, 20, 8, 15]

Output:
15

*/

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return undefined;
  }
  let largest = arr[0];
  let secondLargest;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    if (
      arr[i] < largest &&
      (arr[i] > secondLargest || secondLargest === undefined)
    ) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
console.log(findSecondLargest([10, 5, 20, 8, 15])); // 15
console.log(findSecondLargest([10, 10, 5])); // 5
console.log(findSecondLargest([10, 10, 10])); // undefined
console.log(findSecondLargest([-10, -5, -20])); // -10
console.log(findSecondLargest([5, 10])); // 5
console.log(findSecondLargest([5])); // undefined
console.log(findSecondLargest([])); // undefined
