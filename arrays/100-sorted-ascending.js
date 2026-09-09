function isSortedAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isSortedAscending([1, 2, 3, 4]));
// true

console.log(isSortedAscending([1, 2, 2, 4]));
// true

console.log(isSortedAscending([1, 3, 2, 4]));
// false

console.log(isSortedAscending([5, 4, 3]));
// false

console.log(isSortedAscending([5]));
// true

console.log(isSortedAscending([]));
// true
