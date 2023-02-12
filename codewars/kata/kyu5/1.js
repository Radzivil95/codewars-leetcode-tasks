// RGB To Hex Conversion
function rgb(r, g, b){
  let answer = '';
  if(r > 255) {
    r = 255;
    answer += r.toString(16);
  } else if(r <= 0) {
    r = 0;
    answer += '00';
  } else {
    if(r.toString(16).length == 1) {
      answer += "0" + r.toString(16);
    } else {
      answer += r.toString(16);
    }
  }

  if(g > 255) {
    g = 255;
    answer += g.toString(16);
  } else if(g <= 0) {
    g = 0;
    answer += '00';
  } else {
    if(g.toString(16).length == 1) {
      answer += "0" + g.toString(16);
    } else {
      answer += g.toString(16);
    }
  }
  if(b > 255) {
    b = 255;
    answer += b.toString(16);
  } else if(b <= 0) {
    b = 0;
    answer += '00';
  } else {
    if(b.toString(16).length == 1) {
      answer += "0" + b.toString(16);
    } else {
      answer += b.toString(16);
    }
  }
  return answer.toUpperCase();
}

console.log(rgb(300,255,255));
console.log(rgb(0, 0, 15));
console.log(rgb(0, 0, -20));