function truthCheck(collection, pre) {
  let result = true;
  for (let i = 0; i < collection.length; i += 1) {
    if (
      collection[i][pre] === undefined ||
      collection[i][pre] === 0 ||
      collection[i][pre] === null ||
      collection[i][pre] === "" ||
      collection[i][pre] === true ||
      Number.isNaN(collection[i][pre])
    ) {
      result = false;
    }
  }
  return result;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
