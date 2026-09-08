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

function countMaxOccurrence(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let count = 0;
  let largest = findLargest(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === largest) {
      count++;
    }
  }

  return count;
}

console.log(countMaxOccurrence([4, 8, 2, 8, 6, 8]));
