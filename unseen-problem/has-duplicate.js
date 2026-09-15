function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
//optimised

function hasDuplicates(arr) {
  const set = new Set(arr);

  return set.size !== arr.length;
}
console.log(hasDuplicates([1, 2, 3, 4])); // false
console.log(hasDuplicates([1, 2, 3, 2])); // true
console.log(hasDuplicates([5, 5])); // true
console.log(hasDuplicates([])); // false
console.log(hasDuplicates([7])); // false
