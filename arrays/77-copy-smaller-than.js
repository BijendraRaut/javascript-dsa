function copySmallerThan(arr, target) {
  let newArr = [];
  let newIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      newArr[newIndex] = arr[i];
      newIndex++;
    }
  }
  return newArr;
}

console.log(copySmallerThan([2, 8, 4, 10, 3], 5)); // [8, 10])
