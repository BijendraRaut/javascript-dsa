function mostFrequent(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      data[arr[i]] = data[arr[i]] + 1;
    } else {
      data[arr[i]] = 1;
    }
  }

  let mostFrequentValue;
  let maxCount = 0;

  for (let key in data) {
    if (data[key] > maxCount) {
      maxCount = data[key];
      mostFrequentValue = key;
    }
  }
  return Number(mostFrequentValue);
}

console.log(mostFrequent([2, 3, 2, 5, 3, 2]));
