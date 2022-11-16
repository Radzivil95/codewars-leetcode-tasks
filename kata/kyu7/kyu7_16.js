function triangular(n) {
    if (n < 0) {
      return 0;
    }
    let result = 0;
    for(let i = n; i > 0; i--) {
      result += i;
    }
    return result;
}

console.log(triangular(4));