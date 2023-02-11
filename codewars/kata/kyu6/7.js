// bingo card

function getCard() {
  let result = [];
  let x = 0;
  let y = 0;
  let z = 0;
  let a = 0;
  let b = 0;
  while(x < 5) {
    let tmp = "B" + getRandomInt(1, 15);
    if(!result.includes(tmp)) {
      result.push(tmp);
      x++;
    }
  }
  while(z < 5) {
    let tmp = "I" + getRandomInt(16, 30);
    if(!result.includes(tmp)) {
      result.push(tmp);
      z++;
    }
  }
  while(y < 4) {
    let tmp = "N" + getRandomInt(31, 45);
    if(!result.includes(tmp)) {
      result.push(tmp);
      y++;
    }
  }
  while(a < 5) {
    let tmp = "G" + getRandomInt(46, 60);
    if(!result.includes(tmp)) {
      result.push(tmp);
      a++;
    }
  }
  while(b < 5) {
    let tmp = "O" + getRandomInt(61, 75);
    if(!result.includes(tmp)) {
      result.push(tmp);
      b++;
    }
  }
  return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getCard());