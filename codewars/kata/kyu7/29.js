//unluckyDays

function unluckyDays(year){
  
  let result = 0;

  for(let i = 0; i < 12; i++) {
    let d = new Date(year, i, 13);
    if(d.getDay() == 5) {
      result =+ 1;
    }
  }
  return result;
}

console.log(unluckyDays(1586));