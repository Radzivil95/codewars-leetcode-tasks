function isPowerOfTwo(n){
    let x = n;
    while (x >= 2) {
        if (x / 2 == 1) {
            return true
        } else {
            let y = x / 2;
            x = y;
        }
    }
    return false;
  }

console.log(isPowerOfTwo(16));

console.log(1**2)