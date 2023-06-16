

function formatDuration (seconds) {
  const year = 31536000;
  const day = 86400;
  const hour = 3600;
  const minute = 60;
  const second = 1;
  const plural = 's';
  const time = { 
    year: year,
    day: day,
    hour: hour, 
    minute: minute, 
    second: second 
  };
  const result = [];
  
  for (let item in time) {
    if (seconds >= time[item]) {
      let num = Math.floor(seconds/time[item]);
      result.push(num += num > 1 ? ' ' + item + 's' : ' ' + item);
      seconds = seconds % time[item];
    }
  }
 
  if(result.length > 1) {
    return result.join(', ').replace(/,([^,]*)$/,' and'+'$1').trim();
  } else {
    return result.join('').trim();
  }
}

console.log(formatDuration(1));
console.log(formatDuration(5));
console.log(formatDuration(62));
console.log(formatDuration(61));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(7200));
console.log(formatDuration(3662));
console.log(formatDuration(3751));
console.log(formatDuration(8751));
console.log(formatDuration(138751));
console.log(formatDuration(338751));
console.log(formatDuration(61536000));
console.log(formatDuration(121536000));