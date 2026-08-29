function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return undefined;
  }
  let smallest = arr[0];
  let secondSmallest;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    }

    if (
      arr[i] > smallest &&
      (secondSmallest === undefined || arr[i] < secondSmallest)
    ) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 20, 8, 15])); // 8
console.log(findSecondSmallest([5, 10])); // 10
console.log(findSecondSmallest([5, 5, 10])); // 10
console.log(findSecondSmallest([10, 10, 10])); // undefined
console.log(findSecondSmallest([-10, -5, -20])); // -10
console.log(findSecondSmallest([5])); // undefined
console.log(findSecondSmallest([])); // undefined
