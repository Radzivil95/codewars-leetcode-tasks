// 
let dataJ = [1,0,1,0,1,0,1,0, 0,0,0,0,1,1,1,1, 0,0,0,0,0,0,0,0, 1,1,1,1,1,1,1,1]
function dataReverse(data) {
    let y = data.join("");
    let x = [];
    let a = 0;
    let b = 8;
    for(let j = 0; j < y.length / 8; j++) {
        x.push(y.slice(a,b));
        a +=8;
        b +=8;
    }
    x.reverse();
    let l = x.join("");
    let result = [];
    for(let i = 0; i < l.length; i++) {
        result.push(parseInt(l[i]));
    }
    return result;
  }

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));