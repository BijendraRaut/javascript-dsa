/*

Input:
arr = [10, 5, 20, 8, 15]
target = 10

Output:
[20, 15]

*/

function findGreaterThan(arr, target) {
  let newArr = [];
  let arrIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      newArr[arrIndex] = arr[i];
      arrIndex++;
    }
  }
  return newArr;
}

console.log(findGreaterThan([10, 5, 20, 8, 15], 10));
