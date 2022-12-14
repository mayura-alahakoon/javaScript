function addTogether() {
  let firstArgument = arguments[0];

  if (arguments.length > 1) {
    let secondArgument = arguments[1];
    return checkArgumentsAndAddIfValid(firstArgument, secondArgument)
  }else if (arguments.length === 1) {
    if (argumentCheck(firstArgument) === undefined) {
      return undefined;
    } else {
      return function(secondArgument) {
        return checkArgumentsAndAddIfValid(firstArgument, secondArgument)
      }
    }
  }
}
function argumentCheck(argument) {
  if (typeof argument === "number") {
    return argument;
  }else{
    return undefined;
  }
}

function checkArgumentsAndAddIfValid(first, second) {
  if (
    argumentCheck(first) != undefined &&
    argumentCheck(second) != undefined) {
    return first + second ;
    }else {
      return undefined;
    }
}


addTogether(5)(7);
