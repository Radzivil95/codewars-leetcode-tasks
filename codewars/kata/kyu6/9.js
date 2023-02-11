// Clocky Mc Clock-Face


var whatTimeIsIt = function(angle) {
  h = Math.floor(angle / 60 * 2);
  m = Math.floor(angle % 30 * 2);
  let result = ["00",":","00"];
  if(h < 10) {
    result[0] = "0" + h.toString();
  } else {
    result[0] = h.toString();
  }
  if(m < 10) {
    result[2] = "0" + m.toString();
  } else {
    result[2] = m.toString();
  }
  return result.join("");
}

console.log(whatTimeIsIt(0));
console.log(whatTimeIsIt(90));
console.log(whatTimeIsIt(30));
console.log(whatTimeIsIt(180));
console.log(whatTimeIsIt(20));
console.log(whatTimeIsIt(200));
console.log(whatTimeIsIt(200.2323424));