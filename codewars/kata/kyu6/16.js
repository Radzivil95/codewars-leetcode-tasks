// N-th Fibonacci

function nthFibo(n) {
    const arr = [0,1];
    let x = n;
    let current = 1;
    let previous = 0;

    if(n <= 1) {
      return arr;
    } 

    while(n > 0){
        current += previous;
        previous = current - previous;
        arr.push(current);
        n-=1;
    }
    return arr[x-1];
}


console.log(nthFibo(3));