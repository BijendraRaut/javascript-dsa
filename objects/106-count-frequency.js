function countFrequency(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      data[arr[i]] = data[arr[i]] + 1;
    } else {
      data[arr[i]] = 1;
    }
  }
  return data;
}

console.log(countFrequency([2, 3, 2, 5, 3, 2]));
