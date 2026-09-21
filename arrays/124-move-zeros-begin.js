function moveZerosToBegin(arr) {
  let j = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
}

console.log(moveZerosToBegin([0, 1, 0, 3, 12]));
console.log(moveZerosToBegin([5, 0, 2, 0, 7]));
console.log(moveZerosToBegin([1, 0, 2, 0, 3]));
