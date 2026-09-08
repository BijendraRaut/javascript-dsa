function findLargest(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function findMaxIndex(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let largest = findLargest(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === largest) {
      return i;
    }
  }

  return -1;
}

console.log(findMaxIndex([4, 2, 8, 2, 6, 2]));
