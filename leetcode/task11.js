// 67. Add Binary

var addBinary = function(a, b) {
  let result = '';
  let x = a.length - 1;
  let y = b.length - 1;
  let tmp = 0;

  while (x >= 0 || y >= 0) {
    // Sum of two bits
    let sum = tmp;
    if (x >= 0) {
        sum += a[x--] - '0';
    }
    if (y >= 0) {
        sum += b[y--] - '0';
    }

    result = sum % 2 + result;

    tmp = parseInt(sum / 2);
}

if (tmp > 0) {
    result = 1 + result;
}
return result;
};

console.log(addBinary('11','1'));

