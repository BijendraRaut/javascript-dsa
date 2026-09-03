function findLastSmallerThan(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < target) {
      return arr[i];
    }
  }
  return -1;
}

console.log(findLastSmallerThan([3, 20, 8, 4, 12, 7, 15], 6));
