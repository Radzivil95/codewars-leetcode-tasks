function getCount(str) {
    let result = 0;
    let x = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < str.length; i++) {
      if(x.includes(str[i])) {
        result += 1;
      }
    }
    return result;
}

console.log(getCount("abracadabra"));