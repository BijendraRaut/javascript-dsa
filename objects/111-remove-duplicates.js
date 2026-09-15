function removeDuplicates(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    data[arr[i]] = true;
  }

  let dupArr = [];

  for (let key in data) {
    dupArr.push(Number(key));
  }
  return dupArr;
}

console.log(removeDuplicates([2, 3, 2, 3, 5, 2]));
