function findFirstSmallerThan(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      return arr[i];
    }
  }
  return -1;
}

console.log(findFirstSmallerThan([3, 8, 4, 12, 7, 15], 6));
