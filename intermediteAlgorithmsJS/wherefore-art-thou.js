function whatIsInAName(collections, source) {
  var matchingResult = [];
  collections.forEach(collection => {
    let index = 0;
    for (let key in source) {
      if(collection[key] === source[key]) {
        index += 1;
      }
      if (index === Object.keys(source).length) {
        matchingResult.push(collection);
      }
      console.log(index, Object.keys(source).length);
    }
  });
  return matchingResult;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
