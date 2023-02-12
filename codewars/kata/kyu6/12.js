// WeIrD StRiNg CaSe

function toWeirdCase(string){
  string = string.split(' ');
  let x = 0;
  let result = [];
    for(let i = 0; i < string.length; i++) {
      x += string[i].length;
    }
    for(let i = 0; i < string.length; i++) {
      for(let j = 0; j < string[i].length; j++) {
        if(j % 2 == 0) {
          result.push(string[i][j].toUpperCase());
        } else {
          result.push(string[i][j].toLowerCase());
        }
      }
      result.push(" ")
    }
  return result.join("")
}

console.log(toWeirdCase('This is a test'));

