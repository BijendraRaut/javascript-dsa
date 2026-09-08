function removePositive(arr) {
  let newArr = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      newArr[index] = arr[i];
      index++;
    }
  }
  return newArr;
}
console.log(removePositive([5, -2, 8, -4, 3]));
