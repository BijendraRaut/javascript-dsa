function replaceNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}
console.log(replaceNegative([5, -2, 8, -4, 3]));
