/*

Input:
[1, 2, 3, 4, 5]

Output: 5

*/

function arrayLength(arr) {
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    length++;
  }
  return length;
}

console.log(arrayLength([1, 2, 3, 4, 5]));
