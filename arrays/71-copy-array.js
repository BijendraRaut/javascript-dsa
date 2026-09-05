function copyArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}

const arr = [1, 2, 3];
const result = copyArray(arr);

result[0] = 100;

console.log(arr); // [1, 2, 3]
console.log(result); // [100, 2, 3]
