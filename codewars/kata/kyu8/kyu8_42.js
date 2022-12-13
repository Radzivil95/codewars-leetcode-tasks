function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = [];
    for(let i = 0; i < birds.length; i++) {
      if (!(geese.includes(birds[i]))) {
        result.push(birds[i]);
      }
    }
    return result;
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));