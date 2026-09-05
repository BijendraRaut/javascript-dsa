function copyOddGreaterThan(arr, target) {
  let newArr = [];
  let newIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > target) {
      newArr[newIndex] = arr[i];
      newIndex++;
    }
  }
  return newArr;
}

console.log(copyOddGreaterThan([2, 7, 8, 10, 13, 14], 8)); // [10, 14])
