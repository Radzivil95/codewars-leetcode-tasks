// Duplicate Encoder

function duplicateEncode(word){
  let test = [];
  let x = word.toLowerCase();
  for(let i = 0; i < x.length; i++) {
    let tmp = 0;
    for(let j = 0; j < x.length; j++) {
      if(x[i] == x[j] ) {
        tmp++;
      }
    }
    test.push(tmp);
  }
  let result = '';
  for(let i = 0; i < test.length; i++) {
    if(test[i] == 1) {
      result = result + '(';
    } else {
      result = result + ')';
    }
  }
  return result;
}


console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))