function vowelOne(s){
    let x = [ "a", "e", "i", "o", "u"]
    let result = "";
    for(let i=0;i<s.length;i++) {
      if(x.includes(s[i].toLowerCase())) {
        result += 1;
      } else {
        result += 0;
      }
    }
    console.log(result == '1010001001001101100100011010')
    return result;
  }

console.log(vowelOne("o&o^FYUylI;kOA;IaS^i8XjiU<e-"));
