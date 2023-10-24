//Spin Around, Touch the Ground

function spinAround(turns) {
  let result = 0;
  for (i in turns) {
    if(turns[i] === 'right') {
      result += 90;
    } else {
      result -= 90;
    }
    
  }
  if(Math.abs(result) < 360) {
    return 0;
  }
  return Math.floor(Math.abs(result) / 360);
}


console.log(spinAround(['left', 'left', 'left', 'left']));