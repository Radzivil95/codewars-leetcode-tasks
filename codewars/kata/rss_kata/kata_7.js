function getDecimal(n){
    if (n < 0) {
       return Math.abs(n % 1);

    } else {
        return n % 1;
    }

}

console.log(getDecimal(4.5));
console.log(getDecimal(-1.2));
