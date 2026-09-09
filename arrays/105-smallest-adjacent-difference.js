function smallestAdjacentDifference(arr) {
  let smallest;
  for (let i = 1; i < arr.length; i++) {
    let difference = arr[i] - arr[i - 1];
    if (difference < 0) {
      difference = difference * -1;
    }
    if (smallest === undefined || difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}

console.log(smallestAdjacentDifference([5, 8, 3, 10]));
