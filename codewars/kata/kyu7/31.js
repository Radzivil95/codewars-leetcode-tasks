function XO(str) {
  let arr = str.toLowerCase().split('');
  let x = 0;
  let o = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 'x') {
      x += 1;
    }
    if(arr[i] == 'o') {
      o += 1;
    }
  }
  if(x == o) {
    return true;
  }
  return false;
}

console.log(XO("xxxm"));
console.log(XO("xxoo"));
console.log(XO("xxOo"));
