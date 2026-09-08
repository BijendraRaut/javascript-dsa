function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

function lastMinIndex(arr) {
  let smallest = findSmallest(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === smallest) {
      return i;
    }
  }

  return -1;
}

console.log(lastMaxIndex([4, 2, 8, 2, 8, 6, 2]));
