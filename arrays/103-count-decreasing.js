function countDecreasingPairs(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      count++;
    }
  }
  return count;
}

console.log(countDecreasingPairs([1, 2, 3, 4])); // 0

console.log(countDecreasingPairs([4, 3, 2, 1]));
// 3

console.log(countDecreasingPairs([5, 5, 4]));
// 1

console.log(countDecreasingPairs([5]));
// 0

console.log(countDecreasingPairs([]));
// 0
