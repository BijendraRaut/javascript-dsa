function firstUniqueValues(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      data[arr[i]] = data[arr[i]] + 1;
    } else {
      data[arr[i]] = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]] === 1) {
      return arr[i];
    }
  }
  return -1;
}

console.log(firstUniqueValues([2, 3, 3, 2, 5, 2]));
