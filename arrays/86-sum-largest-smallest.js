function sumLargestSmallest(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return largest + smallest;
}

console.log(sumLargestSmallest([4, 4, 4]));
