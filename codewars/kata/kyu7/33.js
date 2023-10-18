/*
Get the Middle Character
*/
function getMiddle(s) {
  let x = s.length / 2
  if(s.length % 2 == 0) {
    return `${s[x - 1]}${s[x]}` 
  } else {
    return s[Math.floor(x)];
  }
}

console.log(getMiddle("testing"))
console.log(getMiddle("middle"))