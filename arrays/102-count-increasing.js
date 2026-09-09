function countIncreasingPairs(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      count++;
    }
  }
  return count;
}

console.log(countIncreasingPairs([1, 2, 3, 4])); // 3

console.log(countIncreasingPairs([4, 3, 2, 1]));
// 0

console.log(countIncreasingPairs([1, 1, 2, 2]));
// 1

console.log(countIncreasingPairs([5]));
// 0

console.log(countIncreasingPairs([]));
// 0
