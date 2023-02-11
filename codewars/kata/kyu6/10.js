// is prime


function isPrime(num) {
  if(num > 0) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false
      } else {
        return true
      }
    }
  } else {
    for(let i = num; i < 0; i++) {
      if(num % i === 0) {
        return false
      } else {
        return true
      }
    }
  }
}



console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(25));
console.log(isPrime(-4325));