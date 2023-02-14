// Middle of the Linked List
var middleNode = function(head) {
    let x = Math.ceil(head.length / 2);
    let z = [];
    if(head.length % 2 == 0) {
      for(let i = x; i < head.length; i++) {
        z.push(head[i]);
      }
    } else {
      for(let i = x; i <= head.length; i++) {
        z.push(head[i-1]);
      }
    }
    return z
};

console.log(middleNode([1,2,3,4,5,6]));
console.log(middleNode([1,2,3,4,5]));