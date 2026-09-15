function leastFrequent(arr) {
  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      data[arr[i]] = data[arr[i]] + 1;
    } else {
      data[arr[i]] = 1;
    }
  }

  let leastFrequentValue;
  let minCount;

  for (let key in data) {
    if (data[key] < minCount || minCount === undefined) {
      minCount = data[key];
      leastFrequentValue = key;
    }
  }
  return Number(leastFrequentValue);
}

console.log(leastFrequent([2, 3, 2, 5, 3, 2]));
