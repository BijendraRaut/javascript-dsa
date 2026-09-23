function moveNegativeToBegin(arr) {
  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      let temp = arr[i];
      let j = i;

      while (j > insertPos) {
        arr[j] = arr[j - 1];
        j--;
      }

      arr[insertPos] = temp;
      insertPos++;
    }
  }

  return arr;
}

console.log(moveNegativeToBegin([4, -1, 7, -3, 2]));
console.log(moveNegativeToBegin([1, -2, 3, -4, 5, -6]));
console.log(moveNegativeToBegin([-1, 2, -3, 4, -5]));
