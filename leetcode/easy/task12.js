// 989. Add to Array-Form of Integer

var addToArrayForm = function(num, k) {
  let x = String(parseInt(num.join('')) + k);
  console.log(x);
  let result = [];
  for(let i = 0; i < x.length; i++) {
    result.push(+x[i]);
  }
  return result;
};

console.log(addToArrayForm([2,7,4], 181))

console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));