// Human readable duration format
function formatDuration (seconds) {
  const year = 31536000;
  const day = 86400;
  const hour = 3600;
  const minute = 60;
  const second = 1;

  let amountYears = Math.floor(seconds / year);
  let amountDays = Math.floor(seconds / day) % 365;
  let amountHours = Math.floor((seconds % day) / hour);
  let amountMinutes = Math.floor(seconds % hour / minute);
  let amountSeconds = seconds % minute;

  

  if (seconds == 1) {
    return '1 second';
  }
  if (seconds < 60) {
    return `${seconds} seconds`;
  }
  if (seconds >= 60 && seconds < 120) {
    return `${amountMinutes} minute ${ds}`
  }
  return amountSeconds;
}


console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));

console.log(formatDuration(61536000));