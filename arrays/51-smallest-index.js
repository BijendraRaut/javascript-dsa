/*

Input:
[10, 5, 20, 8, 15]

Output:
1

*/

function smallestIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }

  let smallest = 0;
  let smallestItem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestItem) {
      smallestItem = arr[i];
      smallest = i;
    }
  }
  return smallest;
}

console.log(smallestIndex([10, 5, 20, 8, 15]));
