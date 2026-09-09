function hasNegative(arr) {
  return arr.some(function (number) {
    return number < 0;
  });
}

console.log(hasNegative([2, 4, -5]));
