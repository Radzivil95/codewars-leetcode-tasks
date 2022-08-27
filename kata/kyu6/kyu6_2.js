/**
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.
 */

function parse(data){
    let result = [];
    let x = 0;
    for(let i = 0; i < data.length; i++) {
        if (data[i] == 'i') {
            x++;
        } else if (data[i] == 's') {
            x = x*x;
        } else if (data[i] == 'd') {
            x--;
        } else if (data[i] == 'o') {
            result.push(x);
            
            
        }
    }
    
    return result;
}


console.log(parse("iiisdoso"));
console.log(parse("sosoooio"));


//best practice
function parse(data) {
    let res = [];
  
    data.split('').reduce((cur, s) => {
      if (s === 'i') cur++;
      if (s === 'd') cur--;
      if (s === 's') cur = Math.pow(cur, 2);
      if (s === 'o') res.push(cur);
      
      return cur;
    }, 0);
    
    return res;
  }