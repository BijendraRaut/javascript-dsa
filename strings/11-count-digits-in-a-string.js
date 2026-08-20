/* 

*/

function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0);
    if (code >= 48 && code <= 57) {
      count++;
    }
  }
  return count;
}

console.log(countDigits("=-=4675Hello1234"));
console.log(countDigits("Hello"));
