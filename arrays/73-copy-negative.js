function copyNegative(arr) {
  let newArr = [];
  let newIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr[newIndex] = arr[i];
      newIndex++;
    }
  }
  return newArr;
}

const arr = [1, 2, 3, 4, 5, 6];
const result = copyNegative(arr);

console.log(arr);
console.log(result);
