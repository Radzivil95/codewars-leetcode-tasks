/*

*/

var expect = function(val) {
  let x = {
      toBe: function(x) {
          if(x === val) {
              return true
          }
          return "Not Equal"
      },
      notToBe: function(x) {
          if( val !== val) {
              return true
          }
          return "Not Equal"
      }
  }
  return x
};

console.log(expect(5).toBe(10));
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
console.log(expect(10).notToBe(5));
