// Minimize Sum Of Array (Array Series #1)

function minSum(arr) {
  arr.sort((a, b) => a - b).reverse();
  let x = [];
  let y = [];
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    if(i < arr.length/2) {
      x.push(arr[i]);
    } else {
      y.push(arr[i]);
    }
  }
  y.reverse();
  for(let p = 0; p < x.length; p++) {
    result = result + x[p] * y[p];
  }
  return result;
}

console.log(minSum([5,4,2,3]));
console.log(minSum([12,6,10,26,3,24]));