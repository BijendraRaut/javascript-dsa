function findDuplicates(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      data[arr[i]] = data[arr[i]] + 1;
    } else {
      data[arr[i]] = 1;
    }
  }

  let dupArr = [];

  for (let key in data) {
    if (data[key] > 1) {
      dupArr.push(Number(key));
    }
  }
  return dupArr;
}

console.log(findDuplicates([2, 3, 2, 3, 5, 2]));
