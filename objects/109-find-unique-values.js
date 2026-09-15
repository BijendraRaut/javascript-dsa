function findUniqueValues(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      data[arr[i]] = data[arr[i]] + 1;
    } else {
      data[arr[i]] = 1;
    }
  }
  let uniqueArr = [];
  for (let key in data) {
    if (data[key] === 1) {
      uniqueArr.push(Number(key));
    }
  }
  return uniqueArr;
}

console.log(findUniqueValues([2, 3, 2, 5, 2]));
