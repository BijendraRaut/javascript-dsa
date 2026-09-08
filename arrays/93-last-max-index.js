function findLargest(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function lastMaxIndex(arr) {
  let largest = findLargest(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === largest) {
      return i;
    }
  }

  return -1;
}

console.log(lastMaxIndex([4, 2, 8, 2, 8, 6, 2]));
