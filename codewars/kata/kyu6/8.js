// Bit Counting

// var countBits = function(n) {
//   let binary = (n % 2).toString();
//   for (; n > 1; ) {
//       n = parseInt(n / 2);
//       binary =  (n % 2) + (binary);
//   }
//   let count = 0;
//   for(let i = 0; i < String.toString(binary).length; i++) {
//     if(binary[i] == '1') {
//       count++;
//     }
//   }
//   return count;
// };

var countBits = function(n) {
  let x = n.toString(2);
  let count = 0;
  for(let i = 0; i < x.length; i++) {
    if(x[i] == '1') {
      count++;
    }
  }
  return count;
};
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(0));
console.log(countBits(4));
