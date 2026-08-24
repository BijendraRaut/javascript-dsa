/* 

Input:
[10, 20, 30]

Output:
20

*/

function arrayAverage(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(arrayAverage([10, 20, 30]));
console.log(arrayAverage([5]));
console.log(arrayAverage(10, 20));
