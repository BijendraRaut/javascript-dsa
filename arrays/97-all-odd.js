function allOdd(arr) {
  return arr.every(function (number) {
    return number % 2 !== 0;
  });
}

console.log(allOdd([1, 3, 5]));
