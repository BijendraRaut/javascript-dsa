/*

Input:
[1, 2, 3, 4, 5, 6]

Output:
{
  even: [2, 4, 6],
  odd: [1, 3, 5]
}
  
*/

function separateEvenOdd(arr) {
  let even = [];
  let odd = [];
  let evenIndex = 0;
  let oddIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even[evenIndex] = arr[i];
      evenIndex++;
    } else {
      odd[oddIndex] = arr[i];
      oddIndex++;
    }
  }
  return { even, odd };
}

console.log(separateEvenOdd([1, 2, 3, 4, 5, 6]));
