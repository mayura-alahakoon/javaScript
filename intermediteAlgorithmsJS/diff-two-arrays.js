function diffArray(arr1, arr2) {
  const newArr = [];

  function compareAgainstOther(first, second) {
    first.forEach(number => {
      if(second.indexOf(number) === -1) {newArr.push(number)}
    });
  }

  compareAgainstOther(arr1, arr2);
  compareAgainstOther(arr2, arr1);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
