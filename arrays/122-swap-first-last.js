function swapFirstLast(arr) {
  let left = 0;
  let right = arr.length - 1;

  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  return arr;
}
console.log(swapFirstLast([1, 2, 3, 4, 5]));
