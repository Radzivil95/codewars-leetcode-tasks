//Pair of gloves

function numberOfPairs(gloves)
{
  let y = [];
  const unique = new Set(gloves);
  for(item of unique) {
    let x = 0;
    for(let i = 0; i < gloves.length; i++) {
      if(gloves[i] == item) {
        x++;
      }
    }
    y.push(x);
  }
  let result = 0;
  for(let i = 0; i < y.length; i++) {
    result += Math.floor(y[i] / 2);
  }
  return result;
}

console.log(numberOfPairs(['red','red']));
console.log(numberOfPairs(['gray','black','purple','purple','gray','black']));