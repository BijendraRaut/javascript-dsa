function duplicateCount(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      data[arr[i]] = data[arr[i]] + 1;
    } else {
      data[arr[i]] = 1;
    }
  }
  let count = 0;
  for (let key in data) {
    if (data[key] > 1) {
      count++;
    }
  }
  return count;
}

console.log(duplicateCount([2, 3, 3, 2, 5, 2, 5]));
