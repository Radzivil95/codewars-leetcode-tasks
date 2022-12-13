/*

*/

function correctTail(bod, tail) {
    let sub = bod.length -1;
    if (bod[sub] == tail) {
      return true;
    } else {
      return false;
    }
  }

console.log(correctTail("Fox", "x"));


console.log("*" * 3);