function allEven(arr) {
  return arr.every(function (number) {
    return number % 2 === 0;
  });
}

console.log(allEven([2, 4, 5]));
