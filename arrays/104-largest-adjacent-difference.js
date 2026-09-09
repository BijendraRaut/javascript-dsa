function largestAdjacentDifference(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < 0) {
      if ((arr[i] - arr[i - 1]) * -1 > sum) {
        sum = (arr[i] - arr[i - 1]) * -1;
      }
    }
    if (arr[i] - arr[i - 1] > sum) {
      sum = arr[i] - arr[i - 1];
    }
  }
  return sum;
}

function largestAdjacentDifference1(arr) {
  let largest = 0;

  for (let i = 1; i < arr.length; i++) {
    let difference = arr[i] - arr[i - 1];
    if (difference < 0) {
      difference = difference * -1;
    }
    if (difference > largest) {
      largest = difference;
    }
  }
  return largest;
}
console.log(largestAdjacentDifference1([5, 8, 3, 10]));
