// 


function factors(integer, limit){
  if(limit > integer) {
    return []
  }
  let result = [];
  for( let i = limit; i <= integer; i++) {
    if(integer % i == 0) {
      result.push(i);
    }
  }
  return result
}

console.log(factors(30, 2));
console.log(factors(5, 1));