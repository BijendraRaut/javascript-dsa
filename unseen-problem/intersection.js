function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        let alreadyExist = false;
        for (let k = 0; k < result.length; k++) {
          if (arr2[j] === result[k]) {
            alreadyExist = true;
            break;
          }
        }
        if (!alreadyExist) {
          result.push(arr2[j]);
        }
      }
    }
  }
  return result;
}

console.log(intersection([7, 7, 8, 9], [7, 9, 9]));
