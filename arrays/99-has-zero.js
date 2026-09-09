function hasZero(arr) {
  return arr.some(function (number) {
    return number === 0;
  });
}

console.log(hasZero([2, 4, 0]));
