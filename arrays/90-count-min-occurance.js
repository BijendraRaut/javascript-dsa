function findSmallest(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

function countMinOccurrence(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let count = 0;
  let smallest = findSmallest(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === smallest) {
      count++;
    }
  }

  return count;
}

console.log(countMinOccurrence([4, 2, 8, 2, 6, 2]));
