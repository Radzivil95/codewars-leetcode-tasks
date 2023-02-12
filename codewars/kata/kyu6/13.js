// Lottery Ticket
function bingo(ticket, win){
  total = 0;
  for(let i = 0; i < ticket.length; i++) {
    if(ticket[i][0].charCodeAt(0) == ticket[i][1]) {
      total++
    }
  }
  return total;
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
console.log(bingo([['AYANO',79], ['AGQAT',68], ['EUKOAIQL',70], ['QSO',72]], 1));
console.log(bingo([['BKW',81], ['JWNT',74], ['LVUY',73], ['OANWLX',78], ['UPBHOU',76], ['TVXXL',74]], 2));