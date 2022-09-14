function brightest(colors){
    let result = 0;
    let mV = 0;
  for(let i = 0; i < colors.length; i ++) {
    let a = parseInt(colors[i].slice(1,3), 16),
        b = parseInt(colors[i].slice(3,5), 16),
        c = parseInt(colors[i].slice(5,7), 16);
    let v = Math.max(a,b,c);
    if(v > mV) {
        result = colors[i];
        mV = v;
    }
  }
  return result;
}
console.log(brightest(["#001000", "#000000"]));