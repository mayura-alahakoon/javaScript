 function destroyer(arr) {
  let survingElements = [];
  let battleField = Object.values(arguments)[0];
  let elementsToDestroy = Object.values(arguments).splice(1);

  for(let i=0; i < battleField.length; i +=1) {
    let positionToRecon = battleField[i];
    if (elementsToDestroy.indexOf(positionToRecon) === -1) {
      survingElements.push(positionToRecon);
    }
  }
  return survingElements;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
