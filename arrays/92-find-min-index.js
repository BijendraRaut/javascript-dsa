function findSmallest(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

function findMinIndex(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let smallest = findSmallest(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === smallest) {
      return i;
    }
  }

  return -1;
}

console.log(findMinIndex([4, 2, 8, 2, 6, 2]));
