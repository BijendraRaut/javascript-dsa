/*

Input:
[1, 2, 3, 4, 5]

Output:
[5, 4, 3, 2, 1]

*/

function reverseArray(arr) {
  let newArr = [];
  let b = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[b] = arr[i];
    b++;
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
