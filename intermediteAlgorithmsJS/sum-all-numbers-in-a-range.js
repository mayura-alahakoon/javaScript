function sumAll(arr) {
  let minNumber = Math.min(arr[0], arr[1]);
  let maxNumber = Math.max(arr[0], arr[1]);
  var result = 0;

  for(var i = minNumber; i <= maxNumber; i+=1) {
    console.log(i, "<= i", result, "<= result");
    result += i;
  }
  return result;
}

sumAll([1, 4]);
