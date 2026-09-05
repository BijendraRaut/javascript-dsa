function copyPositiveEven(arr) {
  let newArr = [];
  let newIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 0) {
      newArr[newIndex] = arr[i];
      newIndex++;
    }
  }
  return newArr;
}
