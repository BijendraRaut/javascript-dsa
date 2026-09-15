function firstDuplicate(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      return arr[i];
    } else {
      data[arr[i]] = true;
    }
  }

  return -1;
}

console.log(firstDuplicate([5, 3, 2, 3, 2, 3, 5, 2]));
