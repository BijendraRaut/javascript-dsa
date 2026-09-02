/*

Input:
[0, 1, 0, 3, 5, 0]

Output:
3

*/

function countZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    }
  }

  return count;
}

function countZeros1(arr) {
  let i = 0;
  let count = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      count++;
    }
    i++;
  }
  return count;
}
console.log(countZeros([0, 1, 0, 3, 5, 0]));
console.log(countZeros1([0, 1, 0, 3, 5, 0]));
